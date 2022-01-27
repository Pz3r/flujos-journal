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
	const [selectingMode, setSelectingMode] = useState(false)
    const [position, setPosition] = useState(0)
    const [journalInputs, setJournalInputs] = useState(new Array(ExampleJournal.length).fill(null))
    const [showSubmit, setShowSubmit] = useState(false)

	var search = window.location.search.substring(1);
	var params = {}
	try{
		params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
	} catch (e){
		console.log('no params')
	}

	const onSelectMode = ()=>{
		setSelectingMode(true)
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

    const _saveAnswers = (answer)=>{
        setJournalInputs((prev)=>{
            let temp = [...prev]
            temp[position] = answer
            return temp
        })
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
                    <NavigationButtons OnNext={GoNext} OnBack={GoBack} ShowSubmit={position == ExampleJournal.length-1} OnSubmit={()=>{console.log('submitting answers')}}/>
                </div>
			</div>
		</div>
	)	
}

export default Reflection