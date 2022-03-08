import './style.css'

import { Story } from '../Story'
import { Post } from '../Post'

export function Layout() {
    return (
        <>
            <div className="MainGrid">

                <div className="first-column" style={{gridArea: "firstColumn"}}>
                    <div className="box">
                        <Story />
                    </div>

                    <div className="box">
                        <Post />
                    </div>
                </div>

                <div className="suggestion-box" style={{gridArea: "secondColumn"}}>
                    suggestion
                </div>
            </div>
        </>
    )
}