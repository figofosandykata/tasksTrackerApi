const {start}=require('./server')
const {exec}=require('child_process')
exec(`redis-server`)
exec(`redis-cli flushdb`)

start(`mongodb://localhost/dkata`)
    .then((server)=>{
        console.log(`Server running on ${server.info.uri}`)
    })