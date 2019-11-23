const replace1to1=(array,fromColour,toColour)=>{
    return array.map(element=>{
        return element.map(elem=>{
            if(elem==fromColour){
                return toColour
            } else{
                return elem
            }
        })
    })
}

const replace1to2=(array,fromColour,firstToColour,secondToColour)=>{
    return array.map(element=>{
        let temp=[]
        element.forEach(elem => {
            if(elem==fromColour){
                temp.push(firstToColour)
                temp.push(secondToColour)
            } else {
                temp.push(elem)
            }
        })
        return temp
    })
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
    })
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
    array.forEach((element,index,array) => {
        concatedArray=concatedArray.concat(element)
        if(index==array.length-1||element.toString()!=array[index+1].toString()){
            temp.push(concatedArray)
            concatedArray=[]
        }
    });
    return temp
}
module.exports={replace1to1,replace1to2,reject,stack,filterContain,mapReverse,stackEqual}