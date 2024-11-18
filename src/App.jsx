import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Screen from "./Layout/Screen/Screen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Screen />
      </BrowserRouter>
    </>
  );
}

export default App;
