import React, { Component } from "react";
import './PersonalDetails.css';

class PersonalDetails extends Component
{
    render()
    {
    return(
        <div>
            <button className="btt" onClick={'#'} >Personal Details</button> <br/> <br/>
            <table className="tbb">
                <tr>
                    <td>First Name</td>
                    <td><input type={'text'} /></td>
                </tr>
                <tr>
                    <td>Middle Name</td>
                    <td><input type={'text'} /></td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td><input type={'text'} /></td>
                </tr>
                <tr>
                    <td>Email ID: </td>
                    <td><input type={'email'} /></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type={'password'} /></td>
                </tr>
                <tr>
                    <td>Confirm Password</td>
                    <td><input type={'password'} /></td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td><input type={'tel'} /></td>
                </tr>
                <tr>
                    <td>DOB: </td>
                    <td><input type={'date'} /></td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td><input type={'text'} /></td>
                </tr>
                <tr>
                    <td>Nationality: </td>
                    <td><input type={'text'} /></td>
                </tr>
                <tr>
                    <td>Aadhar no: </td>
                    <td><input type={'number'} /></td>
                </tr>
                <tr>
                    <td>PAN no: </td>
                    <td><input type={'number'} /></td>
                </tr>
            </table> <br/>
            <button className="btn" onClick={'#'} >Submit</button> <br/> <br/>
            <button className="next" onClick={'#'} >Next</button>
        </div>
    )
    }
}
export default PersonalDetails;