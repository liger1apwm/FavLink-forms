import React, { Component } from 'react'

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
      <form onSubmit={this.onFormSubmit}>
        <label>name</label>
        <input type="text" onChange={this.handleNameChange}/>
        <label>URL</label>
        <input type="text" onChange={this.handleUrlChange}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default Form
