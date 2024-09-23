"use strict";
var _a;
console.log('typescript is here');
(_a = document.getElementById('generate-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const paraElement = document.getElementById('para');
    if (paraElement)
        paraElement.textContent = `This para generation code is written in type script file which is then converted to javascript `;
});
// class User {
//   email: string;
//   name: string;
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = 'Jaipur';
        this._courseCount = 1;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseCount) {
        if (courseCount <= 1)
            throw new Error('Course Count should be more than 1');
        this._courseCount = courseCount;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const user1 = new User('p@p.com', 'pranav', 1122);
