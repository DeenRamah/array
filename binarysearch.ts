//Binary Search is an efficient algorithm for
//finding an item from a sorted list of items. It works by repeatedly
//dividing the search interval in half.

function binarySearch(arr: number[], target: number): number{
    let left: number = 0;
    let right: number = arr.length -1;

    while (left <= right){
        const mid: number = Math.floor((left + right) /2);

        if(arr[mid] === target){
            return mid;
        }else if (arr[mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const sortedArray = [3,9,10,27,38,43,82];
const target = 43;
console.log(`Index of ${target}`, binarySearch(sortedArray, target));
