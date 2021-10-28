import axios from "axios";
import { IProduct } from "../interfaces/product.interface";
import { SERVER_BASE_URL } from "../../../shared/utils/constants";

export interface IProductsApi {
  findAll(filters: IFilterFindAll): Promise<IProduct[] | null>;
  findOne(code: number): Promise<IProduct | null>;
}

interface IResponseAPI<T> {
  data: T;
}

interface IFilterFindAll {
  limit?: number;
  skip?: number;
  startId?: string;
}

const PRODUCTS_BASE_URL = `${SERVER_BASE_URL}/products`;

const productsApi: IProductsApi = {
  findAll: async ({ limit }: IFilterFindAll): Promise<IProduct[] | null> => {
    try {
      let url = `${PRODUCTS_BASE_URL}?limit=${limit}`;

      const { data } = await axios.get<IResponseAPI<IProduct[]>>(url);

      return data.data;
    } catch (error) {
      return null;
    }
  },

  findOne: async (code: number): Promise<IProduct | null> => {
    try {
      const { data } = await axios.get<IResponseAPI<IProduct>>(
        `${PRODUCTS_BASE_URL}/${code}`
      );

      return data.data;
    } catch (error) {
      return null;
    }
  },
};

export default productsApi;
