import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/home";
import ModulePage from "./pages/modulePage";
import SubModulePage from "./pages/subModulePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/branches/:id" element={<ModulePage />} />
        <Route path="/branches/:branchedId/module/:moduleId" element={<SubModulePage />} />
      </Routes>
    </>
  )
}

export default App
