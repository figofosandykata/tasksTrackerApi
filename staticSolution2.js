let posibility=require('./posible')

const main=(init,trgt)=>{
    let initial=init
    let target=trgt
    let current=initial
    let step=[current]
    
    let posible=[]
    let lastMove=1
    let firstMove=lastMove
    let secondMove=lastMove
    let thirdMove=lastMove
    let allMove=[1,2,3,4]

    while(target.toString()!=current.toString()){
        posible.push(lastMove)
        current=initial
        step=[]
        step.push(current)    
        posible.forEach(element=>{
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
        if(posible.length==1){
            if(posible[0]!=4){
                lastMove++
                posible=[]
            } else{
                firstMove=1
                lastMove=2
                posible=[]
                posible.push(firstMove)
            }
        } else if(posible.length==2){
            if(posible[0]==4) {
                if(posible[1]!=3){
                    lastMove++
                    posible=[]
                    posible.push(firstMove)
                } else {
                    firstMove=1
                    secondMove=2
                    lastMove=3
                    posible=[]
                    posible.push(firstMove)
                    posible.push(secondMove)
                }
            } else {
                if(posible[1]!=4){
                    if(posible[1]==posible[0]-1){
                        lastMove+=2
                    } else {
                        lastMove++
                    }
                } else {
                    firstMove++
                    lastMove=1
                }
                posible=[]
                posible.push(firstMove)
            }
        } else if(posible.length==3){
            if(posible[0]==4){
                if(posible[1]==3){
                    if(posible[2]==2){
                        firstMove=1
                        secondMove=2
                        thirdMove=3
                        lastMove=4
                        posible=[]
                        posible.push(firstMove)
                        posible.push(secondMove)
                        posible.push(thirdMove)
                    } else {
                        lastMove++
                        posible=[]
                        posible.push(firstMove)
                        posible.push(secondMove)
                    }
                } else{
                    if(posible[2]!=3){
                        if(posible[1]==posible[2]+1){
                            lastMove+=2
                        } else {
                            lastMove++
                        }
                    } else{
                        secondMove++
                        lastMove=1
                    }
                    posible=[]
                    posible.push(firstMove)
                    posible.push(secondMove)
                }
            } else {
                if(posible[1]==4&&(posible[2]==3||(posible[0]==3&&posible[2]==2))){
                        firstMove++
                        secondMove=1
                        if(posible[0]==1){
                            lastMove=3
                        } else {
                            lastMove=2
                        }
                } else if(posible[2]==4){
                    if(posible[0]==posible[1]+1){
                        secondMove+=2
                    } else {
                        secondMove++
                    }
                    if(posible[0]==1){
                        lastMove=2
                    } else {
                        lastMove=1
                    }
                } else {
                    lastMove=allMove.find(element=>{
                        return !(posible.some(elem=>elem==element))
                    })
                }
                posible=[]
                posible.push(firstMove)
                posible.push(secondMove)
            }
        } else {
            if(posible[0]==4){
                if(posible[1]==3){
                    if(posible[2]==2){
                        break
                    } else {
                        thirdMove++
                        posible=[]
                        posible.push(firstMove)
                        posible.push(secondMove)
                        posible.push(thirdMove)
                        lastMove=allMove.find(element=>{
                            return !(posible.some(elem=>elem==element))
                        })
                    }
                } else{
                    if(posible[2]!=3){
                        if(posible[1]==posible[2]+1){
                            thirdMove+=2
                        } else {
                            thirdMove++
                        }
                    } else{
                        secondMove++
                        thirdMove=1
                    }
                    posible=[]
                    posible.push(firstMove)
                    posible.push(secondMove)
                    posible.push(thirdMove)
                    lastMove=allMove.find(element=>{
                        return !(posible.some(elem=>elem==element))
                    })
                }
            } else {
                if(posible[1]==4&&(posible[2]==3||(posible[0]==3&&posible[2]==2))){
                        firstMove++
                        secondMove=1
                        if(posible[0]==1){
                            thirdMove=3
                        } else {
                            thirdMove=2
                        }
                    
                } else if(posible[2]==4){
                    if(posible[0]==posible[1]+1){
                        secondMove+=2
                    } else {
                        secondMove++
                    }
                    if(posible[0]==1){
                        thirdMove=2
                    } else {
                        thirdMove=1
                    }
                } else {
                    posible.pop()
                    thirdMove=allMove.find(element=>{
                        return !(posible.some(elem=>elem==element))
                    })
                }
                posible=[]
                posible.push(firstMove)
                posible.push(secondMove)
                posible.push(thirdMove)
                lastMove=allMove.find(element=>{
                    return !(posible.some(elem=>elem==element))
                })
            }
        }
    }

    getStep=()=>{
        return step
    }
    return {getStep}
}

module.exports={main}