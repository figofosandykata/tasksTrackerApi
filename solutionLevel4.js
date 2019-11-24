let solution=require('./solution')
let posibility=require('./posible')

const main=(init,trgt)=>{
    let step=solution.main(init,trgt,5,{
        $1:current=>{
            let result=posibility.plusOne(current,'Orange','Brown')
            let message='plus One'
            return{result,message}
        },
        $2:current=>{
            let result=posibility.minusOne(current,'Orange','Brown')
            let message='minus One'
            return{result,message}
        },
        $3:current=>{
            let result=posibility.multipleTwo(current,'Orange','Brown')
            let message='multiple Two'
            return{result,message}
        },
        $4:current=>{
            let result=posibility.powTwo(current,'Orange','Brown')
            let message='power Two'
            return{result,message}
        },
        $5:current=>{
            let result=posibility.filterEven(current,'Orange','Brown')
            let message='filter even'
            return{result,message}
        }
    })
    getStep=()=>{
        return step
    }
    return {getStep}
}

module.exports={main}