import React, {useState, useEffect, useContext} from 'react'
import { useLocation } from 'react-router';
import './styles.css'

import ColorWheel from '../../components/ColorWheel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faUsers, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { SubmitData } from '../../utils/clientActions';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { DataContext } from '../../app/dataContext';


const Live = ()=>{
	const {QueryInfo} = useContext(DataContext)
	const [selectedColor, setSelectedColor] = useState(null)

	useEffect(()=>{
		if(selectedColor == null) return
		let timeout = setTimeout(()=>{
			setSelectedColor(null)
		}, 1000);
		return(()=>{
			clearTimeout(timeout)
		})
	}, [selectedColor])

	const selectColor = (idx)=>{
		setSelectedColor(idx)
		userInput({color: idx})
	}

	const selectButton = (idx)=>{
		userInput({button: idx})
	}

	const userInput = (input)=>{
		let time = new Date().toISOString().replace('Z','+00:00')
		SubmitData({ type: "live", data:input, userId: QueryInfo.username, paveData:QueryInfo, time: time, role:QueryInfo.role}).then((response)=>{})
	}


	return (
			<div className="live">
				<Header PageName="LIVE" HasBack HasCamera/>
				<div className='ColorWheelContainer'>
					<ColorWheel OnSelect={(e)=>{selectColor(e)}} Selected={selectedColor}/>
				</div>
				<div className='live_buttons'>
					<div>
						<div className='live_button' onClick={ (e)=>{ selectButton("caution") } }>
							<div className='iconContainer'>
								<FontAwesomeIcon icon={faExclamation} color='white' size='4x'/>
							</div>
						</div>
						<p>Caution</p>
					</div>
					<div>
						<div className='live_button' onClick={ (e)=>{ selectButton("community") } }>
							<div className='iconContainer'>
								<FontAwesomeIcon icon={faUsers} color='white' size='4x'/>
							</div>
						</div>
						<p>Community</p>
					</div>
					<div>
						<div className='live_button' onClick={ (e)=>{ selectButton("positivity") } }>
							<div className='iconContainer'>
								<FontAwesomeIcon icon={faThumbsUp} color='white' size='4x'/>
							</div>
						</div>
						<p>Positivity</p>
					</div>
				</div>
				<Footer/>
			</div>
	)	
}

export default Live