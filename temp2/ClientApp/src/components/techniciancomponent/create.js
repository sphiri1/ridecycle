import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class TechnicianCreate extends Component {
    static displayName = TechnicianCreate.name;

    render() {

        return (
            <div style={{ height: "100vh" }}>
                <div className="wrapper" style={{ height: "100vh" }}></div>
                <div className="create-wrapper" style={{ position: "absolute" }}>
                    <div className="overlay">

                        <div className="info">
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
                                <form style={{ paddingTop: "0px" }} onSubmit={this.handleSubmit} method="POST" action="/api/add-technicians">
                                    <div className="item">
                                        <fieldset>
                                            <label>
                                                <input name="firstname" className="create-account-form" placeholder="First Name" required />
           &nbsp; &nbsp;
         </label>
                                        </fieldset>

                                        <fieldset >
                                            <label>
                                                <input name="lastname" className="create-account-form" placeholder="Last Name" required />
                                            </label>
                                        </fieldset>
                                    </div>

                                    <div className="item">
                                        <fieldset>
                                            <label>
                                                <input name="companyname" className="create-account-form" placeholder="Company Name" />
           &nbsp; &nbsp;
         </label>
                                        </fieldset>

                                        <fieldset>
                                            <label>
                                                <input type="email" className="create-account-form" name="emailaddress" placeholder="Email Address" required />
                                            </label>
                                        </fieldset>
                                    </div>

                                    <div className="item">
                                        <fieldset>
                                            <label>
                                                <input type="tel" className="create-account-form" name="phonenumber" placeholder="Phone Number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
            &nbsp; &nbsp;
           </label>
                                        </fieldset>

                                        <fieldset>
                                            <label>
                                                <input type="url" name="companywebsite" className="create-account-form" placeholder="Company Website" />
                                            </label>
                                        </fieldset>
                                    </div>

                                    <div className="item">
                                        <fieldset>
                                            <label>
                                                <input type="text" className="create-account-form" name="streetaddress" placeholder="Street Address" required />
           &nbsp; &nbsp;
         </label>
                                        </fieldset>

                                        <fieldset>
                                            <label>
                                                <input type="text" className="create-account-form" name="city" placeholder="City" required />
                                            </label>
                                        </fieldset>
                                    </div>

                                    <div className="item">
                                        <fieldset>
                                            <label>
                                                <input type="text" className="create-account-form" name="province" placeholder="Province" required />
           &nbsp; &nbsp;
         </label>
                                        </fieldset>

                                        <fieldset>
                                            <label>
                                                <input type="text" className="create-account-form" name="postalcode" placeholder="Postal Code" pattern="[A-Za-z]{1}[0-9]{1}[A-Za-z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}" required />
                                            </label>
                                        </fieldset>
                                    </div>

                                    <div className="item">
                                        <fieldset>
                                            <label>
                                                <input type="number" className="create-account-form" name="yearsofexp" placeholder="Years Of Experience / Open For" required />
           &nbsp; &nbsp;
           </label>
                                        </fieldset>

                                        <fieldset>
                                            <label>
                                                <input type="password" className="create-account-form" name="passwordhash" placeholder="Password" required />
                                            </label>
                                        </fieldset>
                                    </div>

                                    <div className="item" style={{
                                        marginTop: "10px",
                                        marginBottom: "0px"
                                    }}>
                                        <p style={{ fontSize: "0.7rem", color: "rgb(255 255 255 / 92%);" }}>
                                            <input  type="checkbox" className="terms-conditions" name="terms-conditions" required />
                &nbsp;  I agree to the <a style={{ color: "#b2eadf" }} href="https://www.ridecycle.ca/policies/terms-of-service">Terms Of Service</a>
                                        </p>

                                        <p style={{ fontSize: "0.7rem", color: "rgb(255 255 255 / 92%);" }}>
                                            &nbsp;&nbsp; &nbsp; Already have an account? <Link to="/technician-create-or-login" style={{
                                                color: "#b2eadf",
                                                fontSize: "0.7rem"
                                            }}>Click Here</Link>
                                        </p>
                                    </div>
                                    <div className="item submit button-overlay">
                                        {/* <button className="create" type="submit" >Create Account</button>*/}
                                        <Link  className="create" to="/add-services">Create Account </Link>
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



