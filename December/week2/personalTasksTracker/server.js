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

const start=async(url)=>{
    module.exports={url}
    const {rootHandler,tasksGetHandler,tasksDetailGetHandler,tasksPostHandler,tasksPutHandler,tasksDeleteHandler}=require('./handler')
    const server=Hapi.server({
        port:1207,
        host:'127.0.0.1',
        query:{
            parser:(query)=>qs.parse(query)
        }
    })
    
    await server.register(require('@hapi/basic'))

    await server.register({
        plugin:require('hapi-pino'),
        options:{
            prettyPrint:process.env.NODE_ENV!=='production',
            redact:['req.headers.authorization'],
            stream:'server.log'
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
            auth:'simple'
        }
    })

    server.route({
        method:'GET',
        path:'/api/tasks/{id}',
        handler:tasksDetailGetHandler,
        options:{
            auth:'simple'
        }
    })

    server.route({
        method:'POST',
        path:'/api/tasks',
        handler:tasksPostHandler,
        options:{
            auth:'simple'
        }
    })

    server.route({
        method:'PUT',
        path:'/api/tasks/{id}',
        handler:tasksPutHandler,
        options:{
            auth:'simple'
        }
    })

    server.route({
        method:'DELETE',
        path:'/api/tasks/{id}',
        handler:tasksDeleteHandler,
        options:{
            auth:'simple'
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