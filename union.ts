let score: number | string = 4;

score = '40';

type User = {
  name: string;
  age: number;
};

type Admin = {
  userName: string;
  age: number;
};

let pranav: User | Admin = { name: 'pro', age: 21 };

pranav = { userName: 'pp', age: 12 };

function getDbId(id: number | string) {
  if (typeof id === 'string')
    id.toLowerCase(); // if the received parameter id is string
  else id + 3; // if the received parameter id is number
}

getDbId(4);
getDbId('10');

let data1: number[] = [1, 2, 3];
let data2: string[] = ['1', '2', '3'];
let data3: (number | string)[] = [1, '2', 3];

let seatAllocation: 'aisle' | 'middle' | 'window';

seatAllocation = 'middle';
// seatAllocation = 'pilot';

export {};
