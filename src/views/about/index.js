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
				<Header PageName={AboutPage.Title[UserLang]} HasBack HasLangauge={true}/>
				<InformationLayout>
					<p>{AboutPage.p1[UserLang]}</p>
					<p>{AboutPage.p2[UserLang]}</p>
					<p dangerouslySetInnerHTML={{__html: AboutPage.p3[UserLang]}}></p>
					<h2>{AboutPage.LocationHeading[UserLang]}</h2>
					<div style={{display: 'flex', flexDirection: "row", gap: "15px"}}>
						<div style={{width:'30px'}}>
							<img alt="map pin" src={MapPin} width={30}/>
						</div>
						<div>
							<h3>{AboutPage.Location[UserLang]}</h3>
							<address>{AboutPage.Street[UserLang]}<br/>{AboutPage.City[UserLang]}</address>
						</div>
					</div>
					<p>{AboutPage.Footer[UserLang]}</p>
				</InformationLayout>
				<Footer/>
			</div>
	)	
}

export default About