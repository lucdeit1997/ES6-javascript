const deverloper = [
    {name: 'vande', language: 'javascript'},
    {name: 'khanhney', language: 'C++'},
    {name: 'vandai', language: 'javascript'},
    {name: 'thihien', language: 'java'},
    {name: 'mythoa', language: 'python'},
]

// var deverloperFilter = [];
// for(var i =0; i < deverloper.length; i++)
// {
//     if(deverloper[i].language === 'javascript')
//     {
//         deverloperFilter.push(deverloper[i]); 
//     }
// }
// console.log(deverloperFilter);

// ES6 filter
var deverloperFilter = [];
deverloperFilter = deverloper.filter(Element => Element.language === "javascript")
console.log(deverloperFilter)
//ES6 filter by condition
console.log('filter ES6 by condition');
deverloperFiltercondition = deverloper.filter(Element => Element.name === "vande" && Element.language === 'javascript')
console.log(deverloperFiltercondition)