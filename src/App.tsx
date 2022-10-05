import React from "react";
import {Route, Routes} from "react-router-dom";
import "./global.scss";
//Components
import { HomePage } from 'pages/HomePage';
import {DetailsPage } from 'pages/DetailsPage';
import {LoginPage} from "pages/Auth/LoginPage";
import { Register } from 'pages/Auth/Register';
import { Header } from 'components/Header/Header';
function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/details' element={<DetailsPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
