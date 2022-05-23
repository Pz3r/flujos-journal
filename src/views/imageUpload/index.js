import {useContext, useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../app/dataContext";

import Form from "../../components/Form";
import Header from "../../components/Header";

import NavigationButtons from "../../components/NavigationButtons";
import { PutImage } from '../../utils/clientActions';


import './style.css'

const ImageUpload = () => {
    let navigate  = useNavigate()
    const {QueryInfo} = useContext(DataContext)
    const [image, setImage] = useState(null)


    const GoBack = ()=>{
        setImage(null)
        navigate('/')
    }

    const _setImage = (image)=>{
        setImage(image)
    }

    const _submitAnswers = ()=>{
        if(image){
            var extension = image.name.split('.').pop()
            var ts = Date.now()
            let imageName = QueryInfo.username+"/"+ts+"."+extension   
            PutImage(imageName, image).then((response)=>{
                setImage(null)
                navigate('/thankyou')
            })
        }
    }


    return (
            <div className="imageUpload">
                <Header Invert HasBack/>
                <Form Prompt={"Upload photos of your ride:"} OnAnswer={_setImage} Answer={image} FormType={"photo"}></Form>
                <NavigationButtons OnBack={GoBack} ShowSubmit={true} OnSubmit={_submitAnswers}/>
            </div>
    )
}

export default ImageUpload