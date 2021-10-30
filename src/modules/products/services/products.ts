import axios from "axios";
import { IProduct } from "../interfaces/product.interface";
import { SERVER_BASE_URL } from "../../../shared/utils/constants";
import {
  IFilterFindAll,
  IResponseAPI,
  IProductsApi,
} from "../interfaces/product.service.interface";

const PRODUCTS_BASE_URL = `${SERVER_BASE_URL}/products`;

const productsApi: IProductsApi = {
  findAll: async ({
    limit,
    skip,
  }: IFilterFindAll): Promise<IResponseAPI<IProduct[]> | null> => {
    try {
      const skipUrl = skip ? `&skip=${skip}` : "";
      let url = `${PRODUCTS_BASE_URL}?limit=${limit}${skipUrl}`;

      const { data } = await axios.get<IResponseAPI<IProduct[]>>(url);

      return data;
    } catch (error) {
      return null;
    }
  },

  findOne: async (code: number): Promise<IProduct | null> => {
    try {
      const { data } = await axios.get<IProduct>(
        `${PRODUCTS_BASE_URL}/${code}`
      );

      return data;
    } catch (error) {
      return null;
    }
  },
};

export default productsApi;
