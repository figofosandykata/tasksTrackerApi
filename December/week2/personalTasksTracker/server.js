const Hapi=require('@hapi/hapi')
const Joi=require('@hapi/joi')
const Bcrypt=require('bcrypt')
const qs=require('qs')

const CatboxRedis=require('@hapi/catbox-redis')

const users={
    user:{
        username:'user',
        password:'$2a$04$BB3BAXMwyqkRhPjs7kUgXuWn7.pYxNXHyyDzD3fDo5xACgF2KFsCi',
        name:'Just User',
        id:'123456'
    }
}

const validate=async(request,username,password)=>{
    const user=users[username]
    if(!user){
        return {credentials:null,isValid:false}
    }
    const isValid=await Bcrypt.compare(password, user.password)
    const credentials={id:user.id,name:user.name}
    return {isValid,credentials}
}

const getDateLog=(date)=>{
    const thisDate=new Date(date)
    let year=thisDate.getFullYear()
    let month=thisDate.getMonth()
    let day=thisDate.getDate()
    year=year>9?year:`0${year}`
    month=month>9?month:`0${month}`
    day=day>9?day:`0${day}`
    return `logs/${year}${month}${day}.log`
}

const start=async(url)=>{
    module.exports={url}
    const {rootHandler,tasksGetHandler,tasksDetailGetHandler,tasksPostHandler,tasksPutHandler,tasksDeleteHandler,getDetail}=require('./handler')
    const server=Hapi.server({
        port:1207,
        host:'127.0.0.1',
        query:{
            parser:(query)=>qs.parse(query)
        },
        cache:[
            {
                name:`tasksCache`,
                provider:{
                    constructor:CatboxRedis,
                    options:{
                        host:`127.0.0.1`,
                        port:6379
                    }
                }
            }
        ]
    })
    
    server.method(`getDetail`,getDetail,{
        cache:{
            cache:`tasksCache`,
            segment:`tasks`,
            expiresIn:1000*60*10,
            generateTimeout:3000
        }
    })

    await server.register(require('@hapi/basic'))

    await server.register({
        plugin:require('hapi-pino'),
        options:{
            prettyPrint:process.env.NODE_ENV!=='production',
            redact:['req.headers.authorization'],
            stream:getDateLog(Date.now())
        }
    })

    server.auth.strategy('simple','basic',{validate})

    server.route({
        method:'GET',
        path:'/',
        handler:rootHandler
    })
    
    server.route({
        method:'GET',
        path:'/api/tasks',
        handler:tasksGetHandler,
        options:{
            auth:'simple',
            validate:{
                query:{
                    sort:Joi.string(),
                    offset:Joi.number().integer().min(0),
                    limit:Joi.number().integer().min(1),
                    filter:Joi.object(),
                    dueDate:Joi.date()
                }
            }
        }
    })

    server.route({
        method:'GET',
        path:'/api/tasks/{id}',
        handler:tasksDetailGetHandler,
        options:{
            auth:'simple',
            validate:{
                params:{
                    id:Joi.number().integer().min(1)
                }
            }
        }
    })

    server.route({
        method:'POST',
        path:'/api/tasks',
        handler:tasksPostHandler,
        options:{
            auth:'simple',
            validate:{
                payload:{
                    id:Joi.forbidden(),
                    title:Joi.string().regex(/^[a-zA-Z]+\s*[a-zA-Z]+$/).required(),
                    description:Joi.string().regex(/^[a-zA-Z]+\s*[a-zA-Z]+$/).required(),
                    dueDate:Joi.date().min(Date.now()).required(),
                    comments:Joi.array().required(),
                    status:Joi.forbidden()
                }
            }
        }
    })

    server.route({
        method:'PUT',
        path:'/api/tasks/{id}',
        handler:tasksPutHandler,
        options:{
            auth:'simple',
            validate:{
                params:{
                    id:Joi.number().integer()
                },
                payload:{
                    id:Joi.number().integer(),
                    title:Joi.string().regex(/^[a-zA-Z]+\s*[a-zA-Z]+$/),
                    description:Joi.string().regex(/^[a-zA-Z]+\s*[a-zA-Z]+$/),
                    dueDate:Joi.date().min(Date.now()),
                    comments:Joi.array(),
                    status:Joi.forbidden()
                }
            }
        }
    })

    server.route({
        method:'DELETE',
        path:'/api/tasks/{id}',
        handler:tasksDeleteHandler,
        options:{
            auth:'simple',
            validate:{
                params:{
                    id:Joi.number().integer()
                }
            }
        }
    })

    await server.start()

    process.on('unhandledRejection',(err)=>{
        console.log(err)
        process.exit(1)
    })
    
    return server
}

module.exports={start}