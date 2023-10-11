import axiosInstance from "..";
import { NonprofitList } from "./type";

export const searchCharityList = async (searchKey: string): Promise<NonprofitList> => {
    const response = await axiosInstance.get(`/search/${searchKey}`);
    return response.data;
}