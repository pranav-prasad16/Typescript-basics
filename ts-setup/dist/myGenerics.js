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
identityThree(5);
function identityFour(val) {
    return val;
}
identityFour({ brand: 'ff', type: 32 });
function getSearchProducts(products) {
    // some database operations
    const index = 3;
    return products[index];
}
// for arrow functions ->
const getMoreSearchProducts = (products) => {
    // some more database operaions
    const index = 10;
    return products[index];
};
function anotherFunc(valone, valTwo) {
    return {
        valone,
        valTwo,
    };
}
