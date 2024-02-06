import { WorkModeContextProvider } from "./context/WorkModeContext";
import ToDoContainer from "./components/TodoContainer/TodoContainer";
import Navigation from "./components/navigation/Navigation";
import LofiVideoPlayer from "./components/lofiVideoPlayer/LofiVideoPlayer";
import "./App.css";
import { MobileModeContextProvider } from "./context/MobileModeContext";

function App() {
  return (
    <MobileModeContextProvider>
      <WorkModeContextProvider>
        <div className="App">
          <Navigation></Navigation>
          <ToDoContainer></ToDoContainer>
          <LofiVideoPlayer></LofiVideoPlayer>
        </div>
      </WorkModeContextProvider>
    </MobileModeContextProvider>
  );
}

export default App;
