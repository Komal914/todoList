import { createContext, useState, useEffect } from "react";

export const MobileModeContext = createContext({
  mobile: null,
  setMobile: () => null,
});

export const MobileModeContextProvider = ({ children }) => {
  const [mobile, setMobile] = useState(window.innerWidth <= 500);
  const value = { mobile, setMobile };

  const handleWindowSizeChange = () => {
    setMobile(window.innerWidth <= 500);
  };

  useEffect(() => {
    console.log("mobile: ", mobile);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <MobileModeContext.Provider value={value}>
      {children}
    </MobileModeContext.Provider>
  );
};
