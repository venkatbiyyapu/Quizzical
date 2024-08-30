import React from "react"
import yellowBlob from "../images/yellow-blob.png"
import blueBlob from "../images/blue-blob.png"
import {decode} from "html-entities";
import Question from "./Question"

export default function Quiz(props){
    let c=1
    let optionArray
    function Questions(q){
        optionArray = q.optionsArray.map( x => decode(x))
        return (
        <Question 
                question= {decode(q.question)}
                answer={decode(q.correct_answer)} 
                checkAnswer= {props.checkAnswer} 
                handleScore={props.handleScore}
                optionArray={optionArray}
                option={"question"+ (c++)} 
        />)}
    const qArrayElements = props.questionsData.map(Questions)

    return ( 
    <div>
        <img className='yellowBlobQuiz' src={yellowBlob} />
        <img className='blueBlobQuiz' src={blueBlob} />
        {qArrayElements}
    </div>
    )
}