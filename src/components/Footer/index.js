import FooterLogo from '../../assets/icons/cibic_logo_horiz.png'
import FooterLogoInverted from '../../assets/icons/cibic_logo_horiz_invert.png'
import './style.css'
const Footer = ({Inverted})=>{
	return (
		<footer>
			<div className='FooterLogo'>
				<img alt="Cibic Logo" src={Inverted?FooterLogoInverted:FooterLogo}/>
			</div>
		</footer>
	)
}

export default Footer