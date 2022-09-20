import {ApiService} from "../../services/api.service";
import {useEffect, useState} from "react";
import {Todo} from "./Todo";

export default function Todos() {
    let todosService = new ApiService('todos');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAllData().then(value => setTodos(value))
    }, []);
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    )
}
export {Todos};