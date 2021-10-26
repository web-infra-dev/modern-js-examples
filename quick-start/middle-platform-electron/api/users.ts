import axios from 'axios';

export default async (): Promise<{ key:string, name: string, age: number, country: string }[]> => {
  const res = await axios.get(
    'https://lf3-static.bytednsdoc.com/obj/eden-cn/beeh7uvzhq/users.json',
  );
  return res.data;
};
