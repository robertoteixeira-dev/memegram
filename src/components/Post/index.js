import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post() {

    return (
        <>
            <header className="header-post">

                <div className="infos-post">
                    <img className="img-header-post" src="https://avatars.githubusercontent.com/u/98705705?s=400&u=70669d25bc2d9149f2a7527530ae960767b8fe5f&v=4" />

                    <p>roberto.dev</p>
                </div>

                <FiMoreHorizontal />

            </header>

            <div className="img-post">
                <img src="https://avatars.githubusercontent.com/u/98705705?s=400&u=70669d25bc2d9149f2a7527530ae960767b8fe5f&v=4" />
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{ size: "30px" }}>

                    <section className="engagement-post">

                        <div className="icons-post">
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        <div className="icon"><BsBookmark /></div>

                    </section>
                </IconContext.Provider>

                <section className="like">
                    <span>21 likes</span>
                </section>

                <div className="legend">
                    <p>
                        <strong>roberto.dev</strong> This is so true!!! HAHAHA
                    </p>
                </div>

                <div className="time-post">
                    <time>14 HOURS AGO</time>
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
        </>
    )
}