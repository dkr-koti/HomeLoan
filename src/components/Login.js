import React, { Component } from "react";
import './Login.css';

class Login extends Component
{
    render()
    {
    return(
        <div className="mm">
            <div className="h6">Login</div>  <br/> 
            <table>
                 <tr>
                    <td>Email ID</td>
                    <td>  <input type={'text'}/>   </td>
                 </tr>
                 <tr>
                    <td>Password</td>
                    <td>  <input type={'password'} />   </td>
                 </tr>
            </table>
            <button className="fp" onClick={'#'} >Forgot Password</button>
            <button className="lg" onClick={'#'} >Login</button> <br/> <br/>
            <button className="subm" onClick={'#'} >Submit</button>
        </div>
    )
    }
}
export default Login;