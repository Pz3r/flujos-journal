import react from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../components/_form";

import NavigationButtons from "../../components/NavigationButtons";


import './style.css'

let blankForm = { 
    prompt: "Upload photos of your ride:", 
    formType: "imageUpload", 
    options: [],
    optional: true
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
            <div className="imageUpload">
                <div className="body">
                    <Form Form={blankForm}></Form>
                </div>
                <div className="action">
                    <NavigationButtons OnBack={GoBack} ShowSubmit={true} OnSubmit={_submitAnswers}/>
                </div>
            </div>
        </div>
    )
}

export default ImageUpload