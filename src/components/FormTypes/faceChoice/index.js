import { faTired, faFrown, faMeh, faSmile, faGrinBeam } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"

import './style.css'

import Bad from '../../../assets/Bad.png'
import Meh from '../../../assets/Meh.png'
import Okay from '../../../assets/Okay.png'
import Good from '../../../assets/Good.png'
import Great from '../../../assets/Great.png'

let Faces = [
    <img src={Bad}/>,
    <img src={Meh}/>,
    <img src={Okay}/>,
    <img src={Good}/>,
    <img src={Great}/>
]


const FaceChoice = ({Options, Answer, OnUpdate})=>{

    const _handleUpdate = (a)=>{
        OnUpdate(a)
    }

    return(
        <div className={'faceChoice'}>
            {Options.map((e, i) =>(
            <div className={classNames('option', {'active': i==Answer})} onClick={()=>{_handleUpdate(i)}}>
                {Faces[i]}
            </div>
            ))}
        </div>
    )
}

export default FaceChoice