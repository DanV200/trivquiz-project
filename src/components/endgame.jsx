import './style.css' ; 
const Endgame = (props) => {
  
    return ( 

            <div className='mainQ'>
                <div className='questionsNDanswers'>
                <div id='endstring' >
                     <h2>You scored {props.score} out of {props.questions.length}</h2>
                     <h3 style={{boxShadow: '0px 5px 5px 5px', color: props.score<10? 'red':'green'}}>{props.score<10 ? 'Loser!':'Congrats!'}</h3>
                </div>
                </div>
            </div>
     );
}
 
export default Endgame;