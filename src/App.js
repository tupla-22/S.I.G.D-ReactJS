import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="ayuda" element></Route>
          <Route path="login"></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
