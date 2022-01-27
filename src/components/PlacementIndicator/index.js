import classNames from "classnames"

import './style.css'

const PlacementIndicator = ({Total, Current})=>{
    
    let Dots = new Array(Total).fill(0)

    return(
        <div className="placementIndicator">
            {Dots.map((e,i)=>(
                <div className={ classNames("navDot", {"active": Current==i}) } ></div>
            ))}
        </div>
    )
}

export default PlacementIndicator