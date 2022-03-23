import React from 'react'
import Table from './Table'
// import Table from './Table';
import Form from './Form';



class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    /* TODO - Create state object for storing favLinks */
    this.state = {
      favLink:[]
    }
  }
  

  handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */  
            console.log(index)
            var array = [...this.state.favLink];
            array.splice(index, 1);
            this.setState({favLink:array})
  }

  handleSubmit = (favLink) => {
    let newLink = {name:favLink.name,URL:("https://" + favLink.URL)}
    this.setState({
      favLink:[...this.state.favLink, newLink]
    });
    console.log(favLink)

    //alert("Hey!!")
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*TODO - Add Table Component */}
         <Table linkData={this.state.favLink}  removeLink={this.handleRemove}/>
        <br />

        <h3>Add New</h3>
        {/*TODO - Add Form Component */}
        <Form  handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default LinkContainer
