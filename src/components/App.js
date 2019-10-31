import React from 'react';
import SearchBar from "./SearchBar"
import "./SearchBar.css";

class App extends React.Component{
    onSearchSubmit(searchTerm){
        console.log(searchTerm);
    }

    render(){
    return (<div className="ui container" id="formDetails">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>)
    }
}

export default App;