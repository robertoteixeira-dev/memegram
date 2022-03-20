import './style.css'

import { Story } from '../Story'
import { Post } from '../Post'
import { Suggestion } from '../Suggestion'
import { useEffect, useState } from 'react'
import { SignUp } from '../SignUp'

export function Layout() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/posts/2a3917d5-2ce5-4aa0-9560-2105aa5615c0/0/100`)
            .then((response) => {

                return response.json()
            })
            .then((result) => {
                setPosts(result)
            })

            .catch((err) => {
                throw new Error(err)
            })

    }, []);

    return (
        <>
            <div className="MainGrid">
                <div className="first-column" style={{ gridArea: "firstColumn" }}>
                    <div className="box">
                        <Story />
                    </div>

                    <div className="box" style={{ margin: "25px 0" }}>

                        {posts.map((post) => (
                            <Post post={{ post }}></Post>
                        ))}
                    </div>
                </div>

                <div className="suggestion-box" style={{ gridArea: "secondColumn" }}>
                    <Suggestion />
                </div>
            </div>
        </>
    )
}