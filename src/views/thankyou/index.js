import react from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../components/_form";

import NavigationButtons from "../../components/NavigationButtons";
import image from '../../assets/thankyou.png'

import './style.css'

let blankForm = { 
    prompt: "Thank you!", 
    formType: "image", 
    options: {src:image, caption: "Your submissions were added to the Interactive Cartography system."}
}

const ImageUpload = () => {
    let navigate  = useNavigate()

    const GoBack = ()=>{
        navigate('/')
    }

    const _submitAnswers = ()=>{

    }


    return (
        <div className="container">
            <div className="thankyou">
                <div className="body">
                    <Form Form={blankForm}></Form>
                </div>
            </div>
        </div>
    )
}

export default ImageUpload