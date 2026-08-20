let response: any = "43";

let numericLength:number = (response as string).length

type Book = {
    name: string
}

let bookString = '{"name":"who moved my cheese"}';

let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);


const inputElement = document.getElementById("username") as HTMLInputElement;


let value:any   // when 'any' then --- mujhe faraq nhi padta ki duniya kya kahti hai
value = "chai"
value = [1,2,3];
value = 2.5
value.toUpperCase();


let newValue:unknown
value = "chai"
value = [1,2,3];
value = 2.5
// newValue.toUpperCase();   //not working , comment out to see the error 

if(typeof newValue ==="string"){
    newValue.toUpperCase();
}

//try catch block

try {
    
// } catch (error:any) {
//     console.log(error.message)
} catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }

    console.log("Error", error)
}

