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
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
//same above code using arrow function
const getMoreSearchProducts = (products) => {
    const myIndex = 3;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
