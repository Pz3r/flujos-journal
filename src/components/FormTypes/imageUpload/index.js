import { useState } from "react"

import './style.css'

const ImageUpload = ({Options, Answer, OnUpdate})=>{
    const [image, setImage] = useState(null)

    const _handleUpdate = (event)=>{
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage( URL.createObjectURL(img) );
          }
    }

    return(
        <div className="imageUploadForm">
            <img src={image}/>
            <div className="buttonGroup">
                <button className="btn">Cancel</button>

                <label class="btn">
                    Upload
                    <input type="file" name="image" accept="image/*" onChange={_handleUpdate} />
                </label>
            
            </div>
        </div>
    )
}

export default ImageUpload