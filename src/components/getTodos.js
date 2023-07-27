import { getFirestore } from '../firebase.js'
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'

export default function getTodos() {
    useEffect(() => {
        onSnapshot(collection(db, 'allTodos'), (snapshot) => {
            console.log(snapshot)
            const a = snapshot
        })
    }, [])
    return (
        <div>
            {a}
        </div>
    )
}