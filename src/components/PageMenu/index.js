import './style.css'

const PageMenu = ({MenuItems, GoNav})=>{
	return (
		<div className="PageMenu">
			{MenuItems.map(e=>(
			<div className="Page" key={e.label} style={{backgroundColor: e.color}}>
				<div className='PageTitleContainer'>
					<div className='PageTitle' onClick={()=>GoNav(e.path)}>
						<img alt={e.label+' logo'} src={e.logo}/>
						<h2>{e.label}</h2>
					</div>
				</div>
			</div>
			))}
		</div>
	)
}

export default PageMenu