import { IProduct } from "./Products";

export interface IProductVariant{
    id: number,
    product_id: number,
    price: number,
    quantity: string,
    promotion: number,
    cover_id: number,
    cover: string,
    product: IProduct
}