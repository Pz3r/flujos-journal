import React from 'react'
import './styles.css'
import Header from '../../components/Header';
import InformationLayout from '../../components/InformationLayout';
import Footer from '../../components/Footer';



const About = ()=>{


	return (
			<div className="about">
				<Header PageName={"About"} HasBack/>
				<InformationLayout>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
					<div>

					</div>
				</InformationLayout>
				<Footer/>
			</div>
	)	
}

export default About