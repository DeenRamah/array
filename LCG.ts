function promptUser(question: string): number{
    let input: string | null = prompt(question);
    if(input === null) throw new Error("User cancelled the prompt");
    let number: number = parseInt (input, 10);
    if(isNaN(number))throw new Error("Invalid input. Please enter a valid number");
    return number;
}

class LCG {
    private seed: number;
    private a: number;
    private c: number;
    private m: number;


    constructor(seed: number, a: number, c :number, m: number){
        this.seed =seed;
        this.a = a;
        this.c =c;
        this.m = m;
    }

    next(): number{
        this.seed =(this.a * this.seed + this.c) % this.m;
        return this.seed;
    }

    generateSequence(length: number): number[]{
        let sequence: number[] =[];
        for(let i=0; i< length; i++){
            sequence.push(this.next());
        }

        return sequence;
    }
}

try{
    const seed = promptUser("Enter the seed(x0");
    const a = promptUser("Enter the multiplier (a):");
    const c = promptUser("Enter the increament (c):");
    const m = promptUser("Enter the modulus (m)");
    const sequenceLength = promptUser("Enter the length of the sequence generated");
    
    const lcg = new LCG(seed, c, a, m);

    //generate and display the sequence random numbers
    const randomSequence = lcg.generateSequence(sequenceLength);
    console.log("Generated Random Sequence:", randomSequence);
 
} catch (error){
    console.log(error.message);
}
