import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MyContact from "../src/Components/MyContact"
import TextTutorial from './Components/TextTutorial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
 
   <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route path='/contact' element={<MyContact/>}/>
      <Route path='/text' element={<TextTutorial/>}/>
    </Routes>
    </BrowserRouter>
</React.StrictMode>
 
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
