import React,{Component} from 'react';
import Inventory from './containers/inventory/Inventory';
import {Route, Switch, Redirect} from 'react-router-dom';
import ProjectLayout from './components/layout/InvetoryAppLayout';
import Dashboard from './containers/dashboard/Dashboard'
import PageNotFound from './hoc/Pagenotfound';

class App extends Component {
  render(){
    return(
      
        
       
       
          <ProjectLayout >
          <Switch>
            <Route path="/dashboard"  exact component={Dashboard} />
            <Route path="/inventory" exact component={Inventory} />
            
            <Route path="/pagenotfound" exact component={PageNotFound}/> 
            <Route path='/' exact render={()=>{return <Redirect  to="/dashboard"/> }} /> 

            <Route path='*' exact render={()=>{
              
              return <Redirect to="/pagenotfound"/> }} />
            </Switch> 
            </ProjectLayout>
            
           
            
        
         
          

         
         
       
     
    );

    
  }
}

export default App;
