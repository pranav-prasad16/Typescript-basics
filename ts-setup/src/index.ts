console.log('typescript is here');
document.getElementById('generate-btn')?.addEventListener('click', () => {
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
  readonly city: string = 'Jaipur';
  protected _courseCount: number = 1;
  constructor(
    public email: string,
    public name: string,
    private userId: number
  ) {}

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseCount) {
    if (courseCount <= 1) throw new Error('Course Count should be more than 1');
    this._courseCount = courseCount;
  }
}

class subUser extends User {
  isFamily: boolean = true;

  changeCourseCount() {
    this._courseCount = 4;
  }
}

const user1 = new User('p@p.com', 'pranav', 1122);
