import React, {useContext, useEffect, useRef} from 'react'
import Header from '../../components/Header';
import qrCode from '../../components/QRCode';

import './styles.css'

import { DataContext } from '../../app/dataContext';

const QrCode = ()=>{
	const {UserLang, QueryInfo} = useContext(DataContext)
	const ref = useRef(null)

	useEffect(()=>{
		qrCode.append(ref.current)
	}, [])

	useEffect(() => {
		qrCode.update({
		  data: QueryInfo.username
		});
	      }, [QueryInfo]);

	return (
		<div className="QrCode">
			<Header PageName="Code" HasBack HasLangauge={true}/>
			<div className='wrapper'>
				<div ref={ref}></div>
			</div>
		</div>
	)	
}

export default QrCode