import './App.css'
import Main from './components/Pages/Main/Main'
import Navbar from "./components/Shared/Navbar/Navbar";
import Menu from "./components/Shared/Menu/Menu";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="two" element={<Main />} />
        </Routes>
      <Menu></Menu>
    </div>

  )
}

export default App
