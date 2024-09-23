const superHeros: string[] = []; //define an array of strings so it can only contain strings
const heroPowers1: number[] = []; //define an array of numbers so it can only contain numbers
const heroPowers2: Array<number> = [];

superHeros.push('spiderman');
heroPowers1.push(3);
heroPowers2.push(5);

console.log(superHeros, heroPowers1, heroPowers2);

type User = {
  name: string;
  isValid: boolean;
};

const allUsers: User[] = [];

const twoD: number[][] = [
  [23, 91, 218],
  [39, 32, 10],
]; //way to create a two dimensional array

const nUser = { name: 'prasad', isValid: false };

allUsers.push(nUser);

console.log(allUsers);

export {};
