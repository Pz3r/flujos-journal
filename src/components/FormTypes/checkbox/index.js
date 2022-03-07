

import './style.css'

const Checkbox = ({Options, Answer, OnUpdate})=>{

    const _handleUpdate = (a)=>{
        if (Answer.includes(a)){
            let temp = Answer.filter((item)=>{
                return item != a
            })
            OnUpdate(temp)
        } else {
            OnUpdate([...Answer, a])
        }
    }

    if(Answer==null){
        Answer = []
    }

    return(
        <div className="checkbox">
            {Options.map((e, i) =>(
                <div className="option">
                    <label className="form-control">
                    <input type={"checkbox"} checked={Answer.includes(i)} onClick={()=>{_handleUpdate(i)}}/>
                    </label>
                    <div className="checkLabel">{e}</div>
                </div>))}
        </div>
    )
}

export default Checkbox