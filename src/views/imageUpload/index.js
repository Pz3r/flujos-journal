import {useContext, useState} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { DataContext } from "../../app/dataContext";

import Form from "../../components/Form";
import Header from "../../components/Header";

import NavigationButtons from "../../components/NavigationButtons";
import { PutImage, SubmitData } from '../../utils/clientActions';

import { Common } from '../../assets/copy';

import './style.css'

const ImageUpload = (props) => {
    let navigate  = useNavigate()
    const location = useLocation();
    const {QueryInfo, UserLang, SetUploading} = useContext(DataContext)
    const [images, setImages] = useState(null)
    const FromLive = location.state.from === "/live"


    const GoBack = ()=>{
        setImages(null)
        navigate('/')
    }

    const _setImages = (images)=>{
        console.log('set_images', images)
        setImages(images)
    }

    const _submitAnswers = ()=>{
        if(images){
            SetUploading(true)
            let operations = []
            var ts = Date.now()
            let imagesName = []
            for(const [index, image] of images.entries()){
                var extension = image.name.split('.').pop()
                let imageName = QueryInfo.username+"/"+ts+"."+index+"."+extension
                imagesName.push(imageName)
                operations.push(PutImage(imageName, image))
            }  
            var journalType = "reflection"
            if (FromLive){
                journalType = "live"
            }
            let time = new Date().toISOString().replace('Z','+00:00')
            operations.push( SubmitData( {type: journalType, onlyImages: true,  images:imagesName, userId: QueryInfo.username, paveData:QueryInfo, time:time, role: QueryInfo.role}) )
            Promise.allSettled(operations).then(response=>{
                SetUploading(false)
                console.log('upload complete', response )
                setImages(null)
                navigate('/thankyou')
            })
        }
    }


    return (
            <div className="imageUpload">
                <Header Invert HasBack/>
                <Form Prompt={"Upload photos of your ride:"} OnAnswer={_setImages} Answer={images} FormType={"photo"}></Form>
                <NavigationButtons OnBack={GoBack} ShowSubmit={true} OnSubmit={_submitAnswers} SubmitString={Common.submit[UserLang]}/>
            </div>
    )
}

export default ImageUpload