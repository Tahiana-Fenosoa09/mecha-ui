import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/home";
import ModulePage from "./pages/modulePage";
import SubModulePage from "./pages/subModulePage";
import VideoPage from "./pages/videoPage";
import DocumentPage from "./pages/documentPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/branches/:id" element={<ModulePage />} />
        <Route path="/branches/:branchedId/module/:moduleId" element={<SubModulePage />} />
        <Route path="/videos" element={<VideoPage/>}/>
        <Route path="/documents" element={<DocumentPage/>}/>
      </Routes>
    </>
  )
}

export default App
