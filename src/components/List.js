import React, { useContext } from "react";
import Complement from "./Complement";
import {Data} from './DataP'


export default function List(){
    const [tasks, setTasks] = useContext(Data);

    const modify = id =>{
        const newTasks = [...tasks]
        newTasks.map((task, index) =>{
            if(index == id){
                task.complete = !task.complete
            }
        })
        setTasks(newTasks)
    }

    const changeAll = (edit, id) =>{
        const newTasks = [...tasks]
        newTasks.map((task,index) =>{
            if(index == id){
                task.name = edit
            }
        })
        setTasks(newTasks)
    }
    return(
        <ul>
            {
            tasks.map((task,index) => (
                <Complement task={task} key={index} id={index}
                confirm={modify}  changeAll={changeAll}/>
            ))
}
            </ul>
    )
}
