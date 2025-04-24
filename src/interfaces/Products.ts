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
  rating: number;
  description: string;
  language: string;
  language_id: number;
  category: string;
  category_id: number;
  published_year: string;
  book_count: string;
  status: string;
  genres: number[];
  slug: string;

 
}
