import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TypeList from "./components/TypeList";
// import Home from './pages/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
      </Routes>
      <Routes>
        <Route path="/" element={<TypeList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
