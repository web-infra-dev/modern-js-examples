import type { RowDataPacket } from 'mysql2';

export interface User extends RowDataPacket {
  id: number;
  name: string;
  age: number;
  country: string;
}
