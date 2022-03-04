import classNames from 'classnames'
import { useRef } from 'react'
import Checkbox from '../FormTypes/checkbox'
import ColorWheel from '../FormTypes/colorwheel'
import FaceChoice from '../FormTypes/faceChoice'
import ImageUpload from '../FormTypes/imageUpload'
import ReadOut from '../FormTypes/readout'
import WordSelect from '../FormTypes/wordSelect'
import Image from '../FormTypes/image'


import './style.css'
const Form = ({Form, Answer, SaveAnswers})=>{

    console.log(Form)

    const GetAnswers = (answers)=>{
        SaveAnswers(answers)
    }

    let FormType = {
        "faceChoice": FaceChoice,
        "wordSelect": WordSelect,
        "checkbox": Checkbox,
        "colorWheel": ColorWheel,
        "imageUpload": ImageUpload,
        "readout": ReadOut,
        "image": Image,
    }

    let SelectedForm = FormType[Form.formType]
    return(
        <>
        <div className="form">
            <div className={classNames('optional', {"shown": Form.optional})}>Optional</div>
            <div className='prompt'>{Form.prompt}</div>
            <div className='formbody'>
                <SelectedForm Options={Form.options} Answer={Answer} OnUpdate={GetAnswers}/>
            </div> 
        </div>
        </>
    )
}

export default Form