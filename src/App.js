import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home2';
// import Home from './pages/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
