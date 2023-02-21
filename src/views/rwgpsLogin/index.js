import React, {useContext} from 'react'
import './styles.css'
import Header from '../../components/Header';
import { DataContext } from '../../app/dataContext';

import { LandingPageCopy } from '../../assets/copy'
import LoginForm from '../../components/LoginForm';


const RWGPSLogin = ()=>{
	const {UserLang} = useContext(DataContext)


	return (
		<div className="landing">
				<Header MainPage={true} HasInfo={false} HasLangauge={true} Location={LandingPageCopy.Location.BA[UserLang]}/>
				<LoginForm/>
		</div>
	)	
}

export default RWGPSLogin