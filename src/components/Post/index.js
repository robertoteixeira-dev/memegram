import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { React } from 'react';
import { useEffect, useState } from 'react'

export function Post() {

    //const post = props.post;

    const [posts, setPosts] = useState([])

    const [limitUsers, setLimitUsers] = useState(1)
    //O slice cria uma  posição do inicio e fim (Array.prototype.slice)
    const slice = posts.slice(0, limitUsers)

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
            {slice.map((post, key) => (
                <div>
                    <header className="header-post">

                        <div className="infos-post">
                            <img className="img-header-post" src="https://avatars.githubusercontent.com/u/98705705?s=400&u=70669d25bc2d9149f2a7527530ae960767b8fe5f&v=4" />

                            <p>{posts.username}</p>
                        </div>

                        <FiMoreHorizontal />

                    </header>

                    <div className="img-post">
                        <img src={`http://localhost:3001/img/${post.id}.${post.ext}`} />
                    </div>


                    <div className="footer-post">
                        <IconContext.Provider value={{ size: "30px" }}>

                            <section className="engagement-post">

                                <div className="icons-post">
                                    <div className="icon">
                                        <IoMdHeartEmpty />
                                    </div>
                                    <div className="icon">
                                        <BsChat />
                                    </div>
                                    <div className="icon">
                                        <FiSend />
                                    </div>
                                </div>

                                <div className="icon">
                                    <BsBookmark />
                                </div>

                            </section>
                        </IconContext.Provider>

                        <section className="like">
                            <span>21 likes</span>
                        </section>

                        <div className="legend">
                            <p>
                                <strong>roberto.dev</strong> <span>{post.body}</span>
                            </p>
                        </div>

                        <div className="time-post">
                            <time>{post.timestamp}</time>
                        </div>

                        <div className="comment">
                            <div className="fake-comment">

                                <IconContext.Provider value={{ size: '25px' }}>
                                    <div className="icon">
                                        <BsEmojiSmile />
                                    </div>
                                </IconContext.Provider>

                                <input placeholder="Add a comment..." />
                            </div>

                            <button>Post</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}