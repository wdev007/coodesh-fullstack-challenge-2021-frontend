import React from "react";
import { Switch } from "react-router-dom";

import ProductsRoutes from "../../modules/products/products.routing";

const Routes: React.FC = () => (
  <Switch>
    <ProductsRoutes />
  </Switch>
);

export default Routes;
