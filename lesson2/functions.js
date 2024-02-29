"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, isPass) { }
var loginUser = function (name, email, isPass) {
    if (isPass === void 0) { isPass = false; }
};
var res = addTwo(5);
getUpper("hello");
signUp("adnan", "add@gmail.com", false);
loginUser("adnan", "@gmail.com");
function getValue(myVal) {
    if (myVal > 5)
        return true;
    return "status OK";
}
var getHello = function (s) {
    return "";
};
var heros = ["spiderman", "batman", "ironman"];
// const heros = [1,2,3,"123",true];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
