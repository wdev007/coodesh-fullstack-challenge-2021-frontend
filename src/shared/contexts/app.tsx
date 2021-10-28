import React, { createContext } from "react";
import { IAppContext } from "../interfaces/app.context.interface";

const AppContext = createContext<IAppContext>({} as IAppContext);

const AppProvider: React.FC = ({ children }) => {
  return (
    <AppContext.Provider value={{ loading: false, logged: true }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
