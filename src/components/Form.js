import react, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const Form = (props) => {

    const [text, setText] = useState("");
    const {todoList, setTodoList} = props;
    
    const submitHandler = (e) =>{
    e.preventDefault();
    setTodoList([...todoList, {
        text: text, 
        markedDelete: false,
        id: Math.floor(Math.random() * 1000)
    }])

    setText("")
}

const myStyle = {
    "display": "inline-block",
    "background": "Blue",
    "alignItem": "center",
    "margin": "4px",
    "marginTop":"10px",
}

    return (
    <div>
        <form className="form" onSubmit={submitHandler}>
            <TextField value={text} onChange={(e)=>setText(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined"  />
            <Button style={myStyle} variant="contained" color="success">Add</Button>
        </form>
    </div>
    )
}

export default Form