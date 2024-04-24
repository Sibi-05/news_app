import "./App.css";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import RootLayout from "./Layouts/RootLayout";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/sports" element={<Sports />}></Route>
          <Route path="/entertainment" element={<Entertainment />}></Route>
          <Route path="/health" element={<Health />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
