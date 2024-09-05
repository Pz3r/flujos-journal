import LanguageDropdown from "../LanguageDropdown"
import classNames from "classnames"
import {useContext} from 'react'

import {useNavigate} from 'react-router-dom'
import './style.css'

import cibicLogo from '../../assets/icons/cibic_logo.png'
import PlacementIndicator from "../PlacementIndicator"
import { LandingPageCopy } from "../../assets/copy"

import { DataContext } from "../../app/dataContext"


const Header = ({HasBack, HasCamera, PageName, Location, MainPage, Invert, ShowProgressIndicator, ProgressIndex, ProgressTotal, HasInfo, HasLangauge, ShowTitle=true, BackGoesTo=-1})=>{
	const {UserLang} = useContext(DataContext)
	let navigate = useNavigate()
	return(
		<div className={classNames("Header", {"Inverted": Invert})}>
			{MainPage?(
			<div className="Hero">
				<img alt="Cibic Logo" className="Logo" src={cibicLogo}/>				
				<h2>{Location}</h2>
			</div>
			):(
			ShowProgressIndicator?(
				<div className="HeaderTitle">
					<PlacementIndicator Total={ProgressTotal} Current={ProgressIndex}/>
				</div>
			):(
				ShowTitle?(<div className="HeaderTitle" >
					<h1>{LandingPageCopy.Title[UserLang]}</h1>
					<h2>{PageName}</h2>
				</div>):(<div style={{height: '50px'}}></div>)

				)
			)}
			<div className="QuickActions">
				<div className="RightSide">
					{HasLangauge?(<LanguageDropdown Inverted={Invert}/>):(null)}
					{HasCamera?(
						<button className="CameraButton" onClick={()=>(navigate('/upload'+window.location.search, {state: {from: window.location.pathname}}))}></button>
					):(null)}
					{HasInfo?(
						<button className="InfoButton" onClick={()=>(navigate('/about'+window.location.search))}></button>
					):(null)}

				</div>
				{HasBack?(
					<div className="LeftSide">
						<button className="BackButton" onClick={()=>(navigate(BackGoesTo))}></button>
					</div>
				):(null)}
			</div>
		</div>
	)
}

export default Header