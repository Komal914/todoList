import { createContext, useState } from "react";

export const WorkModeContext = createContext({
  workMode: false,
  setWorkMode: () => null,
});

export const WorkModeContextProvider = ({ children }) => {
  const [workMode, setWorkMode] = useState(false);
  const value = { workMode, setWorkMode };

  return (
    <WorkModeContext.Provider value={value}>
      {children}
    </WorkModeContext.Provider>
  );
};
