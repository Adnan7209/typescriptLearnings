function addTwo (num:number):number{
    return num +2;
}

function getUpper(val:string){
    return val.toUpperCase();
}

function signUp(name:string,email:string,isPass:boolean){}

let loginUser = (name:string,email:string,isPass:boolean=false)=>{
}




let res=addTwo(5);
getUpper("hello");
signUp("adnan","add@gmail.com",false);
loginUser("adnan","@gmail.com");


function getValue(myVal:number){
    if(myVal>5)
    return true;
    
    return "status OK";

}

const getHello = (s:string):string => {
    return "";
}

const heros = ["spiderman","batman","ironman"];
// const heros = [1,2,3,"123",true];

heros.map((hero):string=>{
    return `hero is ${hero}`
});

function consoleError(errmsg:string):void{
    console.log(errmsg);
}


function handleError(errmsg:string):never{
    throw new Error(errmsg);
}







export {}