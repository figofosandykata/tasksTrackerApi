const Hapi=require('@hapi/hapi')
const Joi=require('@hapi/joi')
const Inert=require('@hapi/inert')

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

    io.on('connection',socket=>{
        var chats=[]
        var chatDetail={}
        console.log('a user connected')
        socket.on('name',name=>{
            Object.assign(chatDetail,{name:name})
        })
        socket.on('time',time=>{
            Object.assign(chatDetail,{time:time})
        })
        socket.on('message',message=>{
            Object.assign(chatDetail,{message:message})
            chats.push(chatDetail)
            io.emit('chats',chats)
            io.emit('chat detail',chatDetail)
        })
        socket.on('disconnect',()=>{
            console.log('user disconnected')
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