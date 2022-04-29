
import './style.css'

const NavigationButtons = ({OnNext, ShowBack, ShowSubmit, OnBack, OnSubmit})=>{
    return(
        <div className="navigationButtons">
            {ShowBack?(
                            <div className='navButton back' onClick={OnBack}>
                            <div>
                                {'< Back'}
                            </div>
                        </div>
            ):(null)}
            {ShowSubmit?(
            <div className='navButton' onClick={OnSubmit}>
                <div>
                    Submit
                </div>
            </div>
            ):(
            <div className='navButton' onClick={OnNext}>
                <div>
                    {'Next >'}
                </div>
            </div>
            )}
        </div>
    )
}

export default NavigationButtons