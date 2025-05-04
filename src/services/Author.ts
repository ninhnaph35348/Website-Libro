import { IAuthor } from './../interfaces/Authors';
import instance from "../config/axios"

export const getAllAuthors = async () =>{
    try {
        const {data} = await instance.get('authors')
        return data
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error.message || "Lỗi không xác định");
    }
  };
export const getAuthorById = async (id:number | string) =>{
    try {
        const {data} = await instance.get(`authors/${id}`)
        return data
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error.message || "Lỗi không xác định");
    }
  };
export const createAuthor = async (authorData: IAuthor) =>{
    try {
        const {data} = await instance.post('authors', authorData)
        return data
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error.message || "Lỗi không xác định");
    }
  };
export const updateAuthor = async (authorData: IAuthor, id: number | string ) =>{
    try {
        const {data} = await instance.put(`authors/edit/${id}`, authorData)
        return data
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error.message || "Lỗi không xác định");
    }
  };
export const deleteAuthor = async (id: number | string) =>{
    try {
        const {data} = await instance.put(`authors/${id}`)
        return data
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error.message || "Lỗi không xác định");
    }
  };