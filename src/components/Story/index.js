import { useEffect, useState } from 'react'
import './style.css'

export function Story() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`localhost:3001/users`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setUsers(result)
            })

            .catch((err) => {
                throw new Error(err)
            })

    }, [])

    return (

        <div className="container">
            {users.map((user, key) => (
                <div className="user-elements" key={key}>

                    <div>
                        <img className="image-user-story" src="https://avatars.githubusercontent.com/u/98705705?s=400&u=70669d25bc2d9149f2a7527530ae960767b8fe5f&v=4" />
                    </div>

                    <span>{users.username}</span>

                </div>
            ))}

        </div>
    )
}



