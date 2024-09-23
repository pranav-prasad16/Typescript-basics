function addTwo(num: number): number {
  // return 'hello';
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}
console.log(addTwo(4));
console.log(getUpper('hello'));

function signupUser(name: string, email: string, isAdmin: boolean) {}

signupUser('Pranav', 'pp@op.gg', true);

let loginUser = (name: string, email: string, isAdmin: boolean = false) => {};

loginUser('prasad', 'gg@op.pp');

function consoleError(errorMsg: string): void {
  console.log(errorMsg);
}

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
