import LanguageDropdown from "../LanguageDropdown"
import classNames from "classnames"

import {useNavigate} from 'react-router-dom'
import './style.css'

import cibicLogo from '../../assets/icons/cibic_logo.png'
import PlacementIndicator from "../PlacementIndicator"


const Header = ({HasBack, HasCamera, PageName, MainPage, Invert, ShowProgressIndicator, ProgressIndex, ProgressTotal, HasInfo, HasLangauge, ShowTitle=true, BackGoesTo=-1})=>{
	let navigate = useNavigate()
	return(
		<div className={classNames("Header", {"Inverted": Invert})}>
			{MainPage?(
			<div className="Hero">
				<img alt="Cibic Logo" className="Logo" src={cibicLogo}/>
				<h1>Flows</h1>
				<h2>Los Angeles</h2>
			</div>
			):(
			ShowProgressIndicator?(
				<div className="HeaderTitle">
					<PlacementIndicator Total={ProgressTotal} Current={ProgressIndex}/>
				</div>
			):(
				ShowTitle?(<div className="HeaderTitle" >
					<h1>Flows</h1>
					<h2>{PageName}</h2>
				</div>):(<div style={{height: '50px'}}></div>)

				)
			)}
			<div className="QuickActions">
				<div className="RightSide">
					{HasLangauge?(<LanguageDropdown Inverted={Invert}/>):(null)}
					{HasCamera?(
						<button className="CameraButton" onClick={()=>(navigate('/upload'))}></button>
					):(null)}
					{HasInfo?(
						<button className="InfoButton" onClick={()=>(navigate('/about'))}></button>
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