import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Tabel from "./components/tabel";
import Add from "./components/add";
import Edit from "./components/edit";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Tabel />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
