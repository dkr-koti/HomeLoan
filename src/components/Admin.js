import React, { Component } from "react";
import './Admin.css';

class Admin extends Component
{
    render()
    {
    return(
        <div className="mmm">
            <div className="h66">Admin: </div>  <br/> 
            <table className="tbb">
                 <tr className="trr">
                    <td className="tdd">Username</td>
                    <td className="tdd">  <input type={'text'} className='inn' />   </td>
                 </tr>
                 <tr className="trr">
                    <td className="tdd">Password</td>
                    <td className="tdd">  <input type={'password'} className='inn' />   </td>
                 </tr>
            </table>
            <button className="fpp" onClick={'#'} >Forgot Password</button>
            <button className="lgg" onClick={'#'} >Login</button> <br/> <br/>
        </div>
    )
    }
}
export default Admin;