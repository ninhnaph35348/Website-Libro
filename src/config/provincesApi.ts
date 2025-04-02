import axios from "axios";

const API_BASE_URL = "https://provinces.open-api.vn/api";

export interface Province {
    code: number;
    name: string;
}

export interface District {
    code: number;
    name: string;
}

export interface Ward {
    code: number;
    name: string;
}

export const getProvinces = async (): Promise<Province[]> => {
    const response = await axios.get(`${API_BASE_URL}/p/`);
    return response.data;
};

export const getDistricts = async (provinceCode: number): Promise<District[]> => {
    const response = await axios.get(`${API_BASE_URL}/p/${provinceCode}?depth=2`);
    return response.data.districts;
};

export const getWards = async (districtCode: number): Promise<Ward[]> => {
    const response = await axios.get(`${API_BASE_URL}/d/${districtCode}?depth=2`);
    return response.data.wards;
};
