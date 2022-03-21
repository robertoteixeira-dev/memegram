import './style.css'
import phone from '../../images/phone.svg';
import { useNavigate } from 'react-router-dom';

export function Upload() {

    const state = { 
        post: {},
        image: null
    };

    const navigate = useNavigate();

    const send = (event) => {

        event.preventDefault();

        const form = new FormData();
        form.append('post', JSON.stringify(state.post));
        form.append('image', state.image);

        const requestOptions = {
            method: "POST",
            headers: { 'Access-Control-Allow-Origin' : '*', 'access_token': localStorage.getItem('access_token') },
            body : form
        };
        
        fetch("http://localhost:3001/upload", requestOptions)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            navigate("/posts", { replace: true });
        })
        .catch(error =>{
           console.log(error); 
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
                            
                            <div className="loginPage__signin">

                                <div>
                                <input className="logipage__text" type="text" placeholder="Description" onChange={(event)=>{state.post.description=event.currentTarget.value;}} />
                                <input className="" type="file" id="image" placeholder="Image" onChange={(event)=>{state.image=event.currentTarget.files[0];}} />
                                    <button type="submit" className="login__button" onClick={send}>Upload</button>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

