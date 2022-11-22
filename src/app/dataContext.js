import classNames from "classnames";
import React,{ useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { MoonLoader } from "react-spinners";
export const DataContext = React.createContext();

const Data =  ({children}) => {
	const location = useLocation();
	var search = window.location.search.substring(1);
	var fromQS = new URLSearchParams(search)
	const [QueryInfo, setQueryInfo] = useState({role:fromQS.get('role'), username: fromQS.get('username'), name: fromQS.get('name'), qs: search})
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
	
	if(prevLogin != null && !HasUserID){
		let userData = JSON.parse(prevLogin)
		window.location.href = '/?username='+ encodeURIComponent(userData.id) + "&name=" + encodeURIComponent(userData.name) + "&loc=BA"
	}


	const defaultContext = {QueryInfo, HasUserID, UserLang, UserLocation, SetUserLang, SetUploading}
	return (
		<DataContext.Provider value={defaultContext}>
			<div className={classNames("referenceWarning", {"Active": (!HasUserID && location.pathname != "/rwgps")})}>
				<h1>Warning!</h1>
				<h2>No Username Found.</h2>
				<p style={{ width: "100%", inlineSize: "90%", overflowWrap: "break-word"}}>params: {search}</p>
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