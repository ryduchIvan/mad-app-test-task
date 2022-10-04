import React from 'react';
import {Route, Routes} from "react-router-dom";
import "./global.scss";
//Components
import { HomePage } from 'pages/HomePage';
import {DetailsPage } from 'pages/DetailsPage';
function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/details' element={<DetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
