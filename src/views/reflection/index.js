import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'
import Form from '../../components/Form';
import NavigationButtons from '../../components/NavigationButtons';
import { PutImage, SubmitData } from '../../utils/clientActions';
import Header from '../../components/Header';


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
        prompt: "Rate your commute satisfaction:", 
        formType: "satifaction", 
        options: [
            {
                label: "terrible",
                face: terrible
            }, 
            {
                label: "bad",
                face: bad
            }, 
            {
                label: "okay",
                face: okay
            }, 
            {
                label: "good",
                face: good
            }, 
            {
                label: "great",
                face: great
            }, 
        ]
    },
    { 
        prompt: "Select all the characteristics of your ride:", 
        formType: "multpleSelect", 
        options: shuffleArray([
            "Healthy", 
            "Safe",
            "Playful",
            "Relaxing",
            "Liberating",
            "Easy",
            "Slow",
            "Hazardous",
            "Tiring",
            "Stressful",
            "Rushed",
            "Unsafe"
        ])
    },
    { 
        prompt: "Describe your ride with one word or short phrase:", 
        formType: "freeEntry", 
        options: "My ride was..."
    },
    { 
        prompt: "What color best expresses how you feel about your last CiBiC ride?", 
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
        prompt: "Upload photos of your ride:", 
        formType: "photo", 
        optional: true
    }
]

const Reflection = ()=>{
    const {QueryInfo} = useContext(DataContext)
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
                <NavigationButtons OnNext={GoNext} ShowBack={position>0} OnBack={GoBack} ShowSubmit={ShowSubmit} OnSubmit={loading?()=>{}:_submitAnswers}/>
			</div>
	)	
}


export default Reflection