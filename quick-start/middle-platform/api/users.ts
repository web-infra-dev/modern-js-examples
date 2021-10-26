import axios from 'axios';

export default async () => {
  const res = await axios.get<
    { key: string; name: string; age: number; country: string }[]
  >('https://lf3-static.bytednsdoc.com/obj/eden-cn/beeh7uvzhq/users.json');
  return res.data;
};
