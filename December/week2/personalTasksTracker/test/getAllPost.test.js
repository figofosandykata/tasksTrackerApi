const Lab=require('@hapi/lab')
const {expect}=require('@hapi/code')
const {afterEach,beforeEach,describe,it}=exports.lab=Lab.script()
const {start}=require('../server')
const btoa=require('btoa')
const {exec}=require('child_process')

const auth={
    Authorization:`Basic ${btoa('user:password')}`
}


const sampleTask=(word,date)=>{
    return {
        title:`${word} title`,
        description:`${word} description`,
        dueDate:date,
        comments:[
            `${word} comment`,
            `${word} comment`
        ]
    }
}


describe(`GET All Task & POST`,()=>{
    let server

    const posting=(word,date)=>server.inject({
        method:'POST',
        url:'/api/tasks',
        headers:auth,
        payload:sampleTask(word,date)
    })
    
    beforeEach(async ()=>{
        exec(`redis-server`)
        exec(`redis-cli flushdb`)
        server=await start('mongodb://localhost/test')
    })
    
    afterEach(async ()=>{
        exec(`mongo test eval='db.tasks.drop()'`)
        await server.stop()
    })

    it('response statusCode for path "/api/tasks" is 401 without authorization',async()=>{
        const res=await server.inject({
            method:'GET',
            url:'/api/tasks'
        })
        expect(res.statusCode).to.equal(401)
    })
    
    it('response statusCode for path "/api/tasks" is 200 with authorization',async()=>{
        const res=await server.inject({
            method:'GET',
            url:'/api/tasks',
            headers:auth
        })
        expect(res.statusCode).to.equal(200)
    })

    it('response result for path "/api/tasks" is empty array',async()=>{
        const res=await server.inject({
            method:'GET',
            url:'/api/tasks',
            headers:auth
        })
        expect(res.result.length).to.equal(0)
    })
    it('response result for path "/api/tasks" is array with value after post',async()=>{
        await posting(`second`,`2020-01-01`)
        const res=await server.inject({
            method:'GET',
            url:'/api/tasks',
            headers:auth
        })
        expect(res.result.length).to.equal(1)
    })
})