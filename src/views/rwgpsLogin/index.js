import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'
import Header from '../../components/Header';
import PageMenu from '../../components/PageMenu';


import book from '../../assets/icons/book-open.svg'
import radio from '../../assets/icons/radio.svg'
import upload from '../../assets/icons/upload.svg'
import grid from '../../assets/icons/grid.svg'
import { DataContext } from '../../app/dataContext';

import { LandingPageCopy } from '../../assets/copy'
import LoginForm from '../../components/LoginForm';


const RWGPSLogin = ()=>{
	const {HasUserID, UserLang} = useContext(DataContext)
	const navigate = useNavigate()


	return (
		<div className="landing">
				<Header MainPage={true} HasInfo={false} HasLangauge={true} Location={LandingPageCopy.Location.BA[UserLang]}/>
				<LoginForm/>
		</div>
	)	
}

export default RWGPSLogin