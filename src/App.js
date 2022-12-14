import logo from "./logo.svg";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import "./Styles/app.scss";

function App() {
  return;
  <BrowserRouter>
    <Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Header>
  </BrowserRouter>;
}

export default App;
