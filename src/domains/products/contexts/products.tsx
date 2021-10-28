import React, { createContext, useState, useEffect } from "react";
import productsApi from "../services/products";
import { IProduct } from "../interfaces/product.interface";
import { IProductsContext } from "../interfaces/products.context.interface";

export const ProductsContext = createContext<IProductsContext>(
  {} as IProductsContext
);

const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const response = await productsApi.findAll({
        limit: 12,
      });

      if (!response) return;

      setProducts(response);
    };
    callApi();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
