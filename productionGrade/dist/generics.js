"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("adnan");
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour({ brand: "coca-cola", type: 123 });
