import React, {useContext} from 'react'
import Form from "../../components/Form";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


import { DataContext } from '../../app/dataContext';

import './style.css'

import { ThankYouPage } from "../../assets/copy";

const ThankYou = () => {
    const {UserLang, UserLocation} = useContext(DataContext)


    return (
            <div className="thankyou">
                <Header HasBack Invert ShowTitle={false} BackGoesTo={'/'}/>
                <Form Prompt={ThankYouPage.header}>
                    <h2>{ThankYouPage.information[UserLang]}</h2>
                    <div className="imageContainer">
                        <img alt="snapshot of artwork" src={"https://d1a1668ubdx5yp.cloudfront.net/renderings/"+UserLocation+"-recent.jpg"}/>
                    </div>
                    <div className="caption">{ThankYouPage.caption[UserLang]}</div>
                </Form>
				<Footer Inverted/>
            </div>
    )
}

export default ThankYou