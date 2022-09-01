// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]
    //...


//1st answer
 /* 
function superbowlWin('W'){
    return record.year
}

const winYear = record.map(superbowlWin)
*/
/*
//2nd answer
let superbowlWin = record.map(function(blah){
   if(blah.result === 'W'){
     return blah.result;
   } else {
    return undefined;
   }
})
*/

//3rd answer
function superbowlWin(record){
    const winYear = record.find(record => record.result === 'W')
    return winYear ? winYear.year : undefined;
}
superbowlWin(record)