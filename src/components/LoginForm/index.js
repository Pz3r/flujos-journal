import React, {useContext, useState} from 'react';
import { LoginRWGPS } from '../../utils/clientActions';
import {Login} from '../../assets/copy'

import './style.css'
import { DataContext } from '../../app/dataContext';

/* eslint-disable jsx-a11y/anchor-is-valid */

const LoginForm = ({GoNav})=>{
	const {UserLang} = useContext(DataContext)
	const [inputField , setInputField] = useState({
		email: '',
		password: ''
	    })
	const [badLogin, setBadLogin] = useState(false)

	const inputsHandler = (e) =>{
		setInputField( {...inputField, [e.target.name]: e.target.value} )
	}


	const FormSubmit = (e)=>{
		LoginRWGPS(inputField.email, inputField.password).then(data=>{
			if(data.status == 401){
				setBadLogin(true)
				return
			}
			localStorage.setItem("rwgps", JSON.stringify(data.user))
			window.location.href = '/?username='+ encodeURIComponent(data.user.id) + "&name=" + encodeURIComponent(data.user.name) + "&loc=BA"
			//navigate('/?username='+ encodeURIComponent(data.user.id) + "&name=" + encodeURIComponent(data.user.name))
		}).catch(error=>{
			console.log(error)
		})
	}

	let prevLogin = localStorage.getItem("rwgps")
	if(prevLogin != null){
		let userData = JSON.parse(prevLogin)
		window.location.href = '/?username='+ encodeURIComponent(userData.id) + "&name=" + encodeURIComponent(userData.name) + "&loc=BA"
	}


	return (
		<div className="LoginForm">
			<div className='LoginFieldsWrapper'>
				{badLogin?<div style={{width: "100%", color: "red", marginBottom:"10px"}}>
					{Login.Incorrect[UserLang]}
				</div>:null}
				<div className='LoginFields' onSubmit={FormSubmit}>
					<label>
						{Login.Email[UserLang]}
						<input autocomplete="false" type="text" placeholder='Email' onChange={inputsHandler} name="email" value={inputField.email}></input>
					</label>
					<label>
						{Login.Password[UserLang]}
						<input autocomplete="false" type="password" placeholder='Password' onChange={inputsHandler} name="password" value={inputField.password}></input>
					</label>
					<button onClick={FormSubmit}>{Login.Login[UserLang]}</button>
				</div>
			
				<div className='AccountContact'>
					<h2>{Login.NoAccount[UserLang]}</h2>
					<a href="mailto:support@cibic.bike">support@cibic.bike</a>
				</div>

			</div>

			<div className='Legal'>
				<h2>{Login.Privacy[UserLang]}</h2>
				<p>{Login.Cookies[UserLang]}</p>
			</div>

		</div>
	)
}

export default LoginForm