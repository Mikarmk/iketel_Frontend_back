import './App.css'
import Main from './components/Pages/Main/Main'
import Navbar from "./components/Shared/Navbar/Navbar";
import Menu from "./components/Shared/Menu/Menu";
import { Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Login/Login';

function App() {

  return (
    <div>

        <Login></Login>
        {/* <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes> */}
          {/* <div className='main'>

      </div> */}

      <Menu>
      </Menu>
    </div>

  )
}

export default App
