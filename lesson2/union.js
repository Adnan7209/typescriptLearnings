"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = "55";
var adnan = { name: "adnan", id: 213 };
adnan = { username: "ad", id: 3434 };
function getDbId(id) {
    console.log("Db id is ".concat(id));
}
getDbId(2);
getDbId("323");
function getDbId1(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    console.log("Db id is ".concat(id));
}
//array
var data1 = [1, 2, 3]; //only nos
var data2 = ["1", "2", "3"]; //only string
var data3 = ["1", "2", "434"]; //only number or string
var data4 = [232, 2, "434", 34, "hello", true, "343434", false]; //number or string or boolean mixed
var seatAllotment;
seatAllotment = "aisle";
