"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface MainContextType {
  scroller: boolean;
  setScroller: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainContext = createContext<MainContextType | undefined>(undefined);

export const MainProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [scroller, setScroller] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setScroller(true) : setScroller(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroller, setScroller]);

  return (
    <MainContext.Provider value={{ scroller, setScroller }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = (): MainContextType => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMainContext must be used within a UseMainProvider");
  }
  return context;
};
