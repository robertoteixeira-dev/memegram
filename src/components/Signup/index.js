import './style.css'

export function SignUp() {

    return (

        <div className='SignUp-MainGrid'>

            <div className="signUp">
                <div>
                    <div className="signUp_rightcomponent">
                        <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

                        <div className="text">
                            Sign up to see photos and videos from your friends.
                        </div>

                        <div className="signUp__signin">
                            <div>
                                <input className="logipage__text" type="text" placeholder="Username" />
                                <input className="logipage__text" type="text" placeholder="Email" />
                                <input className="logipage__text" type="password" placeholder="Password" />
                                <button className="login__button">Sign up</button>
                            </div>

                            <div className="signingUp">
                                By signing up, you agree to our Terms , Data Policy and Cookies Policy .
                            </div>
                        </div>
                    </div>

                    <div className="signUp__signinoption">

                        Have an account? <span>Sign in</span>

                    </div>

                </div>



            </div>

            <footer className="footer-signup">
                <p>About &bull; Blog &bull; Jobs &bull; Help &bull; API &bull; Privacy &bull; Terms &bull; Top Accounts &bull; Hashtags &bull; Location &bull; Language &bull; Memegram Lite &bull;</p>
                <p> &copy; 2022 Memegram from Roberto Teixeira </p>
            </footer>

        </div>
    )
}
