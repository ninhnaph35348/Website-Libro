import { IProduct } from './../interfaces/Products';
import instance from "../config/axios"

export const getAllProducts = async () =>{
    try {
        const {data} = await instance.get('products')
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const getProductById = async (code:number | string) =>{
    try {
        const {data} = await instance.get(`products/${code}`)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const createProduct = async (productData: FormData) => {
    try {
        const { data } = await instance.post("products", productData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return data;
    } catch (error) {
        throw new Error("Lỗi khi tạo sản phẩm");
    }
};


export const updateProduct = async (productData: FormData, id: number | string) => {
    try {
        productData.append("_method", "PUT"); // 🔥 Thêm _method để server hiểu đây là PUT request
        


        const { data } = await instance.post(`products/edit/${id}`, productData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return data;
    } catch (error) {
        throw new Error("Lỗi khi cập nhật sản phẩm");
    }
};


export const deleteProduct = async (id: number | string) =>{
    try {
        const {data} = await instance.put(`products/${id}`)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}