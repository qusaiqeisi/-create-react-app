import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App
