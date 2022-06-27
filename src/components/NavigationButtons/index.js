
import './style.css'

const NavigationButtons = ({OnNext, ShowBack, ShowSubmit, OnBack, OnSubmit, NextString, BackString, SubmitString})=>{
    return(
        <div className="navigationButtons">
            {ShowBack?(
                            <div className='navButton back' onClick={OnBack}>
                            <div>
                                {'< '+BackString}
                            </div>
                        </div>
            ):(null)}
            {ShowSubmit?(
            <div className='navButton' onClick={OnSubmit}>
                <div>
                    {SubmitString}
                </div>
            </div>
            ):(
            <div className='navButton' onClick={OnNext}>
                <div>
                    {NextString+' >'}
                </div>
            </div>
            )}
        </div>
    )
}

export default NavigationButtons