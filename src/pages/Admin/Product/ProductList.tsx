import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../../context/Product';
import { IProduct } from '../../../interfaces/Products';

const ProductList = () => {
    const { products, onDelete } = useContext(ProductContext)


    const navigate = useNavigate();


    return (
        <div className="p-6 w-full mx-producto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Quản lý Sản phẩm</h2>
            <button onClick={() => navigate('/admin/product/add')} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                Thêm mới sản phẩm
            </button>
            <table className="w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 text-center">
                        <th className="border p-2">STT</th>
                        <th className="border p-2">Mã</th>
                        <th className="border p-2">Tiêu đề</th>
                        <th className="border p-2">Tác giả</th>
                        <th className="border p-2">Ngôn ngữ</th>
                        <th className="border p-2">Nhà cung cấp</th>
                        <th className="border p-2">Thể loại</th>
                        <th className="border p-2">Ảnh</th>
                        <th className="border p-2">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product: IProduct, index: number) => (
                        <tr key={product.id ?? index} className="border">
                            <td className="border p-2 text-center">{index + 1}</td>
                            <td className="border p-2"><Link className='text-blue-400 hover:text-blue-600' to={`${product.code}`}>{product.code}</Link></td>
                            <td className="border p-2">{product.title}</td>
                            <td className="border p-2">{product.author}</td>
                            <td className="border p-2">{product.language}</td>
                            <td className="border p-2">{product.supplier_name}</td>
                            <td className="border p-2">{product.category}</td>
                            <td className="border p-2 text-center"><img className='w-20 h-20' src={`http://127.0.0.1:8000/storage/` + product.image} alt="No" /></td>
                            <td className="h-auto p-2 space-x-2 text-center min-w-32">
                                <button onClick={() => onDelete(product.id)} className="bg-red-500 text-white px-2 py-1 rounded">Xóa</button>
                                <button onClick={() => navigate(`edit/${product.code}`)} className="bg-yellow-500 text-white px-2 py-1 rounded">Sửa</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
