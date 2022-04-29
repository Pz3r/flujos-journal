import React, {useState} from 'react'
import classNames from 'classnames'
import './style.css'

const LanguageDropdown = ({Inverted})=>{
	const [selectorOpen, setOpen] = useState(false)
	return (
		<div className={classNames("language_selector", {"inverted": Inverted})}>
			<button onClick={()=>setOpen(!selectorOpen)}></button>
			{selectorOpen? (
			<div className="dropdown">
				<button>English</button>
				<button>Español</button>
				<button>简体中文</button>
			</div>
			):(null)}
		</div>
	)
}

export default LanguageDropdown