import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { TechnicianLoginCreate } from './components/techniciancomponent/loginorcreate';
import { CustomerLoginCreate } from './components/customercomponent/loginorcreate';
import { TechnicianCreate } from './components/techniciancomponent/create';
import { CustomerCreate } from './components/customercomponent/create';
import { AddServices } from './components/techniciancomponent/addservices';
import { CustomerDash } from './components/customercomponent/dashboardt';
import { SideNavigation } from './components/SideNav';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path="/technician-create-or-login" component={TechnicianLoginCreate} />
        <Route path="/customer-create-or-login" component={CustomerLoginCreate} />
        <Route path="/technician-create" component={TechnicianCreate} />
            <Route path="/customer-create" component={CustomerCreate} />
            <Route path="/add-services" component={AddServices} />
            <Route path="/customer-dashboard" component={CustomerDash} />
            <Route path="/sidebar" component={SideNavigation} />
        </Layout>
       
    );
  }
}
