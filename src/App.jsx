import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./assets/component/Home/Home";

function App() {
  return (
    <div className="App w-11/12 mx-auto">
      <Home></Home>

      <Outlet></Outlet>
    </div>
  );
}

export default App;
