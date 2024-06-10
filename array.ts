//creating an array using an array literal

const arrayliteral: number[] =[1,2,3,4,5];
console.log('Array:', arrayliteral);

//creating using constructor

const arrayConstructor: number[] = new Array(5);// with 5 empty slots
console.log(arrayConstructor);

//accessing elements
const fElmn : number = arrayliteral[0];
const tiElm : number = arrayliteral[2];

console.log(fElmn);
console.log(tiElm);

//modifying elements
arrayliteral[2] = 12;
console.log(arrayliteral);

////adding
arrayliteral.push(16);
console.log(arrayliteral);
///adding using unshift at the beginnning

arrayliteral.unshift(8);
console.log(arrayliteral);

////Removing using pop
const lastelem: number = arrayliteral.pop()!;
console.log(arrayliteral);
console.log(lastelem);
//removing element using unshift

const firstelem: number = arrayliteral.shift()!;
console.log(arrayliteral);
console.log(firstelem);

//iteration multiple
for (let i=0; i< arrayliteral.length; i++){
    console.log(`${i}`,arrayliteral[1]);
}


//using forEach method
arrayliteral.forEach((element, index) =>{
    console.log(`${index}`, element);
})

//using for ...of loop

for(const element of arrayliteral){
    console.log(element);
}

///using the map array to create new aarray by doubling

const doubLeArray: number[] = arrayliteral.map(element => element *2);
console.log("doubleArray",doubLeArray);

//using the filter method to create a new array with elements that pass a test
const filterAray:  number[] = arrayliteral.filter(element => element > 2);
console.log(filterAray);



const arraylust: number[] = [1,2,3,4,5,6,7,8,9];
//using the reduce method to accumulate a single value from an aray
 const sumArr: number = arraylust.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 console.log(sumArr);


 //using find method to find an elemnt that matches a condition

 const foundElement: number | undefined = arraylust.find(element => element> 2);
 console.log(foundElement)


 //using the includes method to check if an array contains a specific Element
 const containelement: boolean = arraylust.includes(3);
 console.log(containelement);

 //combinng and slicing arrays

 const morenum :number[] = [6,7,8];
 const combArr: number[] = arraylust.concat(morenum);
 console.log(combArr);
 

 //using the slice method to extract a portion of an array
 const sliceArr: number[] = combArr.slice(2, 5);
 console.log(sliceArr);

 //using splice method to add/remove elements
 combArr.splice(2,2,100,200);
 console.log(combArr);

 // Sorting and Reversing Arrays

 const unsortArr: number[] = [3,4,5,6,7,8,9,1,2,3,1,2,3,4,5,6,6,7,4];
 unsortArr.sort();
 console.log(unsortArr);

 //reversing array
 unsortArr.reverse();
 console.log(unsortArr);
