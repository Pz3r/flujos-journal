import React, {useState} from 'react'
import { useLocation } from 'react-router';
import classNames from 'classnames'
import ReactJson from 'react-json-view'
import './styles.css'
import { Link } from 'react-router-dom';
import PlacementIndicator from '../../components/PlacementIndicator';
import Form from '../../components/_form';
import NavigationButtons from '../../components/NavigationButtons';
import SubmitButton from '../../components/SubmitButton';
import { SubmitData } from '../../utils/clientActions';


function useQuery() {
	const { search } = useLocation();
  
	return new URLSearchParams(search), [search];
  }


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
    }

]

const Reflection = ()=>{
    const [position, setPosition] = useState(0)
    const [journalInputs, setJournalInputs] = useState(new Array(ExampleJournal.length).fill(null))
    const [showSubmit, setShowSubmit] = useState(false)
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
        })
    }

    const GoNext = ()=>{

        // TODO: Handle end state
        // TODO: Handle skip state
        if(position+1 > ExampleJournal.length){
            // end and submit
            setShowSubmit(true)
        } else {
            setPosition(position+1)
        }
    }

    const GoBack = ()=>{
        // TODO: Handle cycle to start state
        if(position-1 < 0){
            // back in the begining
        } else {
            setShowSubmit(false)
            setPosition(position-1)
        }
    }


    console.log(journalInputs)
	return (
		<div className="container">
			<div className="reflection">
                <PlacementIndicator Total={ExampleJournal.length} Current={position}/>
                <div className='body'>
                    <Form Form={ExampleJournal[position]} Answer={journalInputs[position]} SaveAnswers={_saveAnswers}/>
                </div>
                <div className='action'>
                    <NavigationButtons OnNext={GoNext} OnBack={GoBack} ShowSubmit={position == ExampleJournal.length-1} OnSubmit={_submitAnswers}/>
                </div>
			</div>
		</div>
	)	
}

export default Reflection