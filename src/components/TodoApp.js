import React, { useState } from "react";
import "./Todoapp.css";

function TodoApp(){

    const [todos, settodos] = useState(""); // to store the input value
    const[todoList, settodoList] = useState([]); // to manage whole list of todo

    const inputChangeHandler =(event) => {
        settodos(event.target.value);
    }
        


    const AddTodo = () => {
        // console.log(todos);
        if(todos !== ""){
            const todoDetails = {
                id: Math.floor(Math.random()*1000),
                value: todos,
                isCompleted: false,
            }
            settodoList([...todoList, todoDetails]);
            settodos('');
        }
       
    };

    const completedTodo =(event, id) =>{
        event.preventDefault();
        const element = todoList.findIndex(elem =>elem.id === id); //to find the index of the element
        const newTodoList = [...todoList]; //copy the array
        newTodoList[element] = {
            ...newTodoList[element],
            isCompleted: true, //changed the value of new list
        }
        settodoList(newTodoList);
        
    };

    
    const deleteTodo = (event, id) =>{
        event.preventDefault();
        settodoList(todoList.filter((t) => t.id != id));

    };

    // console.log("todoList", todoList);
    return (
        <div className="todo">
            <input type="text" name="text" value={todos} type="text" id="text" onChange={(event) => inputChangeHandler(event)}  placeholder="Add your task here..."/>
            <button className="add-btn" onClick={AddTodo}>Add</button> <br />
            {todoList !== [] ? 
            <ul>
            {todoList.map((t) =>(
                <li className={t.isCompleted ? "crossText" :"listitem"}>
                    {t.value}
                    <button className="completed" onClick={(event) =>completedTodo(event, t.id)}>COMPLETED</button>
                    <button className="delete" onClick={(event) => deleteTodo(event, t.id)}>DELETE</button>
                    </li>
                    ))}
            </ul>
            :null}
        </div>
    );
}

export default TodoApp; 