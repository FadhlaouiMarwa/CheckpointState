import React, { Component } from 'react'
import Person from './component/Person'

export default class App extends Component {
  constructor(props){
    super (props)
    this.state={show:true}

  }

  render() {
    return (
      <div>
        {this.state.show && <Person  fullName={"Fadhlaoui Marwa"} adresse={"Menzah 7"} profession={"Conseiller client"} />}
        <button onClick={()=>{this.setState({show:!this.state.show})}}>Show me</button>

      </div>
    )
  }
}
