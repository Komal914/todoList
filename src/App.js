import { WorkModeContextProvider } from "./context/WorkModeContext";
import TodoWrapper from "./components/TodoWrapper";
import Navigation from "./components/navigation/Navigation";
import LofiVideoPlayer from "./components/lofiVideoPlayer/LofiVideoPlayer";
import "./App.css";

function App() {
  return (
    <WorkModeContextProvider>
      <div className="App">
        <Navigation></Navigation>
        <TodoWrapper></TodoWrapper>
        <LofiVideoPlayer></LofiVideoPlayer>
      </div>
    </WorkModeContextProvider>
  );
}

export default App;
