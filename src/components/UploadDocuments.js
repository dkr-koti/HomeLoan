import React, { Component } from "react";
import './UploadDocuments.css';

class UploadDocuments extends Component
{
  render()
  {
  return (
    <div className="fir">
      <div className="tx">
        Upload Documents
      </div>
      <fieldset>
        <table>
            <tr>
                <td>PAN Card</td>
                <td> <button type="file" className="btnn">Upload</button></td>
            </tr>
            <tr>
                <td>Voter ID</td>
                <td> <button type="file" className="btnn">Upload</button></td>
            </tr>
            <tr>
                <td>Salary Slip</td>
                <td> <button type="file" className="btnn">Upload</button></td>
            </tr>
            <tr>
                <td>LOA</td>
                <td> <button type="file" className="btnn">Upload</button></td>
            </tr>
            <tr>
                <td>PNOC from Builder</td>
                <td> <button type="file" className="btnn">Upload</button></td>
            </tr>
            <tr>
                <td>Agreement To Sale</td>
                <td> <button type="file" className="btnn">Upload</button></td>
            </tr>

        </table>
        <button onClick={'#'} className='sub' >Submit</button>
      </fieldset>
    </div>
  )
}
}

export default UploadDocuments;
