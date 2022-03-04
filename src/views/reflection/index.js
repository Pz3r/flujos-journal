import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'
import PlacementIndicator from '../../components/PlacementIndicator';
import Form from '../../components/_form';
import NavigationButtons from '../../components/NavigationButtons';
import { SubmitData } from '../../utils/clientActions';


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

const Reflection = ()=>{
    let navigate = useNavigate();
    const [position, setPosition] = useState(0)
    const [journalInputs, setJournalInputs] = useState(new Array(ExampleJournal.length).fill(null))
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
        SubmitData({type: "reflection", data:journalInputs, user: 'test'}).then((response)=>{
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