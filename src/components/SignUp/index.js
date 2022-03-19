import './style.css'
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react'

let counter = 0; 

export function SignUp(){
    
    const onSubmit = (d) =>
    alert(JSON.stringify(d));

    return(
        <form onSubmit={onSubmit}>
            <label>
                Username:
                <input name="username" />
            </label>

            <label>
                Email:
                <input name="email" />
            </label>

            <p>Render: <span>{counter++}</span></p>
            <input type="submit" value="submit" />
        </form>
    );
}