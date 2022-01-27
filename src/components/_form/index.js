import { useRef } from 'react'
import Checkbox from '../FormTypes/checkbox'
import ColorWheel from '../FormTypes/colorwheel'
import FaceChoice from '../FormTypes/faceChoice'
import WordSelect from '../FormTypes/wordSelect'
import './style.css'
const Form = ({Form, Answer, SaveAnswers})=>{

    const GetAnswers = (answers)=>{
        SaveAnswers(answers)
    }

    let FormType = {
        "faceChoice": FaceChoice,
        "wordSelect": WordSelect,
        "checkbox": Checkbox,
        "colorWheel": ColorWheel
    }

    let SelectedForm = FormType[Form.formType]
    return(
        <>
        <div className="form">
            <div className='prompt'>{Form.prompt}</div>
            <SelectedForm Options={Form.options} Answer={Answer} OnUpdate={GetAnswers}/>
        </div>
        </>
    )
}

export default Form