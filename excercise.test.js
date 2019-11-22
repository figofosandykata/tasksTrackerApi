let excercise=require('./excercise')

const array=[['Yellow','Yellow','Red'],['Yellow','Red'],['Red'],['Red'],['Yellow','Red'],['Yellow','Yellow','Red']]
const secondArray=[['Red','Red'],['Red','Yellow'],['Cyan','Yellow'],['Cyan','Cyan']]
const thirdArray=[['Brown'],['Orange'],['Orange'],['Yellow'],['Yellow'],['Yellow'],['Orange'],['Orange'],['Brown']]

test('first program : replace1to1',()=>{
    expect(excercise.replace1to1(array,'Yellow','Red')).toEqual(
        [['Red','Red','Red'],['Red','Red'],['Red'],['Red'],['Red','Red'],['Red','Red','Red']]
    )
})

test('second program : replace1to2',()=>{
    expect(excercise.replace1to2(array,'Yellow','Yellow','Red')).toEqual(
        [['Yellow','Red','Yellow','Red','Red'],['Yellow','Red','Red'],['Red'],['Red'],['Yellow','Red','Red'],['Yellow','Red','Yellow','Red','Red']]
    )
})

test('third program : reject',()=>{
    expect(excercise.reject(array,'Yellow')).toEqual(
        [['Red'],['Red'],['Red'],['Red'],['Red'],['Red']]
    )
})

test('fourth program : stack',()=>{
    expect(excercise.stack(array,'Yellow')).toEqual(
        [['Yellow','Yellow','Red','Yellow'],['Yellow','Red','Yellow'],['Red','Yellow'],['Red','Yellow'],['Yellow','Red','Yellow'],['Yellow','Yellow','Red','Yellow']]
    )
})

test('fifth program : filter contain',()=>{
    expect(excercise.filterContain(secondArray,'Red')).toEqual(
        [['Red','Red'],['Red','Yellow']]
    )
})

test('sixth program : map reverse',()=>{
    expect(excercise.mapReverse(secondArray)).toEqual(
        [['Red','Red'],['Yellow','Red'],['Yellow','Cyan'],['Cyan','Cyan']]
    )
})

test('seventh program : stack equal',()=>{
    expect(excercise.stackEqual(thirdArray)).toEqual(
        [['Brown'],['Orange','Orange'],['Yellow','Yellow','Yellow'],['Orange','Orange'],['Brown']]
    )
})