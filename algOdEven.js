function checkeEvenoodd(){
    let input = prompt("Enter number");
    let number = parseInt(input, 10);

    if(isNaN(number)){
        alert("Invalid input");
        return null;
    }

    //check even or odd using bit manipulation

    function isEven(number){
        return (number & 1) ==0;

    }


    if (isEven(number)){
        alert(`${number} is even`);
    } else {
        alert(`${number} is odd`);
    }
    return number;
}

let number = checkeEvenoodd();
 if(number !== null){
    //Randomized Quicksort
    function randomizedQuickSort(arr){
        if(arr.length <= 1){
            return arr;
        }

        const pivotIndex = Math.floor(Math.floor ()* items.length);
        const pivot = arr[pivotIndex];
        const less = arr.filter((val, idx) => val <= pivot && idx !== pivotIndex);
        const greater = arr.filter(val => val > pivot);

        return [...randomizedQuickSort(less), pivot, ...randomizedQuickSort(greater)];
    }

    console.log("Example:", randomizedQuickSort([number, 3,6,8,10,1,2,3,1]));

    //Dynamic Array(Array Doubling) with Amortized Analysis
    class DynamicArray {
        constructor(){
            this.array =[];
            this.size =0;
        }

        add(element){
            if(this.size === this.array.length){
                this._resize();
            }
            this.array[this.size] = element;
            this.size++;
        }


        _resize(){
            const newArray = new Array(this.size * 2 || 1);
            for (let i =0; i< this.size; i++){
                newArray[i] = this.array[i];
            }
            this.array = newArray;
        }
    }
    const dynArray = new DynamicArray();
    dynArray.add(number);
    console.log("Adding:", dynArray.array);


    function approximateVertexCover(edges){
        const cover = new Set();
        const usedEdges = new Set();


        edges.forEach(([u , v])=> {
            if (!usedEdges.has(`${u}-${v}`)  && !usedEdges.has(`${v}-${u}`)){
                cover.add(u);
                cover.add(v);
                usedEdges.add(`${u}-${v}`);
                usedEdges.add(`${v}-${u}`);
            }
            
        });

        return Array.from(cover);
    }

    const edges = [[0,1], [0,2], [1,2], [1,3], [number, 0]];
    console.log("Example:", approximateVertexCover(edges));


    function monteCarloPi(numSamples){
        let insideSircle =0;

        for (let i= 0; i< numSamples; i++){
            const x = Math.random();
            const y = Math.random();

            if(x * x + y * y <= 1){ //check if point is inside the unit circle
                insideSircle ++;
            }
        }
        return (insideSircle / numSamples) * 4;//Estimate of Pi
    }

    console.log("Monte Carlo Pi Estimation:", monteCarloPi(10000));


}
