import React, { Component } from 'react'
import './App.css'; 
import Heading from './Components/Heading'

export default class App extends Component {
constructor(props){
  super(props)
  this.state = {
    name: 'anon'
  }
}

  render() {
    return (
      <>
      <div>App</div>
      <Heading you = {this.state.name}/> 
      </>
    )
  }
}



