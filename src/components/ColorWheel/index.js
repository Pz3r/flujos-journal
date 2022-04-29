const ColorWheel = ({Selected, OnSelect}) =>{
	return(
		<div>
			<svg width="100%" height="100%" viewBox="0 0 267 267" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path	onClick={()=>OnSelect(0)}	fillOpacity={Selected === null?"100%":(Selected===0?"100%":"75%")} transform={Selected === null?"":(Selected===0?"translate(-5,-10)":"")}	 d="M133.5 11.4436V133.5L27.7814 72.4611C48.885 35.9862 88.3263 11.4436 133.5 11.4436Z" fill="#4477AA" 	stroke="black" strokeWidth="2.5" strokeMiterlimit="10"/>
				<path	onClick={()=>OnSelect(1)}	fillOpacity={Selected === null?"100%":(Selected===1?"100%":"75%")} transform={Selected === null?"":(Selected===1?"translate(5,-10)":"")}	 d="M239.232 72.4532L133.5 133.5V11.433C178.674 11.433 218.118 35.9756 239.232 72.4532Z" fill="#CCBB44" stroke="black" strokeWidth="2.5" strokeMiterlimit="10"/>
				<path	onClick={()=>OnSelect(2)}	fillOpacity={Selected === null?"100%":(Selected===2?"100%":"75%")} transform={Selected === null?"":(Selected===2?"translate(11, 0)":"")}	 d="M255.556 133.5C255.595 154.929 249.963 175.987 239.232 194.536L133.5 133.5L239.232 72.4637C249.963 91.0128 255.595 112.071 255.556 133.5V133.5Z" fill="#AA3377" stroke="black" strokeWidth="2.5" strokeMiterlimit="10"/>
				<path	onClick={()=>OnSelect(3)}	fillOpacity={Selected === null?"100%":(Selected===3?"100%":"75%")} transform={Selected === null?"":(Selected===3?"translate(5,10)":"")}	 d="M239.232 194.536C218.139 231.014 178.687 255.556 133.5 255.556V133.5L239.232 194.536Z" fill="#66CCEE" stroke="black" strokeWidth="2.5" strokeMiterlimit="10"/>
				<path	onClick={()=>OnSelect(4)}	fillOpacity={Selected === null?"100%":(Selected===4?"100%":"75%")} transform={Selected === null?"":(Selected===4?"translate(-5,10)":"")}	 d="M133.5 133.5V255.556C88.3263 255.556 48.885 231.014 27.7814 194.539L133.5 133.5Z" fill="#228833" stroke="black" strokeWidth="2.5" strokeMiterlimit="10"/>
				<path	onClick={()=>OnSelect(5)}	fillOpacity={Selected === null?"100%":(Selected===5?"100%":"75%")} transform={Selected === null?"":(Selected===5?"translate(-11,0)":"")}	 d="M133.5 133.5L27.7813 194.539C17.078 175.977 11.4437 154.927 11.4437 133.5C11.4437 112.073 17.078 91.0231 27.7813 72.4612L133.5 133.5Z" fill="#EE6677" stroke="black" strokeWidth="2.5" strokeMiterlimit="10"/>
			</svg>
		</div>
	)
}
export default ColorWheel