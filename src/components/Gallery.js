import "./Gallery.css";
import ImageCard from "./ImageCard";
import React from 'react';

const Gallery = props => {
 const images = props.images.map((image) =>{
 return <ImageCard key={image.id} image={image}/>
})
    return <div className="image-list">{images}</div>
}

export default Gallery;