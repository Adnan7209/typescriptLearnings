interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string           //simple
    // startTrail : ()=> string   //confusing

    getCoupon(coupanName : string,value:number):number,
}

interface User {
    githubToken : string
}

interface Admin extends User {
    role :"admin" | "ta" | "learner"
}

const adnan: User = {
    dbId: 1324, email: "@gmail.com",
    userId: 232323,
    githubToken:"abcd",
    startTrail: () => {
        return "trail started";
    },
    getCoupon:(name:"adnan100",off:10) => {
        return 10;
    }
}
const adnan2: Admin = {
    dbId: 1324, email: "@gmail.com",
    role:"admin",
    userId: 232323,
    githubToken:"abcd",
    startTrail: () => {
        return "trail started";
    },
    getCoupon:(name:"adnan100",off:10) => {
        return 10;
    }
}

export { }