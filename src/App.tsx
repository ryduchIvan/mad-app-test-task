import React from 'react';
import {DragonsList} from "./features/dragon/DragonList";
import "./global.scss";
//Components
import {Header} from "components/Header/Header";
import {Footer} from "components/Footer/Footer";
function App() {
  return (
    <div className="wrapper">
      <Header/>
      <DragonsList/>
      <Footer/>
    </div>
  );
}

export default App;
