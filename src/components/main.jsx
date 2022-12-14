import React from "react";
import { Route, Routes } from 'react-router-dom';
import Startpage from './startpage';
import Questions from './questions';
import Endgame from './endgame';


const Main = (props) => {
    return ( 

        <React.Fragment>
            <Routes>
                
                <Route path="/"  element={<Startpage {...props}/>}/> 
            <Route path="/questions" element={<Questions {...props} />} />
            <Route path="/endgame" element={<Endgame {...props} />} />
            
            </Routes>
        </React.Fragment>
     );
}
 
export default Main;