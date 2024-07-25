//Take advantage of aray methods like map(),filter(),and reduce() for cleaner and more expressive code when working with arrays

const numbers = [1,2,3,4,5];
//using map()
const doubled = numbers.map(num => num + 2);
console.log(doubled);//output:[2,4,6,8,10]

//using filter()
const evennum = numbers.filter(num => num % 2 === 0);
console.log(evennum);//output:[2,4]
//using reduce()
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); //output: 15
