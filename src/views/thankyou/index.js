import React, {useContext} from 'react'
import Form from "../../components/Form";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


import { DataContext } from '../../app/dataContext';

import './style.css'

import { ThankYouPage } from "../../assets/copy";

const ThankYou = () => {
    const {UserLang} = useContext(DataContext)


    return (
            <div className="thankyou">
                <Header HasBack Invert ShowTitle={false} BackGoesTo={'/'}/>
                <Form Prompt={ThankYouPage.header}>
                    <h2>{ThankYouPage.information[UserLang]}</h2>
                </Form>
				<Footer Inverted/>
            </div>
    )
}

export default ThankYou