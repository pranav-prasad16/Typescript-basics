const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: number | boolean): number | boolean {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(5);

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: 'ff', type: 32 });

function getSearchProducts<T>(products: Array<T>): T {
  // some database operations
  const index = 3;
  return products[index];
}

// for arrow functions ->
const getMoreSearchProducts = <T>(products: T[]): T => {
  // some more database operaions
  const index = 10;
  return products[index];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunc<T, U extends Database>(valone: T, valTwo: U): {} {
  return {
    valone,
    valTwo,
  };
}
