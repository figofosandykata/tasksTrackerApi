let posibility=require('./posible')

const main=(init,targ)=>{
    initial=init
    target=targ
    current=initial
    step=[]
    step.push(current)

    let posible=[
        [1],[2],[3],[4],
        [1,2],[1,3],[1,4],[2,1],[2,3],[2,4],[3,1],[3,2],[3,4],[4,1],[4,2],[4,3],
        [1,2,3],[1,2,4],[1,3,2],[1,3,4],[1,4,2],[1,4,3],
        [2,1,3],[2,1,4],[2,3,1],[2,3,4],[2,4,1],[2,4,3],
        [3,1,2],[3,1,4],[3,2,1],[3,2,4],[3,4,1],[3,4,2],
        [4,1,2],[4,1,3],[4,2,1],[4,2,3],[4,3,1],[4,3,2],
        [1,2,3,4],[1,2,4,3],[1,3,2,4],[1,3,4,2],[1,4,2,3],[1,4,3,2],
        [2,1,3,4],[2,1,4,3],[2,3,1,4],[2,3,4,1],[2,4,1,3],[2,4,3,1],
        [3,1,2,4],[3,1,4,2],[3,2,1,4],[3,2,4,1],[3,4,1,2],[3,4,2,1],
        [4,1,2,3],[4,1,3,2],[4,2,1,3],[4,2,3,1],[4,3,1,2],[4,3,2,1]
    ]
    let count=0

    while(target.toString()!=current.toString()){
        current=initial
        step=[]
        step.push(current)    
        if(count==63){
            break 
        } else {
            posible[count].forEach(element=>{
                if(element==1){
                    current=posibility.replace1to1(current,'Yellow','Red')
                    step.push('replace Yellow to Red')
                    step.push(current)
                } else if(element==2){
                    current=posibility.stack(current,'Yellow')
                    step.push('stack Yellow')
                    step.push(current)
                } else if(element==3){
                    current=posibility.replace1to2(current,'Yellow','Yellow','Red')
                    step.push('replace Yellow to Red,Yellow')
                    step.push(current)
                } else if(element==4){
                    current=posibility.reject(current,'Yellow')
                    step.push('reject Yellow')
                    step.push(current)
                }
            })
        }
        count++
    }

    const getStep=()=>{
        return step
    }
    return {getStep}
}
module.exports={main}