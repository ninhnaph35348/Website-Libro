import { IAuthor } from './../interfaces/Authors';
import instance from "../config/axios"

export const getAllAuthors = async () =>{
    try {
        const {data} = await instance.get('authors')
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const getAuthorById = async (id:number | string) =>{
    try {
        const {data} = await instance.get(`authors/${id}`)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const createAuthor = async (authorData: IAuthor) =>{
    try {
        const {data} = await instance.post('authors', authorData)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const updateAuthor = async (authorData: IAuthor, id: number | string ) =>{
    try {
        const {data} = await instance.put(`authors/${id}`, authorData)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const deleteAuthor = async (id: number | string) =>{
    try {
        const {data} = await instance.delete(`authors/${id}`)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}