import './style.css'

import { Story } from '../Story'
import { Post } from '../Post'
import { Suggestion } from '../Suggestion'

export function Layout() {
    return (
        <>
            <div className="MainGrid">

                <div className="first-column" style={{gridArea: "firstColumn"}}>
                    <div className="box">
                        <Story />
                    </div>

                    <div className="box" style={{margin: "25px 0"}}>
                        <Post />
                    </div>
                </div>

                <div className="suggestion-box" style={{gridArea: "secondColumn"}}>
                    <Suggestion />
                </div>
            </div>
        </>
    )
}