const replace=(array,fromColours,toColours)=>{
    return array.map(element=>{
        let temp=[]
        let replaced=[]
        element.forEach((elem,ind,arr) => {
            if(fromColours.length==1) {
                if(elem==fromColours[0]){
                    temp.push(toColours[0])
                    if(toColours.length==2){
                        temp.push(toColours[1])
                    }
                } else {
                    temp.push(elem)
                }
            } else {
                if(ind!=arr.length-1){
                    if(replaced.some(e=>e==ind)) {
                    } else if(elem==fromColours[0]&&arr[ind+1]==fromColours[1]){
                        temp.push(toColours[0])
                        if(toColours.length==2){
                            temp.push(toColours[1])
                        }
                        replaced.push(ind+1)
                    } else {
                        temp.push(elem)
                    }
                } else {
                    if(replaced.some(e=>e==ind)) {
                    } else {
                        temp.push(elem)
                    }
                }
            }
        })
        return temp
    })
}

const replace1to1=(array,fromColour,toColour)=>{
    return replace(array,[fromColour],[toColour])
}

const replace1to2=(array,fromColour,firstToColour,secondToColour)=>{
    return replace(array,[fromColour],[firstToColour,secondToColour])
}

const replace2to1=(array,firstFromColour,secondFromColour,toColour)=>{
    return replace(array,[firstFromColour,secondFromColour],[toColour])
}

const reject=(array,rejectedColour)=>{
    return array.map(element=>{
        let temp=[]
        element.forEach(elem => {
            if(elem!=rejectedColour){
                temp.push(elem)
            }
        });
        return temp
    }).filter(element=>element.length!=0)
}

const stack=(array,stackedColour)=>{
    return array.map(element=>{
        let temp=[]
        element.forEach((elem,index,array) => {
            temp.push(elem)
            if(index==array.length-1){
                temp.push(stackedColour)
            }
        });
        return temp
    })
}

const filterContain=(array,containedColour)=>{
    return array.map(element=>{
        if(!element.some(elem=>elem==containedColour)){
            element=[]
        }
        return element
    }).filter(element=>element.length!=0)
}

const mapReverse=(array)=>{
    return array.map(element=>element.reverse())
}

const stackEqual=(array)=>{
    let temp=[]
    let concatedArray=[]
    array.forEach((element,index,arr) => {
        concatedArray=concatedArray.concat(element)
        if(index==arr.length-1||element.toString()!=arr[index+1].toString()){
            temp.push(concatedArray)
            concatedArray=[]
        }
    });
    return temp
}

const replaceWildCard=(array,fromColours,toColours)=>{
    return array.map(element=>{
        let temp=[]
        let replaced=[]
        element.forEach((elem,ind,arr) => {
            if(fromColours.length==0) {
                temp.push(toColours[0])
                temp.push(elem)
            } else {
                if(arr.length==1){
                    temp.push(elem)
                } else {
                    if(ind!=arr.length-1){
                        if(replaced.some(e=>e==ind)) {
                        } else if(elem==fromColours[0]){
                            temp.push(arr[ind+1])
                            replaced.push(ind+1)
                        } else {
                            temp.push(elem)
                        }
                    } else {
                        if(replaced.some(e=>e==ind)) {
                        } else {
                            temp.push(elem)
                        }
                    }
                }
            }
        })
        return temp
    })
}

const replaceWildCardToColour=(array,colour)=>{
    return replaceWildCard(array,[],[colour])
}

const replaceColourToWildCard=(array,colour)=>{
    return replaceWildCard(array,[colour],[])
}

const convertColourToNumber=(array,first,firstConverted,second,secondConverted)=>{
    let converted=replace1to1(array,first,firstConverted)
    return replace1to1(converted,second,secondConverted)
}

const convertArrayToNumber=(array,isConvertToNumber)=>{
    if(isConvertToNumber){
        return array.map(element=>{
            let temp=[0]
            let count=[0]
            element.forEach(elem => {
                temp[0]+=(elem*(2**count))
                count[0]++
            })
            return temp[0]
        })
    } else {
        return array.map(element => {
            let temp=[0,0,0]
            temp[0]=element%2
            if((element-(element%2))/2<2) {
                temp[1]=(element-(element%2))/2
            } else{
                temp[1]=((element-(element%2))/2)%2
                temp[2]=(((element-(element%2))/2)-(((element-(element%2))/2)%2))/2
            }
            return temp
        })       
    }
}

const arithmetic=(array,zero,one,callback,filter)=>{
    let initial=convertColourToNumber(array,zero,0,one,1)
    let initialNumber=convertArrayToNumber(initial,true)
    let resultNumber
    if(!filter){
        resultNumber=initialNumber.map(callback)
    } else {
        resultNumber=initialNumber.filter(element=>element%2==0)
    }
    let result=convertArrayToNumber(resultNumber,false)
    return convertColourToNumber(result,0,zero,1,one)
}

const plusOne=(array,zero,one)=>{
    return arithmetic(array,zero,one,element=>{return (element+1)%8},false)
}

const minusOne=(array,zero,one)=>{
    return arithmetic(array,zero,one,element=>{return (element+8-1)%8},false)
}

const multipleTwo=(array,zero,one)=>{
    return arithmetic(array,zero,one,element=>{return (element*2)%8},false)
}

const powTwo=(array,zero,one)=>{
    return arithmetic(array,zero,one,element=>{return (element**2)%8},false)
}

const filterEven=(array,zero,one)=>{
    return arithmetic(array,zero,one,{},true)
}

module.exports={
    replace1to1,replace1to2,reject,stack,
    filterContain,mapReverse,stackEqual,replace2to1,
    replaceWildCardToColour,replaceColourToWildCard,
    plusOne,minusOne,multipleTwo,powTwo,filterEven
}