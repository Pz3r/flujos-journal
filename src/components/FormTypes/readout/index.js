import { useState } from "react"

import './style.css'

import tempImage from '../../../assets/Placeholder.png'

const ReadOut = ({Options, Answer, OnUpdate})=>{
    const [image, setImage] = useState(tempImage)

    const _handleUpdate = (event)=>{
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage( URL.createObjectURL(img) );
          }
    }

    return(
        <div className="ReadOutForm">
            {Options.map((e)=><p>{e}</p>)}
        </div>
    )
}

export default ReadOut