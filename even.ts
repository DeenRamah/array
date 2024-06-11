function checkEvenOdd(): number | null {
    let input: string | null = prompt("Enter a number:");
    if(input === null) return null;

    let number: number = parseInt(input, 10);

    if( isNaN(number)){
        alert("Invalid number");
        return null;
    }

    //check if the number is even or odd using bit manipulation
    function isEven(num: number): boolean{
        return (num & 1) === 0;
    }

    if(isEven(number)){
        alert(`${number} is even`);
     }else {
        alert(`${number}`);
     }

     return number;
}

let number: number | null = checkEvenOdd();

if(number !== null){
    function randomizedQuickSort(arr: number[]): number[]{
        if(arr.length <= 1){
            return arr;
        }

        const pivotIndex: number = Math.floor(Math.random()* arr.length);
        const pivot: number = arr[pivotIndex];
        const less: number = arr.filter((val, idx) =>val <=  pivot && idx !== pivotIndex);
        const greater: number[] = arr.filter(val => val > pivot);

        return[ ...randomizedQuickSort(less), pivot, ...randomizedQuickSort(greater)];
    }

    console.log("Randomized QuickSort Examples:", randomizedQuickSort([number, 3,6,8,10,12,1,2,3,4,5]));

    //Dynamic Array (Array Doubling) with Amortized Analysis
    class DynamicArray{
        private array: number[];
        private size: number;


        constructor(){
            this.array = [];
            this.size =0;
        }

        add(element: number): void {
            if(this.size === this.array.length){
                this._resize();
            }

            this.array[this.size] = element;
            this.size ++;
        }

        private _resize(): void{
            const newArray: number[] = new Array(this.size * 2 || 1);
            for(let i =0; i< this.size; i++){
                newArray[i] = this.array[i];
            }

            this.array = newArray;
        }

        getArray(): number[]{
            return this.array;
        }
    }

    const dynArray = new DynamicArray();
    dynArray.add(number);

    console.log("Dynamic Array State after adding number:", dynArray.getArray());

    //Approximate Vertex cover for a Graph

    function approximateVertexCover(edges: [number, number] []): number[]{
        const cover: Set<number> = new Set();
        const usedEdges: Set<string> =  new Set();


        edges.forEach(([u, v]) =>{
            if(!usedEdges.has(`${u}-${v}`) && !usedEdges.has(`${v}-${u}`)){
                cover.add(u);
                cover.add(v);
                usedEdges.add(`${u}-${v}`);
                usedEdges.add(`${v}-${u}`);
            }
        });

        return Array.from(cover);
    }

    const edges: [number, number][] = [[0,1], [0,2], [1,2], [1,3], [number, 0]];
    console.log("Approximate Vertex Cover Examples:", approximateVertexCover(edges));

    function monteCarloPi(numSamples: number): number{
        let insideCircle: number =0;

        for(let i=0; i< numSamples; i++) {
            const x: number = Math.random();
            const y: number = Math.random();

            if(x * x + y * y <= 1){
                insideCircle ++;
            }
        }
        return (insideCircle / numSamples) * 4;
    }
    console.log("Monte Carlo Pi Estimation:", monteCarloPi(100000));
}
