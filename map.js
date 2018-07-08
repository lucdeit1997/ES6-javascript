//push javascript
var numbers = [5, 10, 15, 20];
var changeNumber = [];
for(var i =0; i < numbers.length; i++)
{
    changeNumber.push( numbers[i]*2 )
}
console.log('A[]',numbers);
console.log('js[]',changeNumber);

//map ES6
changeNumber = numbers.map(Element => Element * 2)
console.log('ES6',changeNumber)

//product map price
const products =[
    {nameProduct: 'hello', price: 52},
    {nameProduct: 'hello1', price: 10},
    {nameProduct: 'hello2', price: 62},
    {nameProduct: 'hello3', price: 23},
]

const priceArray = products.map(Element => Element.price);
const ArrSort = priceArray.sort();
console.log('Arr',ArrSort)
