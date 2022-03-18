import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import {React} from 'react';
import { useEffect, useState } from 'react'

export function Post() {

    //const post = props.post;

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

        <div className="container">
            {posts.map((post, key) => (
               <div>

                <header className="header-post">

                <div className="infos-post">
                    <img className="img-header-post" src="" />
                
                    <p>{post.body}</p>
                </div>
                
                <FiMoreHorizontal />
                
                </header>
                
                <div className="img-post">
                <img src={`http://localhost:3001/img/${post.id}.${post.ext}`} />
                </div>


               </div>
            ))}

        </div>
    );
}