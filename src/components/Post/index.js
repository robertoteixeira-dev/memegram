import './style.css'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat } from 'react-icons/bs'



export function Post() {

    return (
        <>
            <header>

                <div className="infos-post">
                    <img src="https://avatars.githubusercontent.com/u/98705705?s=400&u=70669d25bc2d9149f2a7527530ae960767b8fe5f&v=4" />

                    <p>roberto.dev</p>
                </div>

                <FiMoreHorizontal />

            </header>

            <div className="img-post">
                <img src="https://avatars.githubusercontent.com/u/98705705?s=400&u=70669d25bc2d9149f2a7527530ae960767b8fe5f&v=4" />
            </div>

            <div className="footer-post">

                <section className="engagement-post">

                </section>
            </div>
        </>
    )
}