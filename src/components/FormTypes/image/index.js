import { useState } from "react"

import './style.css'

const Image = ({Options})=>{

    return(
        <div className="ImageForm">
            <div className="caption">{Options.caption}</div>
            <div className="SplashImage">
                <img width="100%" src={Options.src}></img>                
            </div>
        </div>
    )
}

export default Image