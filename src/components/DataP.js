import React, {useState, createContext} from  'react';

export const Data = createContext();

export const DataP = (props) => {
    const [tasks, setTasks] = useState([])
    return(
        <Data.Provider value={[tasks, setTasks]}>
            {props.children}
        </Data.Provider>
    )
    }
