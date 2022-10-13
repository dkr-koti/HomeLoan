import React, { Component } from "react";
import './IncomeDetails2.css';

class IncomeDetails2 extends Component
{
    render()
    {
    return(
        <div className="m">
            <table className="t1">
                <caption className="c1">Income Details</caption>
                <tr>
                    <td>Type of Employment: </td>
                    <td>   <input placeholder="Salaried or Self Employed" type={'text'} />   </td>
                </tr>
                <tr>
                    <td>Retirement Age: </td>
                    <td>  <input type={'number'} />    </td>
                </tr>
                <tr>
                    <td>Organization Type: </td>
                    <td>  <input type={'text'} />   </td>
                </tr>
                <tr>
                    <td>Employer Name: </td>
                    <td> <input type={'text'} />  </td> 
                </tr>
            </table>
            <button className="b5" onClick={'#'} >Submit</button>
        </div>
    )
    }
}
export default IncomeDetails2;