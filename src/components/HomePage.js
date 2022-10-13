import React from 'react'
import './HomePage.css';

import {Link} from "react-router-dom";

const HomePage = () => 
{
  
    return (
    <div className='whole'>
      <img src='https://images.moneycontrol.com/static-mcnews/2017/03/HOME_LOAN_1280x720.png?impolicy=website&width=1600&height=900' width="100px" height="80px" alt='HomeLoan Logo'></img>
      <br /> 
      <Link to='/'><button>Home  </button> </Link>
      <Link to='/'><button >About<br/> Us</button> </Link>
      <Link to="/Calculator" ><button >Calculator</button> </Link>
      <Link to='/Application'><button >Application</button> </Link>
      <Link to='/Login'><button > Login</button> </Link>
    <Link to='/'><button>FAQ</button></Link>

      {/*  <button >Home  </button> 
      <button >About<br/> Us</button>
      <button >Calculator</button>
      <button >Application</button>
      <button > Login</button>
  <button>FAQ</button>   */}

      <br /> <br/>

        <fieldset className='bgimg'> <br/> <br/> <br/> <b> Home Loan </b> <br/>
          <button className='ba' onClick={'#'} >Apply Now</button>
           <br/>
        </fieldset>

      <div className='b3'>
      <button className='st' onClick={'#'} >Features</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <button className='st' onClick={'#'} > Calculator</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <button className='st' onClick={'#'} >Documents</button>
      </div>
    </div>
  )
    
}

export default HomePage;
