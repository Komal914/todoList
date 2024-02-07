import { WorkModeContextProvider } from "./context/WorkModeContext";
import ToDoContainer from "./components/TodoContainer/TodoContainer";
import Navigation from "./components/navigation/Navigation";
import LofiVideoPlayer from "./components/lofiVideoPlayer/LofiVideoPlayer";
import Footer from "./components/footer/Footer";
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
