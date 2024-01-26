import "./App.css";
import TodoWrapper from "./components/TodoWrapper";
import Navigation from "./components/Navigation";
import SidePanel from "./components/SidePanel";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <TodoWrapper></TodoWrapper>
    </div>
  );
}

export default App;
