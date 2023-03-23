import classNames from "classnames";
import React,{ useState } from "react"
import { useLocation } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import {LandingPageCopy} from '../assets/copy'
export const DataContext = React.createContext();

const Data =  ({children}) => {
	const location = useLocation();
	var search = window.location.search.substring(1);
	var fromQS = new URLSearchParams(search)
	const [QueryInfo] = useState({role:fromQS.get('role'), username: fromQS.get('username'), name: fromQS.get('name'), qs: search})
	var lang = "en"
	var tempLang = fromQS.get('lang')
	if (tempLang){
		lang = tempLang.split('-')[0]
	}
	if (!['en', 'es', 'zh'].includes(lang)){
		lang = 'en'
	}

	var UserLocation = fromQS.get('loc')
	if(UserLocation == null){
		UserLocation = "LA"  
	}

	const [UserLang, SetUserLang] = useState(lang)
	const [Uploading, SetUploading] = useState(false)


	const HasUserID = QueryInfo.username
	let prevLogin = localStorage.getItem("rwgps")
	
	if(prevLogin != null && !HasUserID && prevLogin !== undefined){
		let userData = JSON.parse(prevLogin)
		window.location.href = '/?username='+ encodeURIComponent(userData.id) + "&name=" + encodeURIComponent(userData.name) + "&loc=BA"
		UserLocation = "BA"
	}


	const defaultContext = {QueryInfo, HasUserID, UserLang, UserLocation, SetUserLang, SetUploading}
	return (
		<DataContext.Provider value={defaultContext}>
			<div className={classNames("referenceWarning", {"Active": (!HasUserID && location.pathname !== "/rwgps")})}>
				<h1>{LandingPageCopy.Error.Heading[UserLang]}</h1>
				<div style={{marginTop: "20px"}}>
					<h2>{LandingPageCopy.Error.Subheading1[UserLang]}</h2>
					<h2>{LandingPageCopy.Error.Subheading2[UserLang]}<a style={{color: "#eeeeee"}} href="https://app.cibic.bike/rwgps">app.cibic.bike/rwgps</a></h2>
				</div>
			</div>
			<div className={classNames("uploadSheild", {"Active": Uploading})}> 
				<h1>Uploading</h1>
				<MoonLoader color="#ffffff" size={100}/>
			</div>
			{children}
		</DataContext.Provider>
	)
}

export default Data