import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'

import './style.css'
import { IconContext } from 'react-icons'

export function Header() {
    return (
        <header className="header">

            <div className="container">

                <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

                <div className="input-fake">
                    <IconContext.Provider value={{ color: '#8e8e8e' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                    <input placeholder="Search" />
                </div>

                <div className="menu-icons">
                    <IconContext.Provider value={{ size: '26px' }}>
                        <div>
                            <AiFillHome />
                        </div>

                        <div>
                            <RiMessengerLine />
                        </div>

                        <div>
                            <BsPlusSquare />
                        </div>

                        <div>
                            <MdOutlineExplore />
                        </div>

                        <div>
                            <FiHeart />
                        </div>

                    </IconContext.Provider>

                    <img className="img-user" src="https://avatars.githubusercontent.com/u/98705705?s=400&u=70669d25bc2d9149f2a7527530ae960767b8fe5f&v=4"></img>

                </div>

            </div>
        </header>
    )
}