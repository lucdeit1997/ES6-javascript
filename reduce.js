var numbers =[1,2,3,4,5,6,7,8,9,10];
// javascript
// var sum = 0;
// for(var i =0 ; i < numbers.length; i++)
// {
//     sum += numbers[i];
// }
// console.log(sum)
/*
const sum1 = numbers.reduce(function(sum, number) {
    return  sum + number
 }, 0);


 const nhan = numbers.reduce(function(nhan, number){
    return nhan * number;
 }, 1)  
console.log(nhan)
*/

var developers = [
    {name: 'vande', workedHours: 45},
    {name: 'khanhney', workedHours: 12},
    {name: 'Tan Canh', workedHours: 42},
    {name: 'suny tran', workedHours: 15},
]
//cách 1
const workedHoursArray1 =[];
for(var i = 0; i < developers.length; i++)
{
    workedHoursArray1.push(developers[i].workedHours);
}
console.log(workedHoursArray1)
//cách 2
const workedHoursArray2 = developers.map(Element => Element.workedHours);
console.log(workedHoursArray2)

// cách 3

const workedHoursArray3 = developers.reduce(function(workedHours, developer){
    workedHours.push(developer.workedHours)
    return workedHours;
}, []) 
console.log(workedHoursArray3)


