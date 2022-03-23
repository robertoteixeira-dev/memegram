import { useEffect, useState } from 'react'
import './style.css'

import roberto from '../../images/roberto.jpg';

export function Suggestion() {
    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers] = useState(5)
  
    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/robertoteixeira-dev/followers`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setSuggestions(result)
        })

        .catch((err) => {
            throw new Error(err)
        })

    }, [])
    return (
        <div className="container-suggestion">
            <div className="header-suggestion">
                <img src={roberto} />

                <div className="user-infos-suggestion">

                    <div className="infos">
                        <span>roberto</span>
                        <p>roberto teixeira</p>
                    </div>

                    <button className="switch">Switch</button>

                </div>
            </div>

            <div className="header-main-suggestion">
                <p>Suggestions For You</p>
                <span>See All</span>
            </div>

            <div className="user-suggestion">

                {slice.map((suggestion, key) => (
                     <div className="infos-suggestion" key={key}>
                        <img src={`https://github.com/${suggestion.login}.png`} />
    
                        <div className="info-suggestion" >
                            <span>{suggestion.login}</span>
                            <p>Followed by robertoteixeira-dev</p>
                        </div>
    
                        <button className='follow' >Follow</button>
                    </div>
                ))}
            </div>

            <footer className="footer-suggestion">
                <p>About &bull; Help &bull; Press &bull; API &bull; Jobs &bull; Privacy &bull; Terms &bull; Location &bull; Top Accounts &bull; Hashtags &bull; Language &bull; </p>
                <p> &copy; 2022 MEMEGRAM FROM ROBERTO TEIXEIRA </p>
            </footer>
        </div>
    )
}





