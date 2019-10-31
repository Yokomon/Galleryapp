import React from 'react';
import unsplash from '../Api/unsplash'
import SearchBar from "./SearchBar"
import Gallery from "./Gallery"

class App extends React.Component{
    state = { images: [] }
    
    onSearchSubmit = async (searchTerm) => {
        const response = await unsplash.get("/search/photos",{
        params:{ query: searchTerm},
        });

      this.setState({images: response.data.results})
    }

    render(){
    return (<div className="ui container" id="formDetails">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found {this.state.images.length} images
        <br/>
        <Gallery images={this.state.images} />
        </div>)
    }
}

export default App;