//Merge Sort is a stable sorting algorithm that 
//divides the array into halves, recursively sorts
 //each half, and then merges the sorted halves.

 function mergesort(arr:number[]): number[]{
    if(arr.length <= 1){
        return arr;
    }

    const mid: number = Math.floor(arr.length / 2);
    const left: number[] = mergesort(arr.slice(0, mid));
    const right: number[] = mergesort(arr.slice(mid));

    return merge(left, right);
 }

 function merge(left: number[], right: number[]): number[]{
    let result: number[] = [];
    let leftIndex: number = 0;
    let rightIndex: number = 0;

    while(leftIndex <left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
 }

 //Example usage

 const arraySort = [32,34,27,5,1,2,3,4,5,6,7,8,9];
 console.log("Merge Sorted Array:", mergesort(arraySort));
    
 
