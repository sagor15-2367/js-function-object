/**
 * function functionName(parameters){
 * function body
 * return
 * }
 * 
 * var returnedValue = functionName(parameters value);
 */

function getTotal(assigment1,assigment2,assigment3){
    const total=assigment1+assigment2+assigment3;
    const average=total/3;
    return average;
}

const assigment1Marks=60;
const assigment2Marks=58;
const assigment3Marks=50;

var myAverage=getTotal(assigment1Marks,assigment2Marks,assigment3Marks);
console.log('My average: ',myAverage);