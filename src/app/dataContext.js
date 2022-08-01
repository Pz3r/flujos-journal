import classNames from "classnames";
import React,{ useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
export const DataContext = React.createContext();

const Data =  ({children}) => {
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
	const [UserLang, SetUserLang] = useState(lang)


	const HasUserID = QueryInfo.username


	const defaultContext = {QueryInfo, HasUserID, UserLang, SetUserLang}

	return (
		<DataContext.Provider value={defaultContext}>
			<div className={classNames("referenceWarning", {"Active": !HasUserID})}>
				<h1>Warning!</h1>
				<h2>No Username Found.</h2>
				<p style={{ width: "100%", inlineSize: "90%", overflowWrap: "break-word"}}>params: {search}</p>
			</div>
			{children}
		</DataContext.Provider>
	)
}

export default Data