import React from 'react'

import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";


import Home from '../views/home'
import Live from '../views/live';
import Reflection from '../views/reflection';
import ImageUpload from '../views/imageUpload';
import ThankYou from '../views/thankyou';


const App = ()=>{
	return(
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/reflection" element={<Reflection/>}/>
					<Route path="/live" element={<Live/>}/>
					<Route path="/upload" element={<ImageUpload/>}/>
					<Route path="/thankyou" element={<ThankYou/>}/>
				</Routes>
			</Router>
		</div>
	)
}

export default App