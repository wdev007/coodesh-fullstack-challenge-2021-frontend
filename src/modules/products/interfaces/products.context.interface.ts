import { IProduct } from "./product.interface";
import { IFilterFindAll } from "./product.service.interface";

export interface IProductsContext {
  products: IProduct[];
  product: IProduct | undefined;
  total: number;
  findProducts(filters: IFilterFindAll): void;
  findOne(code: number): void;
}
