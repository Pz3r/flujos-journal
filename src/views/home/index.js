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


const NavigationMenuItems = [
	{label: "Ride Journaling", 	logo:book, color: "#00B74F", path: "/reflection"},
	{label: "Live Mode", 		logo:radio, color: "#5289C7", path: "/live"},
	{label: "Photo Upload", 	logo:upload, color: "#882E72", path: "/upload"},
	{label: "Artwork Details", 	logo:grid, color: "#777777", path: "/about"},
]


const Home = ()=>{
	const {HasUserID} = useContext(DataContext)
	const navigate = useNavigate()


	return (
		<div className="landing">
				<Header MainPage={true} HasInfo={false} HasLangauge={false}/>
				<PageMenu MenuItems={NavigationMenuItems} GoNav={HasUserID?(path)=>navigate(path): ()=>{window.alert('Cannot perform action with userId')}}></PageMenu>
		</div>
	)	
}

export default Home