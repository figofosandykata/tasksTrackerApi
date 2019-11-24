let solution=require('./solution')
let posibility=require('./posible')

const main=(init,trgt)=>{
    let step=solution.main(init,trgt,4,{
        $1:current=>{
            let result=posibility.replace1to1(current,'Yellow','Red')
            let message='replace Yellow to Red'
            return{result,message}
        },
        $2:current=>{
            let result=posibility.stack(current,'Yellow')
            let message='stack Yellow'
            return{result,message}
        },
        $3:current=>{
            let result=posibility.replace1to2(current,'Yellow','Yellow','Red')
            let message='replace Yellow to [Yellow,Red]'
            return{result,message}
        },
        $4:current=>{
            let result=posibility.reject(current,'Yellow')
            let message='reject Yellow'
            return{result,message}
        }
    })
    getStep=()=>{
        return step
    }
    return {getStep}
}

module.exports={main}