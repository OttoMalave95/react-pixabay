import React from 'react';

const Imagen = props => {
    const { previewURL, largeImageURL, likes, tags, views } = props.imagen;

    return (
        <div className="col-sm-12 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img height="150" src={previewURL} alt={tags} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">{likes} Me Gusta</p>
                    <p className="card-text">{views} Vistas</p>

                    <a href={largeImageURL} className="btn btn-primary btn-block" target="_blank" rel="noopener noreferrer">Ver Imagen</a>
                </div>
            </div>
        </div>
    )
}

export default Imagen;