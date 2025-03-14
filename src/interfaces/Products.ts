export interface IProduct {
    id: number;
    code: string;
    title: string;
    image: string | File; // ✅ Có thể là URL hoặc File upload
    images: (string | File)[]; // ✅ Mảng chứa URL hoặc File
    
    supplier_name: string;
    author: string;
    author_id: number; // ✅ Chỉ cần lưu ID
    publisher: string;
    publisher_id: number; // ✅ Chỉ cần lưu ID
    
    description: string;
    language: string;
    language_id: number; // ✅ Chỉ cần lưu ID
    category: string;
    category_id: number; // ✅ Chỉ cần lưu ID
    
    status: number; // ✅ Nên dùng number nếu API yêu cầu
    genres: number[]; // ✅ Gửi lên API thì là number[], nếu lấy từ API có thể cần đổi thành IGenre[]
}
