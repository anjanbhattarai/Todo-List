import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const List = (props) => {

    const {todoList, setTodoList} = props;

    const handleCompleted =(todo)=> {
        todo.markedDelete = !todo.markedDelete;
        let updateTodos = [...todoList];
        setTodoList(updateTodos);
    }

    const styled= (markedDelete) =>{
        if(markedDelete === true){
            return "completed"
        }
        else{
            return 'notCompleted'
        }
    }

    const deleteButton = (id) =>{
        setTodoList(
            todoList.filter((todo,index)=>{
                return todo.id !== id;
            })
        )
    }

    return (
    <div>
        {
            todoList.map((process, index) => (
                <div className={styled(process.markedDelete)} key={index}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label={process.text} onChange={(e)=> handleCompleted(process)} />
                    <button onClick={(e)=> deleteButton(process.id)}>Delete</button>
                </div>
            ))
        }
    </div>
    )
}

export default List;