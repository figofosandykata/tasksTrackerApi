let excercise=require('./excercise')

let Yellow='Yellow'
let Red='Red'
let initial=[[Yellow,Yellow,Red],[Yellow,Red],[Red],[Red],[Yellow,Red],[Yellow,Yellow,Red]]
let target=[[Red,Yellow,Red],[Red,Yellow,Red],[Red,Yellow,Red],[Red,Yellow,Red],[Red,Yellow,Red],[Red,Yellow,Red]]

let current=initial
let step=[]
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
                current=excercise.replace1to1(current,'Yellow','Red')
                step.push('replace Yellow to Red')
                step.push(current)
            } else if(element==2){
                current=excercise.stack(current,'Yellow')
                step.push('stack Yellow')
                step.push(current)
            } else if(element==3){
                current=excercise.replace1to2(current,'Yellow','Yellow','Red')
                step.push('replace Yellow to Red,Yellow')
                step.push(current)
            } else if(element==4){
                current=excercise.reject(current,'Yellow')
                step.push('reject Yellow')
                step.push(current)
            }
        })
    }
    count++
}

step.forEach(element=>{
    console.log(element)
})
