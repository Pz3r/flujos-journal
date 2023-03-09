import React, {useContext} from 'react'
import './styles.css'
import Header from '../../components/Header';
import InformationLayout from '../../components/InformationLayout';
import Footer from '../../components/Footer';

import { DataContext } from '../../app/dataContext';

import MapPin from '../../assets/map-pin.png'

import {AboutPage} from '../../assets/copy'

const About = ()=>{
	const {UserLang} = useContext(DataContext)

	return (
			<div className="about">
				<Header PageName={AboutPage.Heading[UserLang]} HasBack HasLangauge={true}/>
				<InformationLayout>
					<p>{AboutPage.p1[UserLang]}</p>
					<br/>
					<p>{AboutPage.p2[UserLang]}</p>
					<br/>
					<p dangerouslySetInnerHTML={{__html: AboutPage.p3[UserLang]}}></p>					
				</InformationLayout>
				<Footer/>
			</div>
	)	
}

export default About