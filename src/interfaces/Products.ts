// export interface IProduct {
//   id: number;
//   code: string;
//   title: string;
//   image: string | File;
//   images: (string | File)[];

//   supplier_name: string;
//   author: string;
//   author_id: number;
//   publisher: string;
//   publisher_id: number;

//   description: string;
//   language: string;
//   language_id: number;
//   category: string;
//   category_id: number;

//   status: number;
//   genres: number[];
// }
export interface IProduct {
  id: number;
  code: string;
  title: string;
  image: string | File;
  images: (string | File)[];

  supplier_name: string;
  author: string;
  author_id: number;
  publisher: string;
  publisher_id: number;

  description: string;
  language: string;
  language_id: number;
  category: string;
  category_id: number;

  status: number;
  genres: number[];

  // Thêm các trường mới
  price?: number;
  total_page?: number;
  publish_year?: number;
  country?: string;
  publish_date?: string;
  format?: string;
  dimensions?: string;
  weight?: string;
}
