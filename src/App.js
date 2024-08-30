import React from "react"
import Home from "./components/Home"
import Quiz from "./components/Quiz"

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) { 
      var j = Math.floor(Math.random() * (i + 1));        
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
     
  return array;
}

function App() {
  const [homePage,setHomePage] = React.useState(true)
  const [formData,setFormData]= React.useState({category:"",difficulty:"",questions:""})
  const [playAgain,setPlayAgain] = React.useState(false)
  const [score, setScore ]= React.useState(0)
  // const [delay,setDelay] = React.useState(false)
  const [checkAnswer,setCheckAnswer]=React.useState(false)
  const [questionsData,setQuestionsData]= React.useState([])
  // const [delayTime,setDelayTime]= React.useState(12000)

  function handleCheckAnswer(){
    setCheckAnswer(true)
    setPlayAgain(true)
  }

  function handleScore(){
    setScore(prevScore => prevScore+1)
  }
    
  React.useEffect(()=>{
    fetch(`https://opentdb.com/api.php?amount=${formData.questions}&category=${formData.category}&difficulty=${formData.difficulty}&type=multiple`)
    .then(res => res.json())
    .then(data => {
    setQuestionsData(data.results.map(q=>{return {
      correct_answer: q.correct_answer,
      question: q.question,
      optionsArray: shuffleArray([...q.incorrect_answers,q.correct_answer])
      }}))
      })
  },[homePage])

  function handleClick(){
    setHomePage(prevMode => !prevMode)
  }

  function handleChange(event){
    const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
      })
  }

  function handlePlayAgain(){
    setHomePage(true)
    setScore(0)
    setPlayAgain(false)
    setFormData({})
    setCheckAnswer(false)
  }

  function delayContent(){
    return (
    <div>
      {!playAgain && <div className="check-answer-container">
        <button className="check-answer" onClick={handleCheckAnswer}>
          Check Answer
        </button>
        </div>
      }
      {checkAnswer && 
      <div className="score-play-again">
        <h4 className="score">Your Score : {score}/{formData.questions}</h4>
        <button className="play-again" onClick={handlePlayAgain}>Play Again</button>
      </div>
      }
    </div>
    )
  }

  return (
    homePage? 
      <Home 
        formData={formData}
        handleClick={handleClick} 
        handleChange={handleChange}
      />
    : 
    <div>
        {questionsData.length > 0 ? (
          <>
            <Quiz
              questionsData={questionsData}
              handleScore={handleScore}
              checkAnswer={checkAnswer}
            />
            {delayContent()}
          </>
        ) : (
          <div className="loading-container">
            <div className="loading"></div>
          </div>
        )}
      </div>
  );
}

export default App;
