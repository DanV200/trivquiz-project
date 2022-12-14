
import React, { useState } from "react";
import Endgame from "./endgame";

const Questions = (props) => {
  const { questions } = props;

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQonclick = (isCorrect) => {
    if (isCorrect) 
    setScore(score + 1);
    const nextQuestion = currentQuestion + 1; //בכל לחיצה על אחד מכפתורי התשובות הפונקציה מעבירה אותילשאלה הבאה
    setCurrentQuestion(nextQuestion);
    if (nextQuestion < questions.length) {        //בודק שאנחנו לא עוברים את המספר המירבי של השאלות

      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  
  return (
   
      <div >
        
         
        {showScore ? (
            <div className="score-section"> You scored {score} out of {questions.length}
            </div>)  : (
            <>
        

        <div className="question-text">
          { questions[currentQuestion].questionText}
          
        </div>

        <div className="answer-section">
           
          {questions[currentQuestion].answerOptions.sort(()=> Math.random()-0.5).map((answerOption) => ( 
            <button onClick={() => nextQonclick(answerOption.isCorrect)}>
              {answerOption.answerText}
            </button>
            
            
           ) )}
        </div>
        </>
       )}
       
      </div>
      
   
  );
};

export default Questions;
