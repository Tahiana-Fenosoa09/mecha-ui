import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/home";
import ModulePage from "./pages/modulePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/topics/:id" element={<ModulePage />} />
      </Routes>
    </>
  )
}

export default App
