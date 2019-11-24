let solution=require('./solution')
let posibility=require('./posible')

const main=(init,trgt)=>{
    let step=solution.main(init,trgt,6,{
        $1:current=>{
            let result=posibility.replace1to1(current,'Yellow','Brown')
            let message='replace Yellow to Brown'
            return{result,message}
        },
        $2:current=>{
            let result=posibility.replace1to2(current,'Yellow','Brown','Yellow')
            let message='replace Yellow to [Brown,Yellow]'
            return{result,message}
        },
        $3:current=>{
            let result=posibility.replace1to2(current,'Brown','Orange','Orange')
            let message='replace Brown to [Orange,Orange]'
            return{result,message}
        },
        $4:current=>{
            let result=posibility.reject(current,'Orange')
            let message='reject Orange'
            return{result,message}
        },
        $5:current=>{
            let result=posibility.stack(current,'Yellow')
            let message='stack Yellow'
            return{result,message}
        },
        $6:current=>{
            let result=posibility.stackEqual(current)
            let message='stack Equal Columns'
            return{result,message}
        }
    })
    getStep=()=>{
        return step
    }
    return {getStep}
}

module.exports={main}