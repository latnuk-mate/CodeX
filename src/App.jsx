import './App.css'
import LandingPage from "./component/LandingPage";
import { Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import axios from 'axios';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import PrivateRoute from './component/PrivateRoute';
import { useRef } from 'react';

axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials = true;

function App() {

  const pointer = useRef("");

  function showAndHide(pointer){
    if(pointer){
      pointer.style.display == "flex"
      ? 
      pointer.style.display = "none"
      :
      pointer.style.display = "flex"
    }
   
  }

  return (
    <Routes>
      <Route path='/' element={<LandingPage showAndHide={showAndHide} pointer={pointer}/>} />
      <Route path='/dashboard/:query' element={<PrivateRoute element={<Dashboard showAndHide={showAndHide} pointer={pointer} />}/>} />
      <Route path='/user/register' element={<Register />} />
      <Route path='/user/login' element={<Login />} />
    </Routes>

  )
}

export default App;
