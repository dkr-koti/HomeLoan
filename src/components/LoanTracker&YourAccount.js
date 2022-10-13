import React, { Component } from "react";
import './LoanTracker&YourAccount.css';

class LoanTrackerYourAccount extends Component
{
    render()
    {
    return(
        <div className="first"> <fieldset className="fff">
            <div className="second">
                Loan Tracker
            </div>  <br/>
            <table className="third">
            <tr className="four">
                <td className="five">Application Number</td>
                <td className="five"><input className="six" type={'number'} /> </td>
            </tr>
            <tr className="four">
                <td className="five">Mobile Number</td>
                <td className="five"><input className="six" type={'tel'} /> </td>
            </tr>
            </table>  <br/>
            <button onClick={'#'} className='seven'>Track</button> </fieldset>

            
            <div className="a">Your Account</div><fieldset className="ffff">
            <table className="b">
                <tr className="c">
                    <td className="d">Account Number</td>
                    <td className="d">  <input className="e" type={'number'} /> </td>
                </tr>
                <tr className="c">
                    <td className="d">Balance</td>
                    <td className="d">  <input className="e" type={'number'} /> </td>
                </tr>
            </table>
            <button className="f" onClick={'#'} >Check</button> </fieldset>
        </div>
    )
    }
}
export default LoanTrackerYourAccount;