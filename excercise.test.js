let posibility=require('./posible')

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


const array=[['Yellow','Yellow','Red'],['Yellow','Red'],['Red'],['Red'],['Yellow','Red'],['Yellow','Yellow','Red']]
const secondArray=[['Red','Red'],['Red','Yellow'],['Cyan','Yellow'],['Cyan','Cyan']]
const thirdArray=[['Brown'],['Orange'],['Orange'],['Yellow'],['Yellow'],['Yellow'],['Orange'],['Orange'],['Brown']]
const fourthArray=[['Orange','Orange'],['Orange','Orange','Orange'],['Orange','Orange'],['Orange','Orange','Orange'],['Orange','Orange']]
const fifthArray=[['Cyan','Orange'],['Cyan','Cyan','Orange'],['Orange','Orange'],['Cyan','Cyan','Orange'],['Cyan','Orange']]
const sixthArray=[['Orange','Cyan','Orange','Orange'],['Orange','Cyan','Orange','Cyan','Orange','Orange'],['Orange','Orange','Orange','Orange'],['Orange','Cyan','Orange','Cyan','Orange','Orange'],['Orange','Cyan','Orange','Orange']]
const seventhArray=[['Orange','Orange','Orange'],['Brown','Orange','Orange'],['Orange','Brown','Orange'],['Brown','Brown','Orange'],['Orange','Orange','Brown'],['Brown','Orange','Brown'],['Orange','Brown','Brown'],['Brown','Brown','Brown']]
const eightArray=[['Brown','Orange','Orange'],['Brown','Brown','Orange'],['Brown','Orange','Brown'],['Brown','Brown','Brown'],['Brown','Orange','Orange'],['Brown','Brown','Orange'],['Brown','Orange','Brown'],['Brown','Brown','Brown']]

test('first program : replace1to1',()=>{
    expect(posibility.replace1to1(array,'Yellow','Red')).toEqual(
        [['Red','Red','Red'],['Red','Red'],['Red'],['Red'],['Red','Red'],['Red','Red','Red']]
    )
})

test('second program : replace1to2',()=>{
    expect(posibility.replace1to2(array,'Yellow','Yellow','Red')).toEqual(
        [['Yellow','Red','Yellow','Red','Red'],['Yellow','Red','Red'],['Red'],['Red'],['Yellow','Red','Red'],['Yellow','Red','Yellow','Red','Red']]
    )
})

test('third program : reject',()=>{
    expect(posibility.reject(array,'Yellow')).toEqual(
        [['Red'],['Red'],['Red'],['Red'],['Red'],['Red']]
    )
})

test('fourth program : stack',()=>{
    expect(posibility.stack(array,'Yellow')).toEqual(
        [['Yellow','Yellow','Red','Yellow'],['Yellow','Red','Yellow'],['Red','Yellow'],['Red','Yellow'],['Yellow','Red','Yellow'],['Yellow','Yellow','Red','Yellow']]
    )
})

test('fifth program : filter contain',()=>{
    expect(posibility.filterContain(secondArray,'Red')).toEqual(
        [['Red','Red'],['Red','Yellow']]
    )
})

test('sixth program : map reverse',()=>{
    expect(posibility.mapReverse(secondArray)).toEqual(
        [['Red','Red'],['Yellow','Red'],['Yellow','Cyan'],['Cyan','Cyan']]
    )
})

test('seventh program : stack equal',()=>{
    expect(posibility.stackEqual(thirdArray)).toEqual(
        [['Brown'],['Orange','Orange'],['Yellow','Yellow','Yellow'],['Orange','Orange'],['Brown']]
    )
})

test('eight program : replace2to1',()=>{
    expect(posibility.replace2to1(fourthArray,'Orange','Orange','Cyan')).toEqual(
        [['Cyan'],['Cyan','Orange'],['Cyan'],['Cyan','Orange'],['Cyan']]
    )
})

test('ninth program : replaceWildCardToColour',()=>{
    expect(posibility.replaceWildCardToColour(fifthArray,'Orange')).toEqual(
        [['Orange','Cyan','Orange','Orange'],['Orange','Cyan','Orange','Cyan','Orange','Orange'],['Orange','Orange','Orange','Orange'],['Orange','Cyan','Orange','Cyan','Orange','Orange'],['Orange','Cyan','Orange','Orange']]
    )
})

test('tenth program : replaceColourToWildCard',()=>{
    expect(posibility.replaceColourToWildCard(sixthArray,'Cyan')).toEqual(
        [['Orange','Orange','Orange'],['Orange','Orange','Orange','Orange'],['Orange','Orange','Orange','Orange'],['Orange','Orange','Orange','Orange'],['Orange','Orange','Orange']]
    )
})

test('eleventh program : plusOne',()=>{
    expect(posibility.plusOne(seventhArray,'Orange','Brown')).toEqual(
        [['Brown','Orange','Orange'],['Orange','Brown','Orange'],['Brown','Brown','Orange'],['Orange','Orange','Brown'],['Brown','Orange','Brown'],['Orange','Brown','Brown'],['Brown','Brown','Brown'],['Orange','Orange','Orange']]
    )
})

test('twelveth program : minusOne',()=>{
    expect(posibility.minusOne(seventhArray,'Orange','Brown')).toEqual(
        [['Brown','Brown','Brown'],['Orange','Orange','Orange'],['Brown','Orange','Orange'],['Orange','Brown','Orange'],['Brown','Brown','Orange'],['Orange','Orange','Brown'],['Brown','Orange','Brown'],['Orange','Brown','Brown']]
    )
})

test('thirteenth program : multipleTwo',()=>{
    expect(posibility.multipleTwo(seventhArray,'Orange','Brown')).toEqual(
        [['Orange','Orange','Orange'],['Orange','Brown','Orange'],['Orange','Orange','Brown'],['Orange','Brown','Brown'],['Orange','Orange','Orange'],['Orange','Brown','Orange'],['Orange','Orange','Brown'],['Orange','Brown','Brown']]
    )
})

test('fourteenth program : powTwo',()=>{
    expect(posibility.powTwo(eightArray,'Orange','Brown')).toEqual(
        [['Brown','Orange','Orange'],['Brown','Orange','Orange'],['Brown','Orange','Orange'],['Brown','Orange','Orange'],['Brown','Orange','Orange'],['Brown','Orange','Orange'],['Brown','Orange','Orange'],['Brown','Orange','Orange']]
    )
})

test('fifteenth program : filterEvent',()=>{
    expect(posibility.filterEven(seventhArray,'Orange','Brown')).toEqual(
        [['Orange','Orange','Orange'],['Orange','Brown','Orange'],['Orange','Orange','Brown'],['Orange','Brown','Brown']]
    )
})

test('Solution for Level 0.1',()=>{
    let result=mySolutionLevel01.getStep()
    expect(result[result.length-1]).toEqual(target01)
})

test('Solution for Level 0.2',()=>{
    let result=mySolutionLevel02.getStep()
    expect(result[result.length-1]).toEqual(target02)
})

test('Solution for Level 0.3',()=>{
    let result=mySolutionLevel03.getStep()
    expect(result[result.length-1]).toEqual(target03)
})

test('Solution for Level 0.4',()=>{
    let result=mySolutionLevel04.getStep()
    expect(result[result.length-1]).toEqual(target04)
})

test('Solution for Level 1.1',()=>{
    let result=mySolutionLevel11.getStep()
    expect(result[result.length-1]).toEqual(target11)
})

test('Solution for Level 1.2',()=>{
    let result=mySolutionLevel12.getStep()
    expect(result[result.length-1]).toEqual(target12)
})

test('Solution for Level 1.3',()=>{
    let result=mySolutionLevel13.getStep()
    expect(result[result.length-1]).toEqual(target13)
})

test('Solution for Level 1.4',()=>{
    let result=mySolutionLevel14.getStep()
    expect(result[result.length-1]).toEqual(target14)
})

test('Solution for Level 2.1',()=>{
    let result=mySolutionLevel21.getStep()
    expect(result[result.length-1]).toEqual(target21)
})

test('Solution for Level 2.2',()=>{
    let result=mySolutionLevel22.getStep()
    expect(result[result.length-1]).toEqual(target22)
})

test('Solution for Level 2.3',()=>{
    let result=mySolutionLevel23.getStep()
    expect(result[result.length-1]).toEqual(target23)
})

test('Solution for Level 2.4',()=>{
    let result=mySolutionLevel24.getStep()
    expect(result[result.length-1]).toEqual(target24)
})

test('Solution for Level 2.5',()=>{
    let result=mySolutionLevel25.getStep()
    expect(result[result.length-1]).toEqual(target25)
})

test('Solution for Level 3.1',()=>{
    let result=mySolutionLevel31.getStep()
    expect(result[result.length-1]).toEqual(target31)
})

test('Solution for Level 3.2',()=>{
    let result=mySolutionLevel32.getStep()
    expect(result[result.length-1]).toEqual(target32)
})

test('Solution for Level 3.3',()=>{
    let result=mySolutionLevel33.getStep()
    expect(result[result.length-1]).toEqual(target33)
})

test('Solution for Level 4.1',()=>{
    let result=mySolutionLevel41.getStep()
    expect(result[result.length-1]).toEqual(target41)
})

test('Solution for Level 4.2',()=>{
    let result=mySolutionLevel42.getStep()
    expect(result[result.length-1]).toEqual(target42)
})

test('Solution for Level 4.3',()=>{
    let result=mySolutionLevel43.getStep()
    expect(result[result.length-1]).toEqual(target43)
})

test('Solution for Level 4.4',()=>{
    let result=mySolutionLevel44.getStep()
    expect(result[result.length-1]).toEqual(target44)
})