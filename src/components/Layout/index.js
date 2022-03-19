import './style.css'

import { Story } from '../Story'
import { Post } from '../Post'
import { Suggestion } from '../Suggestion'
import { useEffect, useState } from 'react'
import { SignUp } from '../SignUp'

export function Layout() {

    const bucetas = [{name: 'xerequina'}];

    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/posts/2a3917d5-2ce5-4aa0-9560-2105aa5615c0/0/100`)
            .then((response) => {

                //console.log(response.json());

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

               <SignUp />

                <div className="suggestion-box" style={{gridArea: "secondColumn"}}>
                    <Suggestion />
                </div>
            </div>
        </>
    )
}