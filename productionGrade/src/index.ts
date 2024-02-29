console.log("typescript is here" );

class User {
    email:string;
    name:string;
    city:string = "";
    constructor(email:string,name:string){
        this.email = email;
        this.name=name;
    }
}
class User2 {
    protected _courseCount = 1;
    readonly city :string = "jamshedpur";
    constructor(
        public email:string,
        public name:string
    ){}

    private deleteToken(){
        console.log("Token deleted");
    }

    get getAppleEmail():string{
        return `apple${this.email}`;
    }

    get courseCount(): number{
        return this._courseCount;
    }

    set courseCount(courseNum){
        if(courseNum <= 1)
        throw new Error("Course count should be more than 1")

        this.courseCount=courseNum;

    }
}

class subUser extends User2 {
    isFamily : boolean = true;
    changeCourseCount() {
        this._courseCount = 5;
    }
}

const adnan = new User2("adnan","@gmail.com");
// adnan.city = "jamshedpur";

