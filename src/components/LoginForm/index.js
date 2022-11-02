import './style.css'

const LoginForm = ({GoNav})=>{
	return (
		<div className="LoginForm">
			<div className='LoginFieldsWrapper'>
				<form className='LoginFields'>
					<label>
						Email
						<input type="text" placeholder='Email'></input>
					</label>
					<label>
						Password
						<input type="password" placeholder='Password'></input>
					</label>
					<button type='submit'>Login</button>
				</form>
			
				<div className='AccountContact'>
					<h2>Don't have an account?</h2>
					<a href="#">contact us</a>
				</div>

			</div>

			<div className='Legal'>
				<h2>Privacy & Cookies</h2>
				<p>This site uses cookies to collect information for the CiBiC (CiBiC Bicycle Commuting) research project. These cookies are used to connect your submissions to the interpretive cartography.</p>
			</div>

		</div>
	)
}

export default LoginForm