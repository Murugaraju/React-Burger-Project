import React,{Component, Fragment} from 'react';
import Inventory from './containers/inventory/Inventory';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
class App extends Component {
  render(){
    return(
      <Fragment>
        <Header/>
        <Inventory/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
