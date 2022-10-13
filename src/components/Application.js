import React, { Component } from "react";
import './Application.css';

class Application extends Component
{
    render()
    {
    return(
        <div className="main">
            <button onClick={'#'} className='bb' >Application</button> <br/> <br/>
            <table className="tt" >
                <caption className="cc">Income Details</caption>
                <tr>
                    <td className="rr">Property Location: </td>
                    <td>   <input type={'text'} />       </td>
                    
                </tr>
                <tr>
                    <td className="rr">Property Name: </td>
                    <td>  <input type={'text'} />       </td>
                </tr>
                <tr>
                    <td className="rr">Estimsted Amount: </td>
                    <td>    <input type={'text'} />      </td>
                </tr>
                <tr >
                    <td colSpan={'2'}> <button onClick={'#'} className='bc'>Submit</button> </td>
                </tr>
            </table> <br/>
            <button className="nx" onClick={'#'}>Next</button>
        </div>
    )
    }
}
export default Application;