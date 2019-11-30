const Hapi=require('@hapi/hapi')
const Joi=require('@hapi/joi')
const Inert=require('@hapi/inert')
const sendMessage=require('redis').createClient()
const myRoom=require('redis').createClient()

const init= async()=>{
    const server=Hapi.server({
        port:1128,
        host:'0.0.0.0'
    })

    const io=require('socket.io')(server.listener)
    
    await server.register(Inert)
            
    server.route({
        method:'GET',
        path:'/',
        handler:(request,h)=>{
            return h.file('./index.html').code(200)
        }
    })

    server.route({
        method:'GET',
        path:'/client.js',
        handler:(request,h)=>{
            return h.file('./client.js').code(200)
        }
    })

    server.route({
        method:'GET',
        path:'/load',
        handler:(request,h)=>{
            const getMessages=new Promise((resolve,reject)=>{
                myRoom.lrange('myRoom',0,-1,(err,data)=>{
                    let messages=[]
                    messages=data.map(message=>JSON.parse(message))
                    resolve(messages)
                })
            })
            return getMessages
        }
    })

    io.on('connection',socket=>{
        let userName 
        let chatDetail={}
        socket.on('name',name=>{
            Object.assign(chatDetail,{name:name})
            userName=name
            console.log(`${name} is connected`)
        })
        socket.on('time',time=>{
            Object.assign(chatDetail,{time:time})
        })
        socket.on('message',message=>{
            Object.assign(chatDetail,{message:message})
            io.emit('chat detail',chatDetail)
            sendMessage.rpush('myRoom',JSON.stringify(chatDetail))
            sendMessage.publish('newRoom',JSON.stringify(chatDetail))
        })
        socket.on('disconnect',()=>{
            console.log(`${userName} is disconnected`)
        })
    })

    await server.start()
        
    console.log(`Server running on ${server.info.uri}`)
        
    process.on('unhandledRejection',(err)=>{
        console.log(err)
        process.exit(1)
    })
}

init()