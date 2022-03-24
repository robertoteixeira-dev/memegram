import { useEffect, useState } from 'react'
import './style.css'

export function Story() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/users`)
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
                       <img className="image-user-story" src={`http://localhost:3001/profiles/${user.id}.${user.ext}`} />
                    </div>
                        
                    <span>{user.username}</span>

                </div>
            ))}

        </div>
    )
}



