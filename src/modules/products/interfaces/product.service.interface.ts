import { IProduct } from "./product.interface";

export interface IResponseAPI<T> {
  data: T;
  total: number;
}

export interface IFilterFindAll {
  limit?: number;
  skip?: number;
  startId?: string;
}

export interface IProductsApi {
  findAll(filters: IFilterFindAll): Promise<IResponseAPI<IProduct[]> | null>;
  findOne(code: number): Promise<IProduct | null>;
}
