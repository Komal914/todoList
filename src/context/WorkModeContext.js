import { createContext, useState } from "react";

export const WorkModeContext = createContext({
  workMode: false,
  setWorkMode: () => null,
  onBreak: false,
  setOnBreak: () => null,
  musicOn: false,
  setMusicOn: () => null,
});

export const WorkModeContextProvider = ({ children }) => {
  const [workMode, setWorkMode] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  const value = {
    workMode,
    setWorkMode,
    onBreak,
    setOnBreak,
    musicOn,
    setMusicOn,
  };

  return (
    <WorkModeContext.Provider value={value}>
      {children}
    </WorkModeContext.Provider>
  );
};
