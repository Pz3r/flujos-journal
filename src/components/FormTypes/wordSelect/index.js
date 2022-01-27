

import classNames from 'classnames'
import './style.css'

const WordSelect = ({Options, Answer, OnUpdate})=>{

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
        <div className="wordSelect">
            {Options.map((e, i) =>(<div className={classNames('option', {"active": Answer.includes(i)})} onClick={()=>{_handleUpdate(i)}}>{e}</div>))}
        </div>
    )
}

export default WordSelect