import './App.css';
//import Admin from './components/Admin';
//import LoanTrackerYourAccount from './components/LoanTracker&YourAccount';
import Login from './components/Login'; 
//import UploadDocuments from './components/UploadDocuments';
//import PersonalDetails from './components/PersonalDetails';
//import LoanDetails from './components/LoanDetails';
//import IncomeDetails2 from './components/IncomeDetails2';
import Calculator from './components/Calculator';
import HomePage from './components/HomePage';
import Application from './components/Application';

import {BrowserRouter, Router, Routes, Route} from "react-router-dom";
//import { ReactDOM } from 'react-dom/client';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/Calculator' element={<Calculator />} />
          <Route exact path='/Application' element={<Application />} />
  <Route exact path='/Login' element={<Login />} />
        </Routes>
  </Router> 
  </BrowserRouter>  

   {/* <HomePage /> */}
     {/* <Calculator /> */}
     {/* <Application /> 
      <IncomeDetails2 />
      <LoanDetails />
  <PersonalDetails /> */}
      {/* <UploadDocuments />
       <Login />
      <Admin />
<LoanTrackerYourAccount /> */}
    </div>
  );
}

export default App;
