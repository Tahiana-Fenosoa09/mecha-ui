import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/home";
import ModulePage from "./pages/modulePage";
import Topic from "./components/topic";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/branches/:id" element={<ModulePage />} />
        <Route path="/submodule" element={<Topic />} />
      </Routes>
    </>
  )
}

export default App
