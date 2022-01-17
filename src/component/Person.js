import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
    super(props)
     this.state={timer:0}                  }
    componentDidMount(){
        setInterval(()=>this.setState({timer:this.state.timer+1}), 1000);
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    render() {
        return (
            <div>

                <h1>Coordonnées personnelles:</h1>
                <h5>Nom et Prénom: {this.props.fullName}</h5>
                <h5>Adresse postale: {this.props.adresse}</h5>
                <h5>Profession: {this.props.profession}</h5>
                <p> {this.state.timer} </p>

            </div>
        )
    }
}
