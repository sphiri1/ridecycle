import React, { Component } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'

export class CustomerLoginCreate extends Component {
    static displayName = CustomerLoginCreate.name;


    render() {
        return (
            <div>
            <div className="wrapper" style={{ paddingTop: "20vh",height:"100vh" }}></div>
                <div className="choose-account-layout">

                    <div className="choose-account-wrapper" >

                        <div className="overlay">
                            <div className="login">

                                <div className="create-login-overlay">
                                    <div className="center-overlay" style={{ height: "85%" }} >

                                        <p style={{
                                            fontSize: "1.2rem",
                                            color: "white",
                                            letterSpacing: "0.1rem",
                                            marginBottom: "2rem"
                                        }}>
                                            Log In</p>


                                        <form style={{ paddingTop: "0px" }} onSubmit={this.handleSubmit}>

                                            <fieldset style={{ padding: "10px" }}>
                                                <label>
                                                    <input type="text" name="name" className="login-account-form" placeholder="User Name" required />

                                                </label>
                                            </fieldset>

                                            <fieldset style={{ padding: "10px" }} >
                                                <label>
                                                    <input type="password" name="name" className="login-account-form" placeholder="Password" required />
                                                </label>
                                            </fieldset>
                                        </form>

                                        <div className="links">

                                            <div className="register">
                                                <Link className="registerlink" to="/customer-create">Register</Link>
                                            </div>

                                        <div className="password">
                                            <Link className="forgot-password" to="www.google.com">Forgot Password?</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="button-overlay">
                                        {/*} <Button variant="create-account-button" onClick={() => history.push('/customer-create')}>Create / Log in</Button>*/}
                                        <Link className="create-account-button" to="/customer-dashboard">Log in</Link>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

