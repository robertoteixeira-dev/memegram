import './style.css'

import { Story } from '../Story'
import { Suggestion } from '../Suggestion'
import { useEffect, useState } from 'react'

export function Layout() {

    return (
        <>
            <div className="MainGrid">
                <div className="first-column" style={{ gridArea: "firstColumn" }}>
                    <div className="box">
                        <Story />
                    </div>

                    <div className="box" style={{ margin: "25px 0" }}>

                        
                    </div>
                </div>

                <div className="suggestion-box" style={{ gridArea: "secondColumn" }}>
                    <Suggestion />
                </div>
            </div>
        </>
    )
}