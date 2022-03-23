import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'

import './style.css'
import { IconContext } from 'react-icons'

import roberto from '../../images/roberto.jpg';
import logo from '../../images/logo.png';

export function Header() {
    return (
        <header className="header">

            <div className="container">

                <img className="logo" src={logo} />

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

                    <img className="img-user" src={roberto} />

                </div>

            </div>
        </header>
    )
}