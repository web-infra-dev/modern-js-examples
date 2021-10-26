import { match, String, Number } from '@modern-js/runtime/server';
import axios from 'axios';
import { User } from './_common/user';
import { connection } from './_common/db';

export default async (): Promise<
  { key: string; name: string; age: number; country: string }[]
> => {
  const res = await axios.get(
    'https://lf3-static.bytednsdoc.com/obj/eden-cn/beeh7uvzhq/users.json',
  );
  return res.data;
};

// export default async (): Promise<User[]> => {
//   const users: User[] = await query(`select * from users`);
//   return users;
// };

// const addUser = ({
//   name,
//   age,
//   country,
// }: Pick<User, 'name' | 'age' | 'country'>): Promise<number> =>
//   new Promise((resolve, reject) => {
//     connection.execute(
//       `
//       INSERT INTO users ( name, age, country) VALUES ( "${name}", "${age}", "${country}" );
//     `,
//       (error: Error, results) => {
//         if (error) {
//           reject(error);
//         }
//         resolve(results.insertId);
//       },
//     );
//   });

// export const post = match(
//   {
//     request: {
//       data: {
//         name: String,
//         age: Number,
//         country: String,
//       },
//     },
//     response: {
//       id: Number,
//     },
//   },
//   async request => {
//     const id: number = await addUser(request.data);
//     return {
//       id,
//     };
//   },
// );

// const query = (sql: string): Promise<User[]> =>
//   new Promise((resolve, reject) => {
//     connection.query<User[]>(sql, (error, results) => {
//       if (error) {
//         reject(error);
//       }
//       resolve(results);
//     });
//   });
