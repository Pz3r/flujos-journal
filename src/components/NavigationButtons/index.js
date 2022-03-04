
import './style.css'

const NavigationButtons = ({OnNext, ShowSubmit, OnBack, OnSubmit})=>{
    return(
        <div className="navigationButtons">
            <div className='navButton back' onClick={OnBack}>
                <div>
                    Back
                </div>
            </div>
            {ShowSubmit?(
            <div className='navButton' onClick={OnSubmit}>
                <div>
                    Submit
                </div>
            </div>
            ):(
            <div className='navButton' onClick={OnNext}>
                <div>
                    Next
                </div>
            </div>
            )}
        </div>
    )
}

export default NavigationButtons