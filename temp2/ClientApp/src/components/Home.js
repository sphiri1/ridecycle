import React, { Component } from 'react';
import { FaBicycle } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';
import { Link } from 'react-router-dom'


export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
          <div style={{ height: "100vh" }}>
              <div className="wrapper" style={{ height: "100vh" }}></div>
  <div className="choose-account-wrapper" >
    
    <div className="overlay">
      
                      {/* <p style={{fontSize: "1.3rem",
              paddingBottom:"10px",
              letterSpacing:"1px",
              color:"black"}}>
     
     Choose Account Type </p>*/}
      
      <div className="choices">
        
        <div className="account-overlay" style={{marginRight:"8px"}}>
          
          <div className="center-overlay">
      
          <p style={{fontSize:"1.2rem",
                     color:"rgb(255 255 255 / 92%);",
                 letterSpacing: "0.1rem",
                 marginBottom:"2rem"}}> 
          Customer Account</p>
          
          <h1 className="biker-account">
            
          <FaBicycle/>
          </h1>
          
          <p style={{fontSize:"1rem",
                     paddingTop: "20px", color:"rgb(255 255 255 / 92%);"}}>
            For our bicycle enthusiasts and customers</p>
          </div>
          
          <div className="button-overlay">
        {/*<Button variant="create-account-button" onClick={() => history.push('/customer-create')}>Create / Log in</Button>*/}
          <Link className="create-account-button" to="/customer-create-or-login">Create / Log in</Link>
          </div>
          
        </div>
        

        
         <div className="account-overlay" style={{marginLeft:"8px"}}>
          
         <div className="center-overlay" >
           
           <p style={{fontSize:"1.2rem",
                      color:"rgb(255 255 255 / 92%);",
                     letterSpacing: "0.1rem",
                     marginBottom:"2rem"}}> 
          Technician Account</p>
          
          <h1 className="technician-account">
                                                          
         <FaCogs/>
          </h1>
          
          <p style={{fontSize:"1rem",
                     paddingTop: "20px", color:"rgb(255 255 255 / 92%);"}}>
           For local and national tecnicians and bike stores</p>
        </div>
           
             <div className="button-overlay">
               
            {/*} <Button variant="create-account-button" onClick={() => history.push('/customer-create')}>Create / Log in</Button>*/}
            <Link className="create-account-button" to="/technician-create-or-login">Create / Log in</Link>
         
            
          </div>
           
        </div>
        
      </div>
      
    </div>
    
  </div>
</div>
    );
  }
}
