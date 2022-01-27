
import './style.css'

const SubmitButton = ({OnSubmit})=>{
    return(
        <div className="submitButton">
            <div className='navButton' onClick={OnSubmit}>
                <div>
                    Submit
                </div>
            </div>
        </div>
    )
}

export default SubmitButton