import './style.css'
import phone from '../../images/phone.svg';

export function LogIn() {

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
                            <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
                            <div className="loginPage__signin">

                                <div>
                                    <input className="loginPage__text" type="text" placeholder="Username or email" />
                                    <input className="loginPage__text" type="password" placeholder="Password" />
                                    <button className="login__button">Log In</button>
                                </div>

                                <div className="login_forgot">
                                    Forgot password?
                                </div>
                            </div>
                        </div>

                        <div className="loginPage__signupoption">

                            Don't have an account? <span>Sign up</span>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

