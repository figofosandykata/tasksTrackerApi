let solution=require('./solution')
let posibility=require('./posible')

const main=(init,trgt)=>{
    let step=solution.main(init,trgt,7,{
        $1:current=>{
            let result=posibility.replace1to2(current,'Yellow','Yellow','Red')
            let message='replace Yellow to [Yellow,Red]'
            return{result,message}
        },
        $2:current=>{
            let result=posibility.replace1to2(current,'Cyan','Red','Cyan')
            let message='replace Cyan to [Red,Cyan]'
            return{result,message}
        },
        $3:current=>{
            let result=posibility.reject(current,'Yellow')
            let message='reject Yellow'
            return{result,message}
        },
        $4:current=>{
            let result=posibility.reject(current,'Cyan')
            let message='reject Cyan'
            return{result,message}
        },
        $5:current=>{
            let result=posibility.filterContain(current,'Red')
            let message='filter contains Red'
            return{result,message}
        },
        $6:current=>{
            let result=posibility.stack(current,'Red')
            let message='stack Red'
            return{result,message}
        },
        $7:current=>{
            let result=posibility.mapReverse(current)
            let message='reverse Map'
            return {result,message}
        }
    })
    getStep=()=>{
        return step
    }
    return {getStep}
}

module.exports={main}