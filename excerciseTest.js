let excercise=require('./excercise')

let initial=[['Yellow','Yellow','Red'],['Yellow','Red'],['Red'],['Red'],['Yellow','Red'],['Yellow','Yellow','Red']]
let target=[['Red','Red','Red'],['Red','Red'],['Red'],['Red'],['Red','Red'],['Red','Red','Red']]
let current=initial
let key=1
let step={
    [key]:current
}

let posible=()=>{
    let firstPosible=current=excercise.replace1to1(current,'Yellow','Red')
    let secondPosible=current=excercise.stack(current,'Yellow')
    let thirdPosible=current=excercise.replace1to2(current,'Yellow','Yellow','Red')
    let fourthPosible=current=excercise.reject(current,'Yellow')
}

while(target.toString()!=current.toString()){

}