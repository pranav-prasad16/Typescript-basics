const user = {
  name: 'pranav',
  email: 'pranav@dev.io',
  isActive: true,
};

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: 'pranav', isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: 'NextJs', price: 99 };
}

type User = {
  readonly _id: string; //read only attribute
  name: string;
  email: string;
  isPaid: boolean;
  creditCard?: number; //optional attribute
};

function createUser(user: User): User {
  return {
    _id: '6789',
    name: '1',
    email: '3',
    isPaid: true,
    creditCard: 8892032,
  };
} // the arguement and returned value should be of type user

const newUser: User = { _id: '12345', name: '', email: '', isPaid: false };
createUser(newUser);

newUser.email = 'p@p.com';
// newUser._id = '38943';

export {};
