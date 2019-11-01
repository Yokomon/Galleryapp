import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props)

        this.state = {spans: 0}
        this.imageRef = React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener("load", this.setSpans)
    }

    setSpans = () => {
        const imageHeight = this.imageRef.current.clientHeight;

        const spans = Math.ceil(imageHeight/150);

        this.setState({spans: spans});
    }
    render(){
        const {description, urls}= this.props.image;
        return(
            <div>
                <img
                style=
                {{geidRowEnd: `spans ${this.state.spans}`}}
                ref = {this.imageRef}
                 src={urls.regular} 
                alt={description} 
                />
            </div>
        )
    }
}

export default ImageCard;