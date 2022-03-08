import { useEffect, useState } from 'react'
import './style.css'

export function Suggestion() {
    //Consumingo API dos meu seguidores do Github
    const [suggestions, setSuggestions] = useState([])
    //Ele esta mostrando todos, então tenho que criar um limite
    const [limitUsers, setLimitUsers] = useState(5)
    //O slice cria uma  posição do inicio e fim (Array.prototype.slice)
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
                <img src={`https://github.com/robertoteixeira-dev.png`} />

                <div className="user-infos-suggestion">

                    <div className="infos">
                        <span>roberto.dev</span>
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
                <p> &copy; 2022 INSTAGRAM FROM META </p>
            </footer>
        </div>
    )
}





