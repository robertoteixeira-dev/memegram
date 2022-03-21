import './style.css'
import phone from '../../images/phone.svg';
import { useNavigate } from 'react-router-dom';

export function Logout() {

    const navigate = useNavigate();

    const logout = (event) => {

        event.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: { 'Access-Control-Allow-Origin' : '*', 'access_token': localStorage.getItem('access_token')}
        };

        fetch("http://localhost:3001/logout", requestOptions)
        .then((response) => {

            localStorage.removeItem('access_token');
            
            return response.json()
        })
        .then(token => {
            
            navigate("/login", { replace: true });

        })
        .catch(error =>{
           console.log("merda de error ", error); 
        });

    }

    return (
        <div className='LogIn-MainGrid'>

            <div className="first-column" style={{ gridArea: "firstColumn" }}>

            </div>

            <div className="form-box" style={{ gridArea: "secondColumn" }}>

                <div className="loginPage">
                    <div>
                        <div className="loginPage_rightcomponent">
                            <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
                            <div className="loginPage__signin">

                                <div>
                                    <button type="submit" className="login__button" onClick={logout}>Log out</button>
                                </div>

                            </div>
                        </div>

                    
                    </div>
                </div>
            </div>
        </div>

    )
}

