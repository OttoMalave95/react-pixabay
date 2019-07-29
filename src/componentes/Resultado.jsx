import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';

class Resultado extends Component {
    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;

        return imagenes.length === 0 ? null
            :
            (
                <React.Fragment>
                    <div className="row">
                        {imagenes.map(imagen => (
                            <Imagen
                                key={imagen.id}
                                imagen={imagen}
                            />
                        ) ) }
                    </div>
                    <Paginacion
                        paginaAnterior={this.props.paginaAnterior}
                        paginaSiguiente={this.props.paginaSiguiente}
                    />
                </React.Fragment>
            )
    }

    render() {
        return (
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
         );
    }
}
 
export default Resultado;