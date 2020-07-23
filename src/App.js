import React, { Component } from "react";
import CardList from "./components/cardlist/CardList";
import SearchBox from "./components/searchbox/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField:''
    };
   
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }))
      .catch();
  }


  handleChange=(e)=>{
     this.setState({ searchField: e.target.value })
  }

  render() {

    const {monsters,searchField}=this.state;
    const filitered=monsters.filter(x=>{
      return x.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div>
        <h1>monster rolodex</h1>
        <SearchBox placeholder="search here" handleChange={this.handleChange} />
        <CardList monsters={filitered} />
      </div>
    );
  }
}

export default App;
