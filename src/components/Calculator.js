import React from "react";
import './Calculator.css'

const Calculator = () =>
{
    return(
        <div>
            <br/> <br/>
            <button className="h1" onClick={'#'} >calculator</button> <br/> <br/>
            <div className="man">
                    <fieldset className="fi">
                    <button className="b1" onClick={'#'} >Eligibility Calculator</button>
                    <br/>
                    Monthly <br/> Income    <input type={'text'} className={'n1'} /> <br/> <br/>
                    ROI <input type={'text'} className={'n2'} />  <br/> <br/>
                    Calculate  <button onClick={'#'} className={'c1'} >Calculate</button>  <br/> <br/>
                    Eligibility  <input type={'text'} className={'n3'} />
                    </fieldset>

                    <fieldset className="f2">
                    <button className="b2" onClick={'#'} >EMI Calculator</button>
                    <br/>
                    Loan    <input type={'text'} className={'n1'} /> <br/> <br/>
                    Tenure <input type={'text'} className={'n2'} />  <br/> <br/>
                    ROI<input type={'text'} className={'n4'} />  <br/> <br/>
                    Calculate  <button onClick={'#'} className={'c1'} >Calculate</button>  <br/> <br/>
                    EMI  <input type={'text'} className={'n3'} />
                    </fieldset>
            </div>
            
        </div>
    )
}
export default Calculator;