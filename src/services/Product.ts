import instance from "../config/axios"

export const getAllProducts = async () => {
    try {
        const { data } = await instance.get('products')
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const getProductById = async (code: number | string) => {
    try {
        const { data } = await instance.get(`products/${code}`)
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
        productData.append("_method", "PUT");
        const { data } = await instance.put(`products/edit/${id}`, productData, {
            headers: {
                "Content-Type": "multipart/form-data", // 🛠 Quan trọng
            },
        });

        return data;
    } catch (error) {
        throw new Error("Lỗi khi cập nhật sản phẩm");
    }
};

export const statusProduct = async (productData: FormData, code: number | string) => {
    try {
        const { data } = await instance.post(`products/update-status/${code}`, productData); // dùng POST
        return data;
    } catch (error) {
        throw new Error("Lỗi khi cập nhật trạng thái sản phẩm");
    }
};
