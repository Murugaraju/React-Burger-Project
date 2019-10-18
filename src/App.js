import React,{Component, Fragment} from 'react';
import Inventory from './containers/inventory/Inventory';

import ProjectLayout from './components/layout/InvetoryAppLayout';
class App extends Component {
  render(){
    return(
      <Fragment>
        
        <ProjectLayout>
          <Inventory />
        </ProjectLayout>
       
      </Fragment>
    );

    
  }
}

export default App;
