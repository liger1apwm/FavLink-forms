import React, { Component } from 'react'
import '../styles/ButtonStyle.css'
class Form extends Component {
  constructor(props) {
    super(props)

    /*
            TODO - set initial state for link name and URL 
        */
            this.state = {
              name:'',
              URL:''
  
          }
  }

  handleNameChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
            this.setState({
              name: event.target.value
          })
  }
  handleUrlChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
            this.setState({
              URL: event.target.value
          })
  }

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()
    this.props.handleSubmit(this.state)
    //console.log(this.state)

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="form-style">
        <label>name</label>
        <input type="text" onChange={this.handleNameChange} style={{width: "500px",height:"25px"}}/>
        <label>URL (use www.yoursite.com format)</label>
        <input type="text" onChange={this.handleUrlChange}  style={{width: "500px",height:"25px"}}/>
        
        <input className='bubbly-button' type="submit" value="Submit"/>
      </form>
    )
  }
}

export default Form
