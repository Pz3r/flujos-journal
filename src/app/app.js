import React from 'react'

import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import DataProvider from './dataContext'


import Home from '../views/home'
import Live from '../views/live';
import Reflection from '../views/reflection';
import ImageUpload from '../views/imageUpload';
import ThankYou from '../views/thankyou';
import About from '../views/about';
import RWGPSLogin from '../views/rwgpsLogin'
import QrCode from '../views/qrCode';


const App = ()=>{
	return(
		<div className="app">
			<div className="container">
			<Router>
				<DataProvider>
				<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/reflection" element={<Reflection/>}/>
						<Route path="/live" element={<Live/>}/>
						<Route path="/upload" element={<ImageUpload/>}/>
						<Route path="/thankyou" element={<ThankYou/>}/>
						<Route path="/about" element={<About/>}/>
						<Route path="/rwgps" element={<RWGPSLogin/>}/>
						<Route path="/code" element={<QrCode/>}/>
				</Routes>
				</DataProvider>
			</Router>
			</div>
		</div>
	)
}

export default App