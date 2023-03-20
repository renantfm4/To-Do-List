import React, {useState, useContext} from "react";
import { Data } from "./DataP";

export default function Create(){
    const [tasks, setTasks] = useContext(Data);
    const [names, setNames] = useState('');

    const box = r =>{
        setTasks([...tasks, {name: names, complete: false}])
        setNames('');
        r.preventDefault();
    }
    return(
        <form onSubmit={box}>
            <input required placeholder="Digite algo!" value={names}
            onChange={r=> setNames(r.target.value)}/>
            <button>Criar</button>
        </form>
    )
}
