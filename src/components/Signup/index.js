import './style.css'
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';

const FormData = require('form-data');

export function SignUp() {

    const state = {
        user: {},
        profile: null
    }

    const navigate = useNavigate();

    const newSignUp = (event) => {

        event.preventDefault();

        const form = new FormData();
        form.append('user', JSON.stringify(state.user));
        form.append('profile', state.profile);

        const requestOptions = {
            method: "POST",
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: form
        };

        fetch("http://localhost:3001/users", requestOptions)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                //localStorage.setItem("users", JSON.stringify(user));
                navigate("/login", { replace: true });
            })
            .catch(error => {
                console.log("merda de error ", error);
            });

    }

    return (

        <div className='SignUp-MainGrid'>

            <div className="signUp">
                <div>
                    <div className="signUp_rightcomponent">
                        <img className="logo" src={logo} />

                        <div className="text">
                            Sign up to see photos and videos from your friends.
                        </div>

                        <div className="signUp__signin">
                            <div>
                                <input className="logipage__text" type="text" placeholder="Username" onChange={(event) => { state.user.username = event.currentTarget.value; }} />
                                <input className="logipage__text" type="text" placeholder="Email" onChange={(event) => { state.user.email = event.currentTarget.value; }} />
                                <input className="logipage__text" type="password" placeholder="Password" onChange={(event) => { state.user.password = event.currentTarget.value; }} />
                                <input className="" type="file" id="profile" placeholder="Profile" onChange={(event) => { state.profile = event.currentTarget.files[0]; }} />
                                <button type="submit" className="login__button" onClick={newSignUp}>Sign up</button>
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
