import db from '../firebse'
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import './todos.css'

export default function GetTodos() {
    const [todos, setTodos] = useState([]);
    console.log(todos)

    const getAllTodos = () => {
        onSnapshot(
            collection(db, 'allTodos'), (snapshot) => {
                setTodos(snapshot.docs.map( doc => {
                    return ({...doc.data(), id: doc.id})
                }))
        })
    }
    useEffect(() => 
        getAllTodos()
    , [])
    return (
        <div className='todos-container'>
            {todos.map(todo => (
                <li className="todos-list-container" key={todo.id}>
                    <p className='todos'>{todo.user_todo}</p>
                </li>
            ))}
        </div>
    )
}