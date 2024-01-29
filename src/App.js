import { WorkModeContextProvider } from "./context/WorkModeContext";
import TodoWrapper from "./components/TodoWrapper";
import Navigation from "./components/navigation/Navigation";
import SidePanel from "./components/SidePanel";
import "./App.css";

function App() {
  return (
    <WorkModeContextProvider>
      <div className="App">
        <Navigation></Navigation>
        <TodoWrapper></TodoWrapper>
      </div>
    </WorkModeContextProvider>
  );
}

export default App;
