import React, {useState} from 'react';

export default function Complement({task, id, confirm, changeAll}) {
    const [alter, setAlter] = useState('')
    const [changeValue, setChangeValue] = useState(task.name)

    const useAlter = () =>{
        setAlter(true)
    }

    const processSave = () =>{
        setAlter('')
        if (changeValue){
            changeAll(changeValue,id)
        }
    }

    if(alter){
        return (
            <li>
                <input value={changeValue}
                onChange={r => setChangeValue(r.target.value)}/>
                <button onClick={() => processSave(id)}>Salvar</button>
            </li>
        )
        }else{
            return(
        <li>
            <label className={task.complete} id="container">
              <input type="checkbox" id={id} checked={task.complete}
              onChange={() => confirm(id)}/>
              <span class="check">{task.name}</span>
            </label>
            <button disabled={task.complete} onClick={useAlter}>Editar
            </button>
          </li>
        )
    } 
}
