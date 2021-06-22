import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {Container} from 'react-bootstrap';
// import SelectedBeast  from './SelectedBeast ';
// import Beast from './Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     allData: Beast,
  //     show: false,
  //     selectedProps: {}
     
  //   }
  // };

  // displayAsModal = name => {
  //   const selectedProps = Beast.find(beast => beast.title === name);
  //   this.setState({
  //     selectedProps,
  //     show: true
  //   });
  // }
  // handleModal = (prevProps) => {
  //   this.setState({
  //     show: false,
  //     // selectedProps: prevProps
  //   })
  // }

  // updateAllData = (allData) => {
  //   this.setState({
  //     allData
  //   });
  // }
  render() {
    return (
      <div>
        <Header/>
        <Container>
        <Main/>
        </Container>
        <Footer/>
      </div>
    )
  }
}

export default App
