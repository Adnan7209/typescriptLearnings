"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const user : (string | number)[] = []
var tUser = ["ad", 123, true]; //order of the type should be maintained
//enums
var seatChoice;
(function (seatChoice) {
    seatChoice["aisle"] = "aisle";
    seatChoice[seatChoice["middle"] = 3] = "middle";
    seatChoice[seatChoice["window"] = 0] = "window";
})(seatChoice || (seatChoice = {}));
;
var seat = seatChoice.aisle;
