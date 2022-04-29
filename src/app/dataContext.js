import classNames from "classnames";
import React,{ useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
export const DataContext = React.createContext();

const Data =  ({children}) => {
	const [QueryInfo, setQueryInfo] = useState({id: 'unknown', role: 'unknown'})
	var search = window.location.search.substring(1);
	
	useEffect(()=>{
		try{
			setQueryInfo(JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}'))
		} catch (e){
			
		}
	}, [])

	const HasUserID = QueryInfo.id !=='unknown'

	const defaultContext = {QueryInfo, HasUserID}

	return (
		<DataContext.Provider value={defaultContext}>
			<div className={classNames("referenceWarning", {"Active": QueryInfo.id=='unknown'})}>
				<h1>Warning!</h1>
				<h2>No User Id Found.</h2>
			</div>
			{children}
		</DataContext.Provider>
	)
}

export default Data