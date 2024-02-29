const User = {
    name:"adnan",
    email:"xyz@gmail.com",
    isActive:true
};

function createUser({name:string,isActive:boolean}){}

createUser({name:"adnan2",isActive:true});
// createUser({name:"adnan2",isActive:true,email:"@gmail.com"});    //wrong
createUser(User);


function createCourse():{name:string,price:number}{
    return {name:"reactjs",price:399}
}


//type Aliases

type UserType = {
    name:string;
    email:string,
    isActive:boolean
};

function createUser2(user:UserType):UserType{
    return {name:"",email:"",isActive:true};
};

createUser2({name:"",email:"",isActive:true});


type UserType2 = {
    readonly _id :string
    name:string;
    email:string,
    isActive:boolean,
    creditType? :number,
};

let myUser : UserType2 = {
    _id:"12345",
    name:"ad",
    email:"@gmail",
    isActive:false,
    
};

myUser.name="adnan";
// myUser.id = "23233";  //wrong as it is readonly


type cardNumber = {
    cardNumber : number,
};

type cardDate = {
    cardDate : string,
}
type cardDetails = cardNumber & cardDate & {
    cvv:number
}

