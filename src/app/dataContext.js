import classNames from "classnames";
import React,{ useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
export const DataContext = React.createContext();

const Data =  ({children}) => {
	const [QueryInfo, setQueryInfo] = useState({})
	var search = window.location.search.substring(1);
	
	useEffect(()=>{
		try{
			setQueryInfo((e)=>{
				var fromQS = new URLSearchParams(search)
				return Object.assign(Object.fromEntries(fromQS.entries()), e)
			})
		} catch (e){
			
		}
	}, [])

	const HasUserID = QueryInfo.username

	const defaultContext = {QueryInfo, HasUserID}

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