// const user : (string | number)[] = []
const tUser : [string,number,boolean] = ["ad",123,true];  //order of the type should be maintained

//enums
enum  seatChoice {
    aisle="aisle",
    middle=3,
    window=0
};

const seat = seatChoice.aisle;

export {}