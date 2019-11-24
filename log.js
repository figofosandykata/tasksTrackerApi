let solutionLevel0=require('./solutionLevel0')
let solutionLevel1=require('./solutionLevel1')
let solutionLevel2=require('./solutionLevel2')
let solutionLevel3=require('./solutionLevel3')
let solutionLevel4=require('./solutionLevel4')

let Yellow='Yellow'
let Red='Red'
let Cyan='Cyan'
let Brown='Brown'
let Orange='Orange'

let initial0=[[Yellow,Yellow,Red],[Yellow,Red],[Red],[Red],[Yellow,Red],[Yellow,Yellow,Red]]
let initial1a=[[Red,Red],[Red,Yellow],[Cyan,Yellow],[Cyan,Cyan]]
let initial1b=[[Cyan,Cyan,Yellow],[Cyan,Red],[Cyan,Red],[Cyan,Cyan,Yellow]]
let initial2a=[[Brown],[Orange],[Orange],[Yellow],[Yellow],[Yellow],[Orange],[Orange],[Brown]]
let initial2b=[[Brown],[Orange],[Orange],[Brown]]
let initial3a=[[Cyan,Orange],[Cyan,Cyan,Orange],[Orange,Orange],[Cyan,Cyan,Orange],[Cyan,Orange]]
let initial3b=[[Orange],[Orange,Orange],[Orange,Orange,Orange],[Orange,Orange,Orange,Orange],[Orange,Orange,Orange],[Orange,Orange],[Orange]]
let initial4=[[Orange,Orange,Orange],[Brown,Orange,Orange],[Orange,Brown,Orange],[Brown,Brown,Orange],[Orange,Orange,Brown],[Brown,Orange,Brown],[Orange,Brown,Brown],[Brown,Brown,Brown]]

let target01=[[Red,Red,Red],[Red,Red],[Red],[Red],[Red,Red],[Red,Red,Red]]
let target02=[[Red],[Red],[Red],[Red],[Red],[Red]]
let target03=[[Red,Yellow],[Red,Yellow],[Red,Yellow],[Red,Yellow],[Red,Yellow],[Red,Yellow]]
let target04=[[Red,Yellow,Red],[Red,Yellow,Red],[Red,Yellow,Red],[Red,Yellow,Red],[Red,Yellow,Red],[Red,Yellow,Red]]
let target11=[[Red,Red,Red],[Red,Yellow,Red],[Red,Yellow,Red],[Red,Red,Red]]
let target12=[[Red,Red],[Red,Red]]
let target13=[[Red,Cyan,Cyan],[Red,Cyan],[Red,Cyan],[Red,Cyan,Cyan]]
let target14=[[Red,Red],[Red,Red],[Red,Red],[Red,Red]]
let target21=[[Brown],[Orange,Orange],[Brown,Brown,Brown],[Orange,Orange],[Brown]]
let target22=[[Brown,Brown],[Orange,Brown,Orange,Brown],[Brown,Brown,Brown,Brown,Brown,Brown],[Orange,Brown,Orange,Brown],[Brown,Brown]]
let target23=[[Brown,Brown],[Brown],[Brown,Brown,Brown,Brown],[Brown],[Brown,Brown]]
let target24=[[Orange,Orange,Orange,Orange],[Orange,Orange],[Orange,Orange],[Orange,Orange,Orange,Orange]]
let target25=[[Yellow],[Yellow],[Yellow,Yellow,Yellow,Yellow],[Yellow],[Yellow]]
let target31=[[Cyan],[Cyan,Orange],[Cyan],[Cyan,Orange],[Cyan]]
let target32=[[Orange,Cyan],[Orange,Orange],[Orange,Cyan],[Orange,Orange],[Orange,Cyan]]
let target33=[[Orange,Orange],[Orange,Cyan],[Orange,Orange],[Orange,Cyan],[Orange,Orange],[Orange,Cyan],[Orange,Orange]]
let target41=[[Brown,Orange,Orange],[Brown,Brown,Orange],[Brown,Orange,Brown],[Brown,Brown,Brown],[Brown,Orange,Orange],[Brown,Brown,Orange],[Brown,Orange,Brown],[Brown,Brown,Brown]]
let target42=[[Brown,Orange,Orange],[Brown,Brown,Orange],[Brown,Orange,Brown],[Brown,Brown,Brown]]
let target43=[[Orange,Orange,Orange],[Orange,Orange,Orange],[Orange,Orange,Orange],[Orange,Orange,Orange],[Orange,Orange,Orange],[Orange,Orange,Orange],[Orange,Orange,Orange],[Orange,Orange,Orange]]
let target44=[[Orange,Orange,Brown],[Orange,Brown,Orange],[Orange,Orange,Brown],[Orange,Brown,Orange],[Orange,Orange,Brown],[Orange,Brown,Orange],[Orange,Orange,Brown],[Orange,Brown,Orange]]

let mySolutionLevel01=solutionLevel0.main(initial0,target01)
let mySolutionLevel02=solutionLevel0.main(initial0,target02)
let mySolutionLevel03=solutionLevel0.main(initial0,target03)
let mySolutionLevel04=solutionLevel0.main(initial0,target04)
let mySolutionLevel11=solutionLevel1.main(initial1a,target11)
let mySolutionLevel12=solutionLevel1.main(initial1a,target12)
let mySolutionLevel13=solutionLevel1.main(initial1b,target13)
let mySolutionLevel14=solutionLevel1.main(initial1a,target14)
let mySolutionLevel21=solutionLevel2.main(initial2a,target21)
let mySolutionLevel22=solutionLevel2.main(initial2a,target22)
let mySolutionLevel23=solutionLevel2.main(initial2a,target23)
let mySolutionLevel24=solutionLevel2.main(initial2b,target24)
let mySolutionLevel25=solutionLevel2.main(initial2a,target25)
let mySolutionLevel31=solutionLevel3.main(initial3a,target31)
let mySolutionLevel32=solutionLevel3.main(initial3a,target32)
let mySolutionLevel33=solutionLevel3.main(initial3b,target33)
let mySolutionLevel41=solutionLevel4.main(initial4,target41)
let mySolutionLevel42=solutionLevel4.main(initial4,target42)
let mySolutionLevel43=solutionLevel4.main(initial4,target43)
let mySolutionLevel44=solutionLevel4.main(initial4,target44)

console.log('Solution for Level 0.1 : ')
mySolutionLevel01.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 0.2 : ')
mySolutionLevel02.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 0.3 : ')
mySolutionLevel03.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 0.4 : ')
mySolutionLevel04.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 1.1 : ')
mySolutionLevel11.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 1.2 : ')
mySolutionLevel12.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 1.3 : ')
mySolutionLevel13.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 1.4 : ')
mySolutionLevel14.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 2.1 : ')
mySolutionLevel21.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 2.2 : ')
mySolutionLevel22.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 2.3 : ')
mySolutionLevel23.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 2.4 : ')
mySolutionLevel24.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 2.5 : ')
mySolutionLevel25.getStep().forEach(element=>{
  console.log(element)  
})  

console.log()
console.log('Solution for Level 3.1 : ')
mySolutionLevel31.getStep().forEach(element=>{
  console.log(element)  
})  

console.log()
console.log('Solution for Level 3.2 : ')
mySolutionLevel32.getStep().forEach(element=>{
  console.log(element)  
})  

console.log()
console.log('Solution for Level 3.3 : ')
mySolutionLevel33.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 4.1 : ')
mySolutionLevel41.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 4.2 : ')
mySolutionLevel42.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 4.3 : ')
mySolutionLevel43.getStep().forEach(element=>{
  console.log(element)  
})

console.log()
console.log('Solution for Level 4.4 : ')
mySolutionLevel44.getStep().forEach(element=>{
  console.log(element)  
})