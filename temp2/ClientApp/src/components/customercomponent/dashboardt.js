import React, { Component } from 'react';
import { FaUser } from 'react-icons/fa';

export class CustomerDash extends Component {
    static displayName = CustomerDash.name;

    render() {
        return (
            <div>
                <div className="wrapper" style={{ height: "100vh" }}></div>
                <div className="dash-wrapper">
                    <div className="sidenav">
                        {/*make into dropdown for settings and logout option*/}   <p className="customer-name" style={{ textAlign: "left", color: "aliceblue", paddingTop: "5vh" }}> <FaUser /> &nbsp;&nbsp;John Doe</p>
                        <div className="sidenavlinks" style={{ textAlign: "initial" }}>
                            <p>Dashboard</p>

                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}
