import React from "react"
import "../components/Question.css"

  function Question(props){
    let option=props.option
    let optionsArray=props.optionArray
    const [selectedOption, setSelectedOption] = React.useState({[option]:""})
    const [bstyle, setBStyle] = React.useState(false);
    let style,style2,style3
    style={backgroundColor:"#D6DBF5"}
    style2={backgroundColor:"#94D7A2"}
    style3={backgroundColor:""}
    if(props.checkAnswer){
        style={backgroundColor: bstyle? "#F8BCBC":"#94D7A2"}
    }
    React.useEffect(()=>{
        if(selectedOption[option]===props.answer){
            props.handleScore()
            setBStyle(false)
        }
        else{
            if(props.checkAnswer){
                setBStyle(true)
            }
        }

    },[props.checkAnswer])
    
    return(
    <div className ="quiz-questions"> 
        <h4 className="question-text">{props.question}</h4>
        <div>
            {optionsArray.map(opt => 
                <button className="option"
                onClick= {()=> setSelectedOption({[option]:opt})}
                style={selectedOption[option] === opt? style: 
                    (props.checkAnswer && opt===props.answer? style2:style3)}>
                {opt}
                </button>)
            }
        </div>
        <hr/>
    </div>)
}

export default Question;