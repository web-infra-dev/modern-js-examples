import axios from 'axios';

export default async () => {
  const res = await axios.get<{ id: string; name: string; price: number }[]>(
    'https://lf3-static.bytednsdoc.com/obj/eden-cn/beeh7uvzhq/products.json',
  );
  return res.data;
};
