const Hapi=require('@hapi/hapi')
const Joi=require('@hapi/joi')
const Inert=require('@hapi/inert')
const publishSuscribe=require('redis').createClient()

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
            const getChats=new Promise((resolve,reject)=>{
                publishSuscribe.lrange('channelsChat',0,-1,(err,data)=>{
                    let chats=[]
                    chats=data.map(chat=>JSON.parse(chat))
                    resolve(chats)
                })
            })
            return getChats
        }
    })

    server.route({
        method:'GET',
        path:'/channels',
        handler:(request,h)=>{
            const getChannels=new Promise((resolve,reject)=>{
                publishSuscribe.lrange('channels',0,-1,(err,data)=>{
                    let channelList=[]
                    channelList=data.map(channel=>JSON.parse(channel))
                    resolve(channelList)
                })
            })
            return getChannels
        }
    })

    io.on('connection',socket=>{
        let userName,channel 
        let chatDetail={}
        socket.on('channel',thisChannel=>{
            channel=thisChannel
            Object.assign(chatDetail,{channel:thisChannel})
        })
        socket.on('name',name=>{
            Object.assign(chatDetail,{name:name})
            userName=name
            console.log(`${name} is connected in channel ${channel}`)
        })
        socket.on('time',time=>{
            Object.assign(chatDetail,{time:time})
        })
        socket.on('message',message=>{
            Object.assign(chatDetail,{message:message})
            io.emit('chat detail',chatDetail)
            publishSuscribe.rpush('channels',JSON.stringify(channel))
            publishSuscribe.rpush('channelsChat',JSON.stringify(chatDetail))
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