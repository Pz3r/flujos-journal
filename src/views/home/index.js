import React, {useState} from 'react'
import { useLocation } from 'react-router';
import classNames from 'classnames'
import ReactJson from 'react-json-view'
import './styles.css'
import { Link } from 'react-router-dom';


function useQuery() {
	const { search } = useLocation();
  
	return new URLSearchParams(search), [search];
  }


const Home = ()=>{
	const [selectingMode, setSelectingMode] = useState(false)

	var search = window.location.search.substring(1);
	var params = {}
	try{
		params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
	} catch (e){
		console.log('no params')
	}

	const onSelectMode = ()=>{
		setSelectingMode(true)
	}


	return (
		<div className="container">
			<div className="landing">
				<div className={classNames("header", {"selectingMode": selectingMode})}>
					<div className="corridor_name">
						Corridor
					</div>
					<div className="title">
						Journaling
					</div>
				</div>
				<div className={classNames("modeSelection")}>

					<Link className='btn' to="/reflection">Reflection</Link>
					<Link className='btn' to="/live">Live</Link>
					<Link className='btn' to="/upload">Upload a Photo</Link>
				</div>
				<div className={classNames("map", {"in": selectingMode})}>

				</div>
			</div>
		</div>
	)	
}

export default Home