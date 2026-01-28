import { useState } from "react";
import './TodoList.css'
import {v4 as uuidv4} from "uuid";

export default function TodoList() {

    //add the inputed value when add button clicked
    let [todos , setTodo] = useState([{task: "Wake Up" , id: uuidv4() , isDone:false}])
    //from input take values and update
    let [newTodo , setNewTodo] = useState("")

    let addNewTask= () => {
        setTodo((prevTodo) => {
            return [...prevTodo, {task:newTodo , id: uuidv4() ,isDone:false }];
        })
        //empty after adding new task
        setNewTodo("")
    }

    let updateTodoValue = (event) =>{
        //update dynamicaaly in state variable new todo
        setNewTodo(event.target.value);
    }

    let deleteTask = (id) => {
        //filter out the todo expect that todo->id
        let copy = (todo) => {return todos.filter((todo) => todo.id != id)};
        setTodo(copy);

    }

    let upperCaseone = (id) => {
        setTodo( (todos) => //todos-> array of object and todo->object
            todos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    }
                }
                else{
                    return todo;
                }
        })
        )   
    }

    let markedAsDone = (id) => {
        
        setTodo( (todos) => //todos-> array of object and todo->object
            todos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        isDone: true,
                    }
                }
                else{
                    return todo;
                }
        })
        )  
    }

    return(
     
    <>
    
    <div>

    {/* //updating dynamicaaly every added vlue using the onchange  
    //  save that value in the state variable new todo*/}
    <h1>Todo List</h1>
    <input 
    placeholder="Enter a Task"
    value={newTodo}
    onChange={updateTodoValue} />
    <br /><br />
    <button onClick={addNewTask}>Add task</button>
    <br /><br />

    <hr />
    <h2>Task to do</h2>
    <hr />

    <ul >
        {
            todos.map((todo) => {
                return <div>
                
                <li key={todo.id}>
                
                <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}}
                onPointerEnter={() => upperCaseone(todo.id)}>{todo.task}</span>

                    &nbsp; &nbsp; &nbsp;
                    <button onClick={() => markedAsDone(todo.id)}>
                        <i class="fa-regular fa-calendar-check"></i>
                    </button>
                    &nbsp; 
                    <button onClick={() => deleteTask(todo.id)}>
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                    
                    </li>
                </div>
            })
        }
    </ul>

<hr />
    </div>
    
    
    </>

    
    );
}