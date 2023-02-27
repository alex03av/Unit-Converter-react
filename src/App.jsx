import { GiAnvil } from "react-icons/gi";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Long from "./Components/Long";
import Temp from "./Components/Temp";
import Peso from "./Components/Peso";
import Tiempo from "./Components/Tiempo";
import Header from "./components/Nav";
import Footer from "./Components/Footer";
import Area from "./Components/Area";
import "./App.css";
const Inicio = () => {
  return (
    <div className="inicio">
      <h2>
        Welcome To <GiAnvil />
      </h2>
      <h3>Unit Converter</h3>
    </div>
  );
};

const Menu = () => {
  return (
    <header className="titleApp">
      <h1>
        <NavLink to="/">Unit Converter</NavLink>
      </h1>
    </header>
  );
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {" "}
          <Menu />
          <Header />
        </div>

        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/Long" element={<Long />}></Route>
          <Route path="/Temp" element={<Temp />}></Route>
          <Route path="/Area" element={<Area />}></Route>
          <Route path="/Peso" element={<Peso />}></Route>
          <Route path="/Tiempo" element={<Tiempo />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
