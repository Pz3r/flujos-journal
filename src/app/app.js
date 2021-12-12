import React from 'react'

import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";


import Home from '../views/home'


const App = ()=>{
	return(
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
			</Router>
		</div>
	)
}

export default App