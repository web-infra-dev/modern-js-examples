import { name, internet } from 'faker';

export const get = async () => {
  const mockData = new Array(20).fill(0).map(() => {
    const firstName = name.firstName();
    return {
      name: firstName,
      avatar: `https://avatars.dicebear.com/api/identicon/${firstName}.svg`,
      email: internet.email(),
    };
  });

  return { code: 200, data: mockData };
};
