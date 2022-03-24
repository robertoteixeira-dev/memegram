import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { React } from 'react';
import { useEffect, useState } from 'react'

export function Post(props) {

    const [posts, setPosts] = useState([])

    const post = props.post.post;
    
    return (

        <div className="container">
            
            <div>
                    <header className="header-post">

                        <div className="infos-post">
                            <img className="img-header-post" src={`http://localhost:3001/profiles/${post.user_id}.${post.profile_ext}`} />

                            <p>{post.username}</p>
                        </div>

                        <FiMoreHorizontal />

                    </header>

                    <div className="img-post">
                        <img src={`http://localhost:3001/images/${post.id}.${post.ext}`} />
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
                                <strong>{post.username}</strong> <span>{post.body}</span>
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

        </div>
    );
}