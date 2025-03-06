// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom"
import Addbook from './Pages/Addbook';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add-book' element={<Addbook/>}/>
     </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
