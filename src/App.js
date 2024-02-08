import { WorkModeContextProvider } from "./context/WorkModeContext";
import ToDoContainer from "./components/TodoContainer/TodoContainer";
import Navigation from "./components/Navigation/Navigation";
import LofiVideoPlayer from "./components/LofiVideoPlayer/LofiVideoPlayer";
import Footer from "./components/Footer/Footer";
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
          <Footer></Footer>
        </div>
      </WorkModeContextProvider>
    </MobileModeContextProvider>
  );
}

export default App;
