import './style.css'
import './responsive.css'

import phone from '../../images/phone.png';
import logo from '../../images/logo.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import { useNavigate } from 'react-router-dom';

export function LogIn() {

    const state = {
        user: {}
    };

    const navigate = useNavigate();

    const login = (event) => {

        event.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
            body: JSON.stringify(state.user)
        };

        fetch("http://localhost:3001/login", requestOptions)
            .then((response) => {
                return response.json()
            })
            .then(token => {

                if (token) {
                    localStorage.setItem("access_token", token.access_token);
                    navigate("/posts", { replace: true });
                } else {
                    alert("Wrong Username and/or password!");
                }

            })
            .catch(error => {
                console.log("merda de error ", error);
            });

    }

    return (
        <div className='LogIn-MainGrid'>

            <div className="first-column" style={{ gridArea: "firstColumn" }}>

                <div className="phone-box">
                    <img className="phone" src={phone} />
                </div>

            </div>

            <div className="form-box" style={{ gridArea: "secondColumn" }}>

                <div className="loginPage">
                    <div>
                        <div className="loginPage_rightcomponent">
                            <img className="logo" src={logo} />
                            <div className="loginPage__signin">

                                <div>
                                    <input className="loginPage__text" type="text" placeholder="Username or email" onChange={(event) => { state.user.login = event.currentTarget.value; }} />
                                    <input className="loginPage__text" type="password" placeholder="Password" onChange={(event) => { state.user.password = event.currentTarget.value; }} />
                                    <button type="submit" className="login__button" onClick={login}>Log In</button>
                                </div>

                                <div className="login_forgot">
                                    Forgot password?
                                </div>
                            </div>
                        </div>

                        <div className="loginPage__signupoption">

                            Don't have an account? <span>Sign up</span>

                        </div>

                        <div className="loginPage__option">
                            <img className="loginPage_dwimg" src={appstore} width="136px" />
                            <img className="loginPage_dwimg" src={playstore} width="136px" />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

