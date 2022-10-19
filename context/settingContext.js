import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [navMobile, setNavMobile] = useState(false);

  const getYoutubeEmbemedId = (link) => {
    if (link.indexOf("youtu.be/") >= 0) {
      //https://youtu.be/80C4Flkl_sc

      return link.split("be/")[1];
    }

    return link.split("v=")[1];
  };

  return (
    <Context.Provider
      value={{
        navMobile,
        setNavMobile,
        getYoutubeEmbemedId,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
