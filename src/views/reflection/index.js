import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'
import PlacementIndicator from '../../components/PlacementIndicator';
import Form from '../../components/_form';
import NavigationButtons from '../../components/NavigationButtons';
import { PutImage, SubmitData } from '../../utils/clientActions';


/*
function useQuery() {
	const { search } = useLocation();
  
	return new URLSearchParams(search), [search];
  }
*/

let ExampleJournal = [
    { 
        prompt: "Rate your commute satisfaction:", 
        formType: "faceChoice", 
        options: ["1", "2", "3", "4", "5"]
    },
    { 
        prompt: "Select the words that describe your commute:", 
        formType: "wordSelect", 
        options: ["scary", "energizing", "intense", "liberating", "playful", "stressful", "tedious", "worrying", "tiring", "autonomy"]
    },
    { 
        prompt: "I felt...", 
        formType: "checkbox", 
        options: ["disconnected", "left behind", "on pace", "recognized", "celebrated"]
    },
    { 
        prompt: "How safe was your ride?", 
        formType: "colorWheel", 
        options: []
    },
    { 
        prompt: "Upload photos of your ride:", 
        formType: "imageUpload", 
        options: [],
        optional: true
    }

]

const USER = "test"

const Reflection = ()=>{
    let navigate = useNavigate();
    const [position, setPosition] = useState(0)
    const [journalInputs, setJournalInputs] = useState( new Array(ExampleJournal.length).fill(null) )
    const [loading, setLoading] = useState(false)


    const _saveAnswers = (answer)=>{
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
            imageName = USER+ts+"."+extension   
            console.log({name: imageName, data: image})
            operations.push( PutImage(imageName, image) )       
        }
        console.log({type: "reflection", data: journalInputs, user: USER})
        operations.push( SubmitData({type: "reflection", answers: journalInputs, journal:ExampleJournal, image:imageName, userId: 'test', role: 'testRole'}) )
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


    let ShowSubmit = position === ExampleJournal.length-1
	return (
		<div className="container">
			<div className="reflection">
                <PlacementIndicator Total={ExampleJournal.length} Current={position}/>
                <Form Form={ExampleJournal[position]} Answer={journalInputs[position]} SaveAnswers={_saveAnswers}/>
                <div className='action'>
                    <NavigationButtons OnNext={GoNext} OnBack={GoBack} ShowSubmit={ShowSubmit} OnSubmit={_submitAnswers}/>
                </div>
			</div>
		</div>
	)	
}

export default Reflection