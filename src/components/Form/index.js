import './style.css'
import classNames from 'classnames'
import {useContext} from 'react'
import ColorWheel from '../ColorWheel'
import { DataContext } from '../../app/dataContext'

import tempImage from '../../assets/Placeholder.png'
import { Color, Photos } from '../../assets/copy'

const Satisfaction = (Answers, onAnswer, Options, lang)=>{
	return(
	<div className='Satisfaction'>
		{Options.map((e, idx)=>(
			<div key={e.label[lang]} className={classNames('Option', {'Selected': Answers===idx})} onClick={()=>onAnswer(idx)}>
				<img alt={e.label[lang]+" face"} src={e.face}/>
				<span className='Labels'>—</span>
				<span className='Labels'>{e.label[lang]}</span>
			</div>
		))}
	</div>
	)
}

const MultipleSelect = (Answers, onAnswer, Options, lang)=>{
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
			<div className='Option' key={e[lang]}>
				<label className="switch">
  					<input type="checkbox" onChange={()=>_updateAnswer(e)} checked={Answers != null? Answers.includes(e): false}/>
  					<span className="slider round"></span>
				</label>
				<span className='Labels'>{e[lang]}</span>
			</div>
		))}
	</div>
	)
}

const FreeEntry = (Answers, onAnswer, Options, lang)=>{

	const _updateAnswer = (e)=>{
		onAnswer(e.target.value)
	}

	return(
	<div className='FreeEntry'>
		<div className='EntryContainer'>
			<textarea type="textarea" autoFocus rows={5} cols={35} placeholder={Options[lang]} onChange={(e)=>_updateAnswer(e)} value={Answers==null?"":Answers}/>
		</div>
	</div>
	)
}

const ColorEntry = (Answers, onAnswer, Options, lang)=>{
	return(
	<div className='ColorEntry'>
		<div className='ColorWheelContainer'>
			<ColorWheel Selected={Answers} OnSelect={(i)=>onAnswer(i)}/>
		</div>
		<div className='Hint'>{Color.cta[lang]}</div>
	</div>
	)
}

const Photo = (Answer, onAnswer, Options, lang)=>{
	let photos = [tempImage, tempImage, tempImage, tempImage]
	if(Answer != null){
		let answerLinks = Answer.map(e=>(URL.createObjectURL(e) ))

		photos = answerLinks.concat(photos).slice(0,4)
	}

	const _clearInputValue = (event)=>{
		event.target.value = null
	}

	const _handleUpdate = (event)=>{
	    if (event.target.files && event.target.files[0]) {
		let img = Array.from(event.target.files).slice(0,4);
		onAnswer( img )
	      }
	}
    
	const _clearImage = ()=>{
	    onAnswer(null, null)
	}
	return(
	<div className='PhotoUpload'>
		<div className='ImageContainer'>
			{photos.map(e=>(
				<img alt="Uploaded" src={e} width={75}/>
			))}
		</div>

        	<div className="buttonGroup">
        	    <button className="btn secondary" onClick={_clearImage}>{Photos.cancel[lang]}</button>
		
		<div className="btn">
		<label className="btn">
        	        {Photos.upload[lang]}
        	        <input type="file" multiple name="image" accept="image/*" onChange={_handleUpdate} onClick={_clearInputValue} />
        	    </label>
		</div>
	
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
	const {UserLang} = useContext(DataContext)
	return (
		<div className="FormContainer">
			<div className={classNames('Form', 'F3')}></div>
			<div className={classNames('Form', 'F2')}></div>
			<div className={classNames('Form', 'F1')}>
				<div className='prompt'>{Prompt[UserLang]}</div>
				{Optional?(<div className='optional'>{Photos.optional[UserLang]}</div>):(null)}

				{FormType?Forms[FormType](Answer, OnAnswer, Options, UserLang):null}
				{children}
			</div>
		</div>
	)
}

export default Form