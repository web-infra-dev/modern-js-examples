import { useContext } from '@modern-js/plugin-egg';
// import { connection } from '../_common/db';
import { User } from '../_common/user';

// const query = (sql: string): Promise<User[]> =>
//   new Promise((resolve, reject) => {
//     connection.query<User[]>(sql, (error, results) => {
//       if (error) {
//         reject(error);
//       }
//       resolve(results);
//     });
//   });

// export default async (): Promise<User | string> => {
//   const users: User[] = await query(`select * from users`);
//   const ctx = useContext();
//   const userInfo = users.find(
//     user => Number(user.id) === Number(ctx.params.id),
//   );
//   return userInfo || 'not found';
// };
