const main=(init,trgt,total,functions)=>{
    let initial=init
    let target=trgt
    let current=initial
    let step=[current]    
    let posible=[]
    let lastMove=1
    let firstMove=1
    let secondMove=1
    let thirdMove=1
    let myBoolean=false
    let another=true

    while(!(myBoolean)){
        posible.push(lastMove)
        current=initial
        step=[]
        step.push(current)
        posible.forEach(element=>{
            if(element==1){
                current=functions.$1(current).result
                step.push(functions.$1(current).message)
                step.push(current)
            } else if(element==2){
                current=functions.$2(current).result
                step.push(functions.$2(current).message)
                step.push(current)
            } else if(element==3){
                current=functions.$3(current).result
                step.push(functions.$3(current).message)
                step.push(current)
            } else if(element==4){
                current=functions.$4(current).result
                step.push(functions.$4(current).message)
                step.push(current)
            } else if(element==5){
                current=functions.$5(current).result
                step.push(functions.$5(current).message)
                step.push(current)
            } else if(element==6){
                current=functions.$6(current).result
                step.push(functions.$6(current).message)
                step.push(current)
            } else if(element==7){
                current=functions.$7(current).result
                step.push(functions.$7(current).message)
                step.push(current)
            } 
        })
        if(posible.length==1){
            if(posible[0]!=total){
                lastMove++
                posible=[]
            } else{
                firstMove=1
                lastMove=1
                posible=[]
                posible.push(firstMove)
            }
        } 
        else if(posible.length==2){
            if(posible[0]!=total) {
                if(posible[1]!=total) {
                    lastMove++
                } else {
                    firstMove++
                    lastMove=1
                }
                posible=[]
                posible.push(firstMove)
            } else{
                if(posible[1]!=total) {
                    lastMove++
                    posible=[]
                    posible.push(firstMove)
                } else {
                    firstMove=1
                    secondMove=1
                    lastMove=1
                    posible=[]
                    posible.push(firstMove)
                    posible.push(secondMove)
                }
            }
        } else if(posible.length==3){
            if(posible[0]!=total){
                if(posible[1]!=total){
                    if(posible[2]!=total){
                        lastMove++
                    } else {
                        secondMove++
                        lastMove=1
                    }
                } else{
                    if(posible[2]!=total){
                        lastMove++
                    } else {
                        firstMove++
                        secondMove=1
                        lastMove=1
                    }
                }
                posible=[]
                posible.push(firstMove)
                posible.push(secondMove)
            } else {
                if(posible[1]!=total){
                    if(posible[2]!=total){
                        lastMove++
                    } else {
                        secondMove++
                        lastMove=1
                    }
                    posible=[]
                    posible.push(firstMove)
                    posible.push(secondMove)
                } else{
                    if(posible[2]!=total){
                        lastMove++
                        posible=[]
                        posible.push(firstMove)
                        posible.push(secondMove)
                    } else {
                        firstMove=1
                        secondMove=1
                        thirdMove=1
                        lastMove=1
                        posible=[]
                        posible.push(firstMove)
                        posible.push(secondMove)
                        posible.push(thirdMove)
                    }
                }
            }
        } else {
            if(posible[0]!=total){
                if(posible[1]!=total){
                    if(posible[2]!=total){
                        if(posible[3]!=total) {
                            lastMove++
                        } else {
                            thirdMove++
                            lastMove=1
                        }
                    } else{
                        if(posible[3]!=total) {
                            lastMove++
                        } else {
                            secondMove++
                            thirdMove=1
                            lastMove=1
                        }
                    }
                } else{
                    if(posible[2]!=total){
                        if(posible[3]!=total) {
                            lastMove++
                        } else {
                            thirdMove++
                            lastMove=1
                        }
                    } else{
                        if(posible[3]!=total) {
                            lastMove++
                        } else {
                            firstMove++
                            secondMove=1
                            thirdMove=1
                            lastMove=1
                        }
                    }
                }
                posible=[]
                posible.push(firstMove)
                posible.push(secondMove)
                posible.push(thirdMove)
            } else {
                if(posible[1]!=total){
                    if(posible[2]!=total){
                        if(posible[3]!=total) {
                            lastMove++
                        } else {
                            thirdMove++
                            lastMove=1
                        }
                    } else{
                        if(posible[3]!=total) {
                            lastMove++
                        } else {
                            secondMove++
                            thirdMove=1
                            lastMove=1
                        }
                    }
                } else{
                    if(posible[2]!=total){
                        if(posible[3]!=total) {
                            lastMove++
                        } else {
                            thirdMove++
                            lastMove=1
                        }
                    } else{
                        if(posible[3]!=total) {
                            lastMove++
                        } else {
                            if(target.toString()!=current.toString()) {
                                step=['No Solution or the solution need map reverse']
                                break
                            }
                        }
                    }
                }
                posible=[]
                posible.push(firstMove)
                posible.push(secondMove)
                posible.push(thirdMove)
            }
        }
        step.forEach((element,index,array)=>{
            if(index!=array.length-1) {
                for(let i=index+1;i<array.length;i++){
                    if(element==array[i]){
                        current=[]
                    }
                }
            }
        })
        for(let i=0;i<target.length;i++){
            if(target.length!=current.length){
                myBoolean=false
                break
            } else{
                if(!another){
                    break
                }
                for(let j=0;j<target[i].length;j++){
                    if(target[i].length!=current[i].length){
                        another=false
                        myBoolean=false
                        break
                    } else{
                        if(target[i][j]!=current[i][j]){
                            another=false
                            myBoolean=false
                            break
                        } else{
                            if(i==target.length-1&&j==target[i].length-1){
                                another=false
                                myBoolean=true
                                break
                            }
                        }
                    }
                }
            }
        }
        another=true
    }
    return step
}

module.exports={main}
