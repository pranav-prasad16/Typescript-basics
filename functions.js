"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return 'hello';
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
console.log(addTwo(4));
console.log(getUpper('hello'));
function signupUser(name, email, isAdmin) { }
signupUser('Pranav', 'pp@op.gg', true);
var loginUser = function (name, email, isAdmin) {
    if (isAdmin === void 0) { isAdmin = false; }
};
loginUser('prasad', 'gg@op.pp');
function consoleError(errorMsg) {
    console.log(errorMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
