import React, { Component } from "react";
import './LoanDetails.css';

class LoanDetails extends Component
{
    render()
    {
    return(
        <div className="s1">
            <table className="tab">
                <caption className="cap">Loan Details</caption>
                <tr>
                    <td>Max Loan Amount Grantable</td>
                    <td>  <input type={'number'} />    </td>
                </tr>
                <tr>
                    <td>Interest Rate</td>
                    <td>  <input type={'number'} />    </td>
                </tr>
                <tr>
                    <td> Tenure</td>
                    <td>  <input type={'number'} />    </td>
                </tr>
                <tr>
                    <td>Loan Amount</td>
                    <td>  <input type={'number'} />    </td>
                </tr>
            </table>
            <button onClick={'#'} className='but' >Submit</button> <br/> <br/>
            <button onClick={'#'} className='nex' >Next</button>
        </div>
    )
    }
}
export default LoanDetails;