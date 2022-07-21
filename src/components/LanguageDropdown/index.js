import React, {useState, useContext} from 'react'
import classNames from 'classnames'
import './style.css'

import { DataContext } from '../../app/dataContext'

const LanguageDropdown = ({Inverted})=>{
	const {UserLang, SetUserLang} = useContext(DataContext)
	const [selectorOpen, setOpen] = useState(false)
	return (
		<div className={classNames("language_selector", {"inverted": Inverted})}>
			<button onClick={()=>setOpen(!selectorOpen)}></button>
			{selectorOpen? (
			<div className="dropdown">
				<button onClick={()=>SetUserLang('en')} className={classNames({Selected: UserLang=="en"})}>English</button>
				<button onClick={()=>SetUserLang('es')} className={classNames({Selected: UserLang=="es"})}>Español</button>
				<button onClick={()=>SetUserLang('zh')} className={classNames({Selected: UserLang=="zh"})}>简体中文</button>
			</div>
			):(null)}
		</div>
	)
}

export default LanguageDropdown