abstract class TakePhoto1{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    abstract getSepia():void
    getReelTime():number{
        //assume some complex calculation after that value is returned
        return 8;
    }

}

class Instagram1 extends TakePhoto1 {
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst :number       
        ){
            super(cameraMode,filter);
        }

        getSepia(): void {
            console.log("sepia")
        }

}

const ad = new Instagram1 ("test","test",3);