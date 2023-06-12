import React, { Component } from "react"

export default class Color extends Component{
state={color:"red"}
inputRef=React.createRef()
change=()=>{
  console.log(this.inputRef.current.value)
  this.setState({color:this.state.color =this.inputRef.current.value})

}


  render(){
    return(
      <div style={{color:this.state.color}}>
        <h2>your color is: {this.state.color} </h2>
        <select className="p-4 m-4" onChange={this.change} ref={this.inputRef}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="yellow">yellow</option>
          
          <option value="pink">pink</option>
        </select>
      </div>
    )
  }
}