//Creating an Array
// Creating an array using an array literal
const arrayLiteral = [1, 2, 3, 4, 5];
console.log('Array Literal:', arrayLiteral);

// Creating an array using the Array constructor
const arrayConstructor = new Array(5); // Creates an array with 5 empty slots
console.log('Array Constructor:', arrayConstructor);

// Accessing elements
const firstElement = arrayLiteral[0]; // First element (index 0)
const thirdElement = arrayLiteral[2]; // Third element (index 2)
console.log('First Element:', firstElement);
console.log('Third Element:', thirdElement);

// Modifying elements
arrayLiteral[1] = 10; // Changing the second element to 10
console.log('Modified Array:', arrayLiteral);



//3. Adding and Removing Elements
// Adding elements using push (adds to the end)
arrayLiteral.push(6);
console.log('After Push:', arrayLiteral);

// Adding elements using unshift (adds to the beginning)
arrayLiteral.unshift(0);
console.log('After Unshift:', arrayLiteral);

// Removing elements using pop (removes from the end)
const lastElement = arrayLiteral.pop();
console.log('After Pop:', arrayLiteral);
console.log('Popped Element:', lastElement);

// Removing elements using shift (removes from the beginning)
const firstElementRemoved = arrayLiteral.shift();
console.log('After Shift:', arrayLiteral);
console.log('Shifted Element:', firstElementRemoved);




//4. Iterating Over an Array
// Using a for loop
for (let i = 0; i < arrayLiteral.length; i++) {
    console.log(`Element at index ${i}:`, arrayLiteral[i]);
}

// Using the forEach method
arrayLiteral.forEach((element, index) => {
    console.log(`Element at index ${index}:`, element);
});

// Using the for...of loop (ES6+)
for (const element of arrayLiteral) {
    console.log('Element:', element);
}



//5. Common Array Methods
// Using the map method to create a new array by doubling each element
const doubledArray = arrayLiteral.map(element => element * 2);
console.log('Doubled Array:', doubledArray);

// Using the filter method to create a new array with elements that pass a test
const filteredArray = arrayLiteral.filter(element => element > 2);
console.log('Filtered Array (elements > 2):', filteredArray);

// Using the reduce method to accumulate a single value from an array
const sum = arrayLiteral.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum of Array Elements:', sum);

// Using the find method to find the first element that matches a condition
const foundElement = arrayLiteral.find(element => element > 2);
console.log('First Element > 2:', foundElement);

// Using the includes method to check if an array contains a specific element
const containsThree = arrayLiteral.includes(3);
console.log('Array contains 3:', containsThree);



//6. Combining and Slicing Arrays
// Using the concat method to combine arrays
const moreNumbers = [6, 7, 8];
const combinedArray = arrayLiteral.concat(moreNumbers);
console.log('Combined Array:', combinedArray);

// Using the slice method to extract a portion of an array
const slicedArray = combinedArray.slice(2, 5); // From index 2 to 4 (5 is not included)
console.log('Sliced Array (index 2 to 4):', slicedArray);

// Using the splice method to add/remove elements
combinedArray.splice(2, 2, 100, 200); // Removes 2 elements at index 2 and adds 100, 200
console.log('After Splice (remove 2, add 100, 200):', combinedArray);


//7. Sorting and Reversing Arrays
// Sorting an array (default is lexicographical)
const unsortedArray = [3, 1, 4, 1, 5, 9];
unsortedArray.sort();
console.log('Sorted Array:', unsortedArray);

// Sorting an array with a compare function (numerical sort)
unsortedArray.sort((a, b) => a - b);
console.log('Numerically Sorted Array:', unsortedArray);

// Reversing an array
unsortedArray.reverse();
console.log('Reversed Array:', unsortedArray);


