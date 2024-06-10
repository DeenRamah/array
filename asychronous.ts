//function to simulate an asynchronous operation using promises

function fetchData(): Promise<string>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Data fetched successfully");
        }, 2000);
    });
}

//using async/await to handle the asynchronous operation
async function getData() {
    try{
        const data: string = await fetchData();
        console.log(data);
    } catch (error){
        console.error("Error in fetching:", error);
    }
}

//call the async function
getData();
