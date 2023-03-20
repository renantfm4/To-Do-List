import React, {useContext, useState} from "react";
import { Data } from "./DataP";

export default function Base(){
    const [tasks,setTasks] = useContext(Data)
    const [checkAll, setCheckAll] = useState('')

    const deletar = () =>{
        const value = tasks.filter(tasks =>{
            return tasks.complete == false
        })
        setTasks(value)
    }
    const todosValores =  value =>{
        value = [...tasks]
        value.map(tasks =>{
            return tasks.complete = !checkAll
        })
        setTasks(value)
        setCheckAll(!checkAll)
    }
    return(
        
         <div className="many">
          <label>
            <input type="checkbox" name="all" id="all" 
            onClick={todosValores} />
            <span className="marcar">Marcar Todas</span>
          </label>
          <button id="delete" onClick={deletar}>Deletar</button>
        </div> 
        
    )
}
    
