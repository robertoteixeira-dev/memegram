import './style.css'

import { Post } from '../Post'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export function Posts() {

    const [posts, setPosts] = useState([])

    const navigate = useNavigate();

    useEffect(() => {

        console.log(localStorage);

        //setPosts({});

        const requestOptions = {
            method: "GET",
            headers: { 'Access-Control-Allow-Origin' : '*', 'access_token': localStorage.getItem('access_token')}
        };

        fetch(`http://localhost:3001/posts/0/100`, requestOptions)
            .then((response) => {

                // Redirects to login if not authorized...
                if(response.status == 401){
                    navigate("/login", {replace: true});
                    return {};
                }

                return response.json()
            })
            .then((result) => {
                setPosts(result);
            })
            .catch((err) => {
                throw new Error(err)
            })

    }, []);

    return (
        <>
            <div className="MainGrid">

                    <div className="box" style={{ margin: "25px 0" }}>

                        {posts !== undefined && posts.map((post, key) => (
                                    <Post key={post.id} post={{ post }}></Post>
                                ))}
                        
                    </div>
                
            </div>
        </>
    )
}