import React from "react";
import Create from "./components/Create";
import List from './components/List'
import Base from './components/Base'
import {DataP} from './components/DataP'
import Orc from './components/5.png'

export default function App() {
  return (
    <DataP>
      <div className="Orc">
        <img src={Orc}/>
        <div className="content">
          <p>Complete suas lista de tarefas! :)</p>
        </div>
      </div>
      <div className="App">
      <h1>
        LISTA DE TAREFAS</h1>
        <Create/>
        <List/>
        <Base/>
    </div>
    </DataP>
  );
}
