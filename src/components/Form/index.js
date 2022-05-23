import './style.css'
import classNames from 'classnames'
import {useState} from 'react'
import ColorWheel from '../ColorWheel'

import tempImage from '../../assets/Placeholder.png'

const Satisfaction = (Answers, onAnswer, Options)=>{
	return(
	<div className='Satisfaction'>
		{Options.map((e, idx)=>(
			<div key={e.label} className={classNames('Option', {'Selected': Answers===idx})} onClick={()=>onAnswer(idx)}>
				<img alt={e.label+" face"} src={e.face}/>
				<span className='Labels'>—</span>
				<span className='Labels'>{e.label}</span>
			</div>
		))}
	</div>
	)
}

const MultipleSelect = (Answers, onAnswer, Options)=>{
	const _updateAnswer = (e)=>{
		let currentAnswers = Answers
		if(Answers == null){
			currentAnswers = []
		}
		if(currentAnswers.indexOf(e) === -1){
			currentAnswers.push(e)
		} else {
			currentAnswers = Answers.filter(i=> i!==e)
		}
		onAnswer(currentAnswers)
	}
	return(
	<div className='MultipleSelect'>
		{Options.map((e,idx)=>(
			<div className='Option' key={e}>
				<label className="switch">
  					<input type="checkbox" onChange={()=>_updateAnswer(e)} checked={Answers != null? Answers.includes(e): false}/>
  					<span className="slider round"></span>
				</label>
				<span className='Labels'>{e}</span>
			</div>
		))}
	</div>
	)
}

const FreeEntry = (Answers, onAnswer, Options)=>{

	const _updateAnswer = (e)=>{
		onAnswer(e.target.value)
	}

	return(
	<div className='FreeEntry'>
		<div className='EntryContainer'>
			<textarea type="textarea" autoFocus rows={5} cols={35} placeholder={Options} onChange={(e)=>_updateAnswer(e)} value={Answers==null?"":Answers}/>
		</div>
	</div>
	)
}

const ColorEntry = (Answers, onAnswer, Options)=>{
	return(
	<div className='ColorEntry'>
		<div className='ColorWheelContainer'>
			<ColorWheel Selected={Answers} OnSelect={(i)=>onAnswer(i)}/>
		</div>
		<div className='Hint'>TAP ON A COLOR</div>
	</div>
	)
}

const Photo = (Answer, onAnswer, Options)=>{
	let photo = tempImage
	if(Answer != null){
		photo = URL.createObjectURL(Answer) 
	}

	const _handleUpdate = (event)=>{
	    if (event.target.files && event.target.files[0]) {
		let img = event.target.files[0];
		onAnswer( img )
	      }
	}
    
	const _clearImage = ()=>{
	    onAnswer(null, null)
	}
	console.log(Answer)
	return(
	<div className='PhotoUpload'>
		<div className='ImageContainer'>
			<img alt="Uploaded" src={photo}/>
		</div>

        	<div className="buttonGroup">
        	    <button className="btn secondary" disabled={!Answer} onClick={_clearImage}>Cancel</button>
	
        	    <label className="btn">
        	        Upload
        	        <input type="file" name="image" accept="image/*;capture=camera" onChange={_handleUpdate} />
        	    </label>
	
        	</div>
	</div>
	)
}

const Forms = {
	"satifaction": Satisfaction,
	"multpleSelect": MultipleSelect,
	"freeEntry": FreeEntry,
	"colorEntry": ColorEntry,
	"photo": Photo
}


const Form = ({Prompt, FormType, Answer, OnAnswer, Optional, Options, children})=>{
	return (
		<div className="FormContainer">
			<div className={classNames('Form', 'F3')}></div>
			<div className={classNames('Form', 'F2')}></div>
			<div className={classNames('Form', 'F1')}>
				<div className='prompt'>{Prompt}</div>
				{Optional?(<div className='optional'>OPTIONAL</div>):(null)}

				{FormType?Forms[FormType](Answer, OnAnswer, Options):null}
				{children}
			</div>
		</div>
	)
}

export default Form