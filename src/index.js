import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import AddCandidets from './HR/AddCandidets';
import Orientation from './HR/Orientation';
import HrDashbord from './HR/HrDashbord';
import EmpDashboard from './EMP/EmpDashboard';
import OnBordingList from './HR/OnBordingList';
import Basicinfo from './EMP/Basicinfo';
import Declaresubmit from './EMP/Declare&submit';
import Documentsubmission from './EMP/Documentsubmission';
import NewEmployee from './EMP/NewEmployee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       
       <Routes>
     
        <Route path='/AddCandidets' element={<AddCandidets/>}/>
        <Route path='/' element={<HrDashbord/>}/>
        <Route path='/Orientation' element={<Orientation/>}/>
        <Route path='/EmpDashboard' element={<EmpDashboard/>}/>
        <Route path='/OnBordingList' element={<OnBordingList/>}/>
        <Route path='/Basicinfo' element={<Basicinfo/>}></Route>
        <Route path='/Declaresubmit' element={<Declaresubmit/>}></Route>
        <Route path='/Documentsubmission' element={<Documentsubmission/>}></Route>
        <Route path='/NewEmployee' element={<NewEmployee/>}></Route>
        
        

       </Routes>
      
    </BrowserRouter>

  </React.StrictMode>
);


reportWebVitals();
