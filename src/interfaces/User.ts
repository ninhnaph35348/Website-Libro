export interface IUser {
  id: number | string;
  username: string;
  fullname: string;
  email: string;
  phone?: string;
  address: string | null;   // Địa chỉ
  province: string | null;  // Tỉnh/Thành phố
  district: string | null;  // Huyện/Quận
  ward: string | null;  // Huyện/Quận

  
  password: string;
  avatar?: string;
  birth_date?: string;
  status?: string;
  role: "s.admin" | "admin" | "client" | string;
}
