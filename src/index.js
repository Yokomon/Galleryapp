import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

class App extends React.Component {
    render(){
        return <h1>Hi there</h1>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));