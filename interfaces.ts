interface User {
  name: string;
  email: string;
  userId?: number;
  startTrail(): string;
  getCoupon(couponName: string): number;
}

interface User {
  githubId?: string;
}

interface Admin extends User {
  role: 'admin' | 'moderator' | 'boss';
}

const pranav: Admin = {
  name: '',
  email: '',
  userId: 23,
  githubId: 'pranav-prasad16',
  role: 'boss',
  startTrail: () => {
    return 'trail started';
  },
  getCoupon: (couponCode: 'pp20') => {
    return 20;
  },
};
