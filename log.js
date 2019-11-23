let solution=require('./staticSolution1')
let anotherSolution=require('./staticSolution2')
let Yellow='Yellow'
let Red='Red'
let initial=[[Yellow,Yellow,Red],[Yellow,Red],[Red],[Red],[Yellow,Red],[Yellow,Yellow,Red]]
let target=[[Red,Yellow,Red],[Red,Yellow,Red],[Red,Yellow,Red],[Red,Yellow,Red],[Red,Yellow,Red],[Red,Yellow,Red]]
let mySolution=solution.main(initial,target)
let mySolution2=anotherSolution.main(initial,target)

mySolution.getStep().forEach(element => {
  console.log(element)  
})

mySolution2.getStep().forEach(element=>{
  console.log(element)  
})