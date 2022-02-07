import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router';
import classNames from 'classnames'
import ReactJson from 'react-json-view'
import './styles.css'
import { Link } from 'react-router-dom';
import ColorWheel from '../../components/FormTypes/colorwheel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faUsers, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { SubmitData } from '../../utils/clientActions';


function useQuery() {
	const { search } = useLocation();
  
	return new URLSearchParams(search), [search];
  }


const Live = ()=>{
	const [selectingMode, setSelectingMode] = useState(false)
	const [selectedColor, setSelectedColor] = useState(null)

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

	useEffect(()=>{
		if(selectedColor == null) return
		let timeout = setTimeout(()=>{
			setSelectedColor(null)
		}, 1000);
		return(()=>{
			clearTimeout(timeout)
		})
	}, [selectedColor])

	const userInput = (input)=>{
		SubmitData({type: "live", data:input, user: 'test', time: Date.now()}).then((response)=>{})
	}


	return (
		<div className="container">
			<div className="landing">
				<div className={classNames("header")}>
					<div className="corridor_name">
						Corridor
					</div>
					<div className="title">
						LIVE
					</div>
					<div>
						<ColorWheel OnUpdate={(e)=>{userInput({color: e})}} Answer={selectedColor}/>
					</div>
					<div className='live_buttons'>
						<div className='hazard' onClick={ (e)=>{ userInput({type: "hazard"}) } }>
							<div className='iconContainer'>
								<FontAwesomeIcon icon={faExclamation} color='white' size='4x'/>
							</div>
						</div>
						<div className='togetherness' onClick={ (e)=>{ userInput({type: "togetherness"}) } }>
							<div className='iconContainer'>
								<FontAwesomeIcon icon={faUsers} color='white' size='4x'/>
							</div>
						</div>
						<div className='enjoyability' onClick={ (e)=>{ userInput({type: "enjoyability"}) } }>
							<div className='iconContainer'>
								<FontAwesomeIcon icon={faThumbsUp} color='white' size='4x'/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)	
}

export default Live