function detectType(val: string | number) {
  if (typeof val === 'string') return val.toLowerCase();
  return val + 3;
}

// in property ->
interface Users {
  name: string;
  email: string;
}

interface Admins {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: Users | Admins) {
  if ('isAdmin' in account) {
    return account.isAdmin;
  }
  return false;
}

// type predicates ->
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return 'Fish Food';
  } else {
    pet;
    return 'Bird Food';
  }
}

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Cube {
  kind: 'cube';
  side: number;
}

interface Rectangle {
  kind: 'rectangle';
  length: number;
  breadth: number;
}

type Shape = Circle | Cube | Rectangle;

function findFigureArea(fig: Shape) {
  if (fig.kind == 'circle') {
    return Math.PI * fig.radius ** 2;
  }
  //   return fig.side ** 2;
}

function findShapeArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;

    case 'cube':
      return shape.side ** 2;

    case 'rectangle':
      return shape.length * shape.breadth;

    default:
      const _defaultShape: never = shape;
      return _defaultShape;
  }
}
