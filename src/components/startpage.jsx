
import { React } from 'react';
import { Link} from 'react-router-dom';
import image from './images/trivia4.jpg';

import './style.css' ; 

const Startpage = (props) => {

    return ( 
        
        
        
         <div className='main' >
           
          <div className='aaa'>
            <Link to='/questions'>
            <button className='startdiv' onClick ={()=>props.randomQ()} > Start Game</button>
            </Link>
            </div>
           
            </div>
       
        
        
   
     );
}
 
export default Startpage;