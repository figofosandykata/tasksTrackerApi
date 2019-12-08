const Lab=require('@hapi/lab')
const {expect}=require('@hapi/code')
const {afterEach,beforeEach,describe,it}=exports.lab=Lab.script()
const {start}=require('../server')
const {exec}=require('child_process')

describe(`GET Root`,()=>{
    let server
    
    beforeEach(async ()=>{
        exec(`redis-server`)
        exec(`redis-cli flushdb`)
        server=await start('mongodb://localhost/test')
    })
    
    afterEach(async ()=>{
        await server.stop()
    })

    it('response statusCode for path "/" is 200',async()=>{
        const res=await server.inject({
            method:'GET',
            url:'/'
        })
        expect(res.statusCode).to.equal(200)
    })
    
    it('response result for path "/" is "This is a root route"',async()=>{
        const res=await server.inject({
            method:'GET',
            url:'/'
        })
        expect(res.result).to.equal("This is a root route")
    })
})