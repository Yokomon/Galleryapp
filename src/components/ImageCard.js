import React from 'react';

class ImageCard extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image.url.regular} alt={this.props.image.description} />
            </div>
        )
    }
}

export default ImageCard;