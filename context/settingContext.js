import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <Context.Provider
      value={{
        navMobile,
        setNavMobile,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
