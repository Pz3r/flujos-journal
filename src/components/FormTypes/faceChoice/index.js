import { faTired, faFrown, faMeh, faSmile, faGrinBeam } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"

import './style.css'


let Faces = [
    <FontAwesomeIcon icon={faTired}/>,
    <FontAwesomeIcon icon={faFrown}/>,
    <FontAwesomeIcon icon={faMeh}/>,
    <FontAwesomeIcon icon={faSmile}/>,
    <FontAwesomeIcon icon={faGrinBeam}/>
]


const FaceChoice = ({Options, Answer, OnUpdate})=>{

    const _handleUpdate = (a)=>{
        OnUpdate(a)
    }

    return(
        <div className="faceChoice">
            {Options.map((e, i) =>(
            <div className={classNames('option', {"active": i==Answer})} onClick={()=>{_handleUpdate(i)}}>
                {Faces[i]} — {e}
            </div>
            ))}
        </div>
    )
}

export default FaceChoice