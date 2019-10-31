import React from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar"


class App extends React.Component{
    async onSearchSubmit(searchTerm){
        const response = await axios.get("https://api.unsplash.com/search/photos",{
        params:{ query: searchTerm},
        headers: {
            Authorization: "Client-ID 31ce87b9ab117506482470ea3fa3321ad3ae078b4c0a685d16053664d996cd40"
        }
        });

        console.log(response.data.results)
    }

    render(){
    return (<div className="ui container" id="formDetails">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>)
    }
}

export default App;