import { useNavigate } from "react-router-dom";

import Form from "../../components/Form";
import Header from "../../components/Header";

import NavigationButtons from "../../components/NavigationButtons";


import './style.css'

const ImageUpload = () => {
    let navigate  = useNavigate()

    const GoBack = ()=>{
        navigate('/')
    }

    const _submitAnswers = ()=>{
        navigate(-1)
    }


    return (
            <div className="imageUpload">
                <Header Invert HasBack/>
                <Form Prompt={"Upload photos of your ride:"} FormType={"photo"}></Form>
                <NavigationButtons OnBack={GoBack} ShowSubmit={true} OnSubmit={_submitAnswers}/>
            </div>
    )
}

export default ImageUpload