import Form from "../../components/Form";
import image from '../../assets/system_image.png'
import Header from "../../components/Header";
import Footer from "../../components/Footer";


import './style.css'

const ThankYou = () => {

    return (
            <div className="thankyou">
                <Header HasBack Invert ShowTitle={false} BackGoesTo={'/'}/>
                <Form>
                    <h1>Thank you!</h1>
                    <h2>Your submissions were added to the Interactive Cartography system.</h2>
                    <div className="imageContainer">
                        <img alt="snapshot of artwork" src={image}/>
                    </div>
                    <div className="caption">A recent snapshot of the system</div>
                </Form>
				<Footer Inverted/>
            </div>
    )
}

export default ThankYou