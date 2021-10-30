import React, { createContext, useState, useEffect } from "react";
import productsApi from "../services/products";
import { IProduct } from "../interfaces/product.interface";
import { IProductsContext } from "../interfaces/products.context.interface";
import { IFilterFindAll } from "../interfaces/product.service.interface";

export const ProductsContext = createContext<IProductsContext>(
  {} as IProductsContext
);

const ProductsProvider: React.FC = ({ children }) => {
  const [product, setProduct] = useState<IProduct | undefined>();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const callApi = async () => {
      await findProducts({ limit: 12 });
    };
    callApi();
  }, []);

  const findProducts = async ({ limit, skip }: IFilterFindAll) => {
    const response = await productsApi.findAll({
      limit,
      skip,
    });

    if (!response) return;

    setProducts(response.data);
    setTotal(response.total);
  };

  const findOne = async (code: number) => {
    const response = await productsApi.findOne(code);

    if (!response) return;

    setProduct(response);
  };

  return (
    <ProductsContext.Provider
      value={{ products, product, total, findProducts, findOne }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
