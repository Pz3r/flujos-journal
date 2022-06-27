import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'
import Form from '../../components/Form';
import NavigationButtons from '../../components/NavigationButtons';
import { PutImage, SubmitData } from '../../utils/clientActions';
import Header from '../../components/Header';
import {Satisfaction, RideCharacteristics, ShortResponse, Color, Photos} from '../../assets/copy'


import terrible from '../../assets/Bad.svg'
import bad from '../../assets/Meh.svg'
import okay from '../../assets/Okay.svg'
import good from '../../assets/Good.svg'
import great from '../../assets/Great.svg'
import { DataContext } from '../../app/dataContext';



function shuffleArray(arr) {
	arr.sort(() => Math.random() - 0.5);
	return arr
      }

let Journal = [
    { 
        prompt: Satisfaction.Prompt, 
        formType: "satifaction", 
        options: [
            {
                label: Satisfaction.Options[0],
                face: terrible
            }, 
            {
                label: Satisfaction.Options[1],
                face: bad
            }, 
            {
                label: Satisfaction.Options[2],
                face: okay
            }, 
            {
                label: Satisfaction.Options[3],
                face: good
            }, 
            {
                label: Satisfaction.Options[4],
                face: great
            }, 
        ]
    },
    { 
        prompt: RideCharacteristics.Prompt, 
        formType: "multpleSelect", 
        options: shuffleArray(RideCharacteristics.Options)
    },
    { 
        prompt: ShortResponse.Prompt, 
        formType: "freeEntry", 
        options: ShortResponse.Placeholder
    },
    { 
        prompt: Color.Prompt, 
        formType: "colorEntry", 
        options: [
            "blue",
            "yellow",
            "magenta",
            "light blue",
            "green",
            "pink"
        ]
    },
    { 
        prompt: Photos.Prompt, 
        formType: "photo", 
        optional: true
    }
]

const Reflection = ()=>{
    const {QueryInfo, UserLang} = useContext(DataContext)
    let navigate = useNavigate();
    const [position, setPosition] = useState(0)
    const [journalInputs, setJournalInputs] = useState( new Array(Journal.length).fill(null) )
    const [loading, setLoading] = useState(false)

    const _saveAnswers = (answer)=>{
        console.log(answer)
        setJournalInputs((prev)=>{
            let temp = [...prev]
            temp[position] = answer
            return temp
        })
    }

    const _submitAnswers = async()=>{
        setLoading(true)
        var operations = []
        var image = journalInputs.pop()
        var imageName = null
        if(image){
            var extension = image.name.split('.').pop()
            var ts = Date.now()
            imageName = QueryInfo.username+"/"+ts+"."+extension   
            operations.push( PutImage(imageName, image) )       
        }
        
        operations.push( SubmitData( {type: "reflection", answers: journalInputs, journal:Journal, image:imageName, userId: QueryInfo.username, paveData:QueryInfo, role: QueryInfo.role}) )
        navigate('/thankyou')
        Promise.allSettled(operations).then(()=>{
            setLoading(false)
            navigate('/thankyou')
        })
    }

    const GoNext = ()=>{
        setPosition(position+1)
    }

    const GoBack = ()=>{
        if(position-1 < 0){
            navigate("/")
        } else {
            setPosition(position-1)
        }
    }


    let ShowSubmit = position === Journal.length-1
	return (
			<div className="reflection">
                <Header ShowProgressIndicator ProgressTotal={Journal.length} ProgressIndex={position} Invert HasBack/>
                    <Form 
                        Prompt={Journal[position].prompt} 
                        FormType={Journal[position].formType} 
                        Answer={journalInputs[position]} 
                        OnAnswer={_saveAnswers} 
                        Optional={Journal[position].optional} 
                        Options={Journal[position].options}
                    />
                <NavigationButtons NextString="Next" BackString="Back" SubmitString="Submit"  OnNext={GoNext} ShowBack={position>0} OnBack={GoBack} ShowSubmit={ShowSubmit} OnSubmit={loading?()=>{}:_submitAnswers}/>
			</div>
	)	
}


export default Reflection