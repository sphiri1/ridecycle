import { extend } from 'jquery';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CustomerCreate extends Component{
    static displayName = CustomerCreate.name;

    render(){
        return (
            <div style={{ height: "100vh" }}>
                <div className="wrapper" style={{ height: "100vh" }}></div>
                <div className="create-wrapper" style={{ position: "absolute" }}>
                    <div className="overlay">

                        <div className="info" style={{paddingTop:"2%"}}>
                            <div className="info-overlay">
                                <p style={{
                                    fontSize: "1.3rem",
                                    color: "rgb(255 255 255 / 92%);",
                                    paddingTop: "20px",
                                    letterSpacing: "1px",
                                    textAlign: "left",
                                    paddingLeft: "5.5vh"
                                }}>
                                   Register  </p>
                                <form style={{ paddingTop: "0px" }} method="POST" action="/api/add-customers">
                                    <div className="item">
                                        <fieldset className="forms">
                                            <label>
                                                <input name="firstname" className="create-account-form" placeholder="First Name" required />
           &nbsp; &nbsp;
         </label>
                                        </fieldset>

                                        <fieldset className="forms" >
                                            <label>
                                                <input name="lastname" className="create-account-form" placeholder="Last Name" required />
                                            </label>
                                        </fieldset>
                                    </div>

                                    <div className="item">
                                        <fieldset className="forms">
                                            <label>
                                                <input type="email" className="create-account-form" name="emailaddress" placeholder="Email Address" required />
           &nbsp; &nbsp;
         </label>
                                        </fieldset>

                                        <fieldset className="forms">
                                            <label>
                                                <input type="tel" className="create-account-form" name="phonenumber" placeholder="Phone Number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
                                            </label>
                                        </fieldset>
                                    </div>

                                    <div className="item">
                                        <fieldset className="forms">
                                            <label>
                                                <input type="text" className="create-account-form" name="streetaddress" placeholder="Street Address" required />
           &nbsp; &nbsp;
         </label>
                                        </fieldset>

                                        <fieldset className="forms">
                                            <label>
                                                <input type="text" className="create-account-form" name="city" placeholder="City" required />
                                            </label>
                                        </fieldset>
                                    </div>

                                    <div className="item">
                                        <fieldset className="forms">
                                            <label>
                                                <input type="text" className="create-account-form" name="province" placeholder="Province" required />
           &nbsp; &nbsp;
         </label>
                                        </fieldset>

                                        <fieldset className="forms">
                                            <label>
                                                <input type="text" className="create-account-form" name="postalcode" placeholder="Postal Code" pattern="[A-Za-z]{1}[0-9]{1}[A-Za-z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}" required />
                                            </label>
                                        </fieldset>
                                    </div>

                                    <div className="item">
                                        <fieldset className="forms">
                                            <label>
                                                <select id="bicyclemodel" name="bicyclemodel" style={{ width: "35vh", height: "5.5vh" }} className="create-account-form" placeholder="Bicycle Model" required>
                                                    <option value="" disabled selected hidden >Bicycle Model</option>
                                                    <option className="Models" id="bike-choice" value="Model D4">Model D4</option>
                                                    <option className="Models" id="bike-choice-2" value="Model G56">Model G56</option>
                                                </select>
           &nbsp; &nbsp;
           </label>
                                        </fieldset>

                                        <fieldset className="forms">
                                            <label>
                                                <input type="password" className="create-account-form" name="passwordhash" placeholder="Password" required />
                                            </label>
                                        </fieldset>
                                    </div>

                                    <div className="item" style={{
                                        marginTop: "0px",
                                        marginBottom: "0px"
                                    }}>
                                        <p style={{ fontSize: "0.7rem", color: "rgb(255 255 255 / 92%);" }}>
                                            <input type="checkbox" className="terms-conditions" name="terms-conditions" required />
                &nbsp;  I agree to the <a style={{ color: "#b2eadf" }} href="https://www.ridecycle.ca/policies/terms-of-service">Terms Of Service
                </a>
                &nbsp;&nbsp; &nbsp; Already have an account? <Link to="/customer-create-or-login" style={{
                                                color: "#b2eadf",
                                                fontSize: "0.7rem"
                                            }}>Click Here</Link>
                                        </p>

                                    </div>
                                    <div className="item submit button-overlay">
                                        <Link className="create" to="/customer-dashboard">Create Account</Link>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        )
    }
}