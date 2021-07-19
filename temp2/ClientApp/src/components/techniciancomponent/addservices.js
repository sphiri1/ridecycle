import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AddServices extends Component {
    static displayName = AddServices.name;

    render() {
        return (
            <div>
                <div className="wrapper" style={{ height: "100vh" }}></div>
                <div className="create-wrapper" style={{ position: "absolute" }}>
                    <div className="overlay">

                        <div className="info">
                            <div className="info-overlay2">
                                <p style={{
                                    fontSize: "1.3rem",
                                    color: "rgb(255 255 255 / 92%);",
                                    paddingTop: "20px",
                                    letterSpacing: "1px",
                                    textAlign: "center",
                                    paddingLeft: "5.5vh"
                                }}>
                                    More Information  </p>

                                <div className="info-table" style={{padding:"0px 50px"}}>
                                <div className="item2">
                                <p style={{ textAlign:"left" }}>Hours of operation:</p>
                                <table id="hours-of-operation">
                                    <thread>
                                        <tr>
                                            <th>Sunday</th>
                                            <th>Monday</th>
                                            <th>Tuesday</th>
                                            <th>Wednesday</th>
                                            <th>Thursday</th>
                                            <th>Friday</th>
                                            <th>Saturday</th>
                                        </tr>
                                    </thread>
                                    <tbody>
                                        <tr>
                                          
                                            </tr>
                                    </tbody>
                                    </table >
                                </div>

                                <div className="item2">
                                    <p style={{ textAlign: "left" }}>Services provided:</p>
                                    <table id="hours-of-operation">
                                        <thread>
                                            <tr>
                                                <th>Service</th>
                                                <th>Fixed Price</th>
                                                <th>Description</th>
                                                <th>Available</th>
                                                
                                            </tr>
                                        </thread>
                                        <tbody>
                                            <tr>

                                            </tr>
                                        </tbody>
                                    </table >
                                </div>

                                <div className="item2">
                                    <p style={{ textAlign: "left" }}>Short description of business: &nbsp; &nbsp;</p>
                                    <textarea style={{width:"100%"}}></textarea>
                                    
                                </div>
                                </div>
                                <div className="item submit button-overlay">
                                    <Link to="/sidebar" className="create" type="submit" >Continue</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}