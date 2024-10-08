import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'
import Header from '../../components/Header';
import PageMenu from '../../components/PageMenu';


import book from '../../assets/icons/book-open.svg'
import upload from '../../assets/icons/upload.svg'
import grid from '../../assets/icons/grid.svg'
import { DataContext } from '../../app/dataContext';

import { LandingPageCopy } from '../../assets/copy'

const Home = ()=>{
	const {HasUserID, UserLang, UserLocation} = useContext(DataContext)
	const navigate = useNavigate()

	const NavigationMenuItems = [
		{label: LandingPageCopy.JournalingMenuHeading[UserLang], 	logo:book, color: "#00B74F", path: "/reflection"},
		//{label: LandingPageCopy.LiveModeMenuHeading[UserLang], 		logo:radio, color: "#5289C7", path: "/live"},
		{label: LandingPageCopy.PhotoUploadMenuHeading[UserLang], 	logo:upload, color: "#882E72", path: "/upload"},
		{label: LandingPageCopy.InterpretiveCartographyHeading[UserLang], logo:grid, color: "#777", path: "https://flujos.pedaludico.net/", external:true}
	]

	let location = LandingPageCopy.Location[UserLocation]

	return (
		<div className="landing">
				<Header MainPage={true} HasInfo={true} HasLangauge={true} Location={location[UserLang]}/>
				<PageMenu MenuItems={NavigationMenuItems} GoNav={HasUserID?(path)=>navigate(path+window.location.search, {state: {from: window.location.pathname}}): ()=>{window.alert('Cannot perform action without username')}}></PageMenu>
		</div>
	)	
}

export default Home