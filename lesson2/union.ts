let score : number | string = 33;

score = "55";

type User  = {
    name : string,
    id:number
}
type Admin = {
    username : string,
    id: number

}

let adnan : User | Admin  = {name:"adnan",id:213};
adnan ={username:"ad",id:3434};


function getDbId (id:number | string){
    console.log(`Db id is ${id}`);
}
getDbId(2);
getDbId("323");


function getDbId1 (id:number | string){
    if(typeof id === "string"){
        id.toLowerCase();
    }


    console.log(`Db id is ${id}`);
}


//array
const data1 : number[] = [1,2,3];//only nos
const data2 : string[] = ["1","2","3"];//only string
const data3 : number[] | string[] = ["1","2","434"] //only number or string
const data4 : (number | string | boolean)[] = [232,2,"434",34,"hello",true ,"343434",false] //number or string or boolean mixed


let seatAllotment:"aisle" | "middle" | "window"
seatAllotment = "aisle";


export {}