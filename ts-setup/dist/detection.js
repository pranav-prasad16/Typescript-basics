"use strict";
function detectType(val) {
    if (typeof val === 'string')
        return val.toLowerCase();
    return val + 3;
}
function isAdminAccount(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
    return false;
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'Fish Food';
    }
    else {
        pet;
        return 'Bird Food';
    }
}
function findFigureArea(fig) {
    if (fig.kind == 'circle') {
        return Math.PI * fig.radius ** 2;
    }
    //   return fig.side ** 2;
}
function findShapeArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'cube':
            return shape.side ** 2;
        case 'rectangle':
            return shape.length * shape.breadth;
        default:
            const _defaultShape = shape;
            return _defaultShape;
    }
}
