export interface IUser {
  id: number | string;
  username: string;
  fullname: string;
  email: string;
  phone?: string;
  address?: string;
  password: string;
  avatar?: string;
  birth_date?: string;
  status?: string;
  role: string;
}
