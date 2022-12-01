import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from './pages/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
