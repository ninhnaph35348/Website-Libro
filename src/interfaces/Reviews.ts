export interface IReviews {
  id: number;
  product_code: number | string; // Đồng nhất tên với các phần khác
  rating: number;
  review: string;
  status: number;
  title: string;
  username: string;
  user_id: number;
  created_at: number | string;
  del_flg: number;
}
