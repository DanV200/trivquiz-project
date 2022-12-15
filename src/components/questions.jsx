import './style.css' ; 
import React, { useState } from "react";
import { Link} from 'react-router-dom';


const Questions = (props) => {
  const { questions,increseScore,score} = props;
  

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQonclick = (isCorrect) => {
    if (isCorrect) 
    increseScore()
    
    const nextQuestion = currentQuestion + 1; //בכל לחיצה על אחד מכפתורי התשובות הפונקציה מעבירה אותילשאלה הבאה
    setCurrentQuestion(nextQuestion);
    if (nextQuestion < questions.length) {        //בודק שאנחנו לא עוברים את המספר המירבי של השאלות

      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const [showScore, setShowScore] = useState(false);
  
  
  return (
   
      <div >
        
         
        {showScore ? (
            
                <div className="mainQ">
                    <div className='questionsNDanswers'>
                    <Link to="/endgame">

            <button id="endbtn">End Game</button>
            </Link>
            </div >
            </div>
            
            )  : (
           
        <div className='mainQ'>
        <div className='questionsNDanswers'>
        <div id='questionStyle' className="question-text">
          { questions[currentQuestion].questionText}
          
        </div>

        <div className="answer-section">
           
          {questions[currentQuestion].answerOptions.sort(()=> Math.random()-0.5).map((answerOption) => ( 
            <button onClick={() => nextQonclick(answerOption.isCorrect)}>
              {answerOption.answerText}
            </button>
            
            
           ) )}
        </div>
        </div>
        </div>
       )}
       
      </div>
      
   
  );
};

export default Questions;
