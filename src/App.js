import React,{Component, Fragment} from 'react';
import Inventory from './containers/inventory/Inventory';
import {Route, Switch, Redirect} from 'react-router-dom';
import ProjectLayout from './components/layout/InvetoryAppLayout';
import Dashboard from './containers/dashboard/Dashboard'
import PageNotFound from './hoc/Pagenotfound';

class App extends Component {
  render(){
    return(
      <Fragment>
        
       
          <Switch>
          <ProjectLayout >
          <Route path='/' exact render={()=>{return <Redirect  to="/dashboard"/> }} /> 
            <Route path="/dashboard"  exact component={Dashboard} />
            <Route path="/inventory" exact component={Inventory} />
            
            <Route path="/pagenotfound" exact componet={PageNotFound}/> 
            <Route path='*' exact render={()=>{return <Redirect to="/pagenotfound"/> }} />
           
            </ProjectLayout>

           
            
          </Switch> 
         
          

         
         
       
      </Fragment>
    );

    
  }
}

export default App;
