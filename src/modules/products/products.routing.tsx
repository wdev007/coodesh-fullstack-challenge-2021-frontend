import React from "react";
import { Switch, Route } from "react-router-dom";

import Products from "./index";

const ProductsRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Products} />
  </Switch>
);

export default ProductsRoutes;
