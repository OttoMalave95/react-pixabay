import React, { Component } from 'react';
import Imagen from './Imagen';
import { Layout, Row, Pagination } from 'antd';

const { Content } = Layout;

class Resultado extends Component {
    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;

        return imagenes.length === 0 ? null
            :
            (
                <React.Fragment>
                    <Row gutter={16} >
                        {imagenes.map(imagen => (
                            <Imagen
                                key={imagen.id}
                                imagen={imagen}
                            />
                        ))}
                    </Row>
                    <Row>
                        <Pagination 
                            defaultCurrent={this.props.pagina}
                            pageSize={30}
                            total={this.props.total}
                            onChange={(pagina) => this.props.cambioPagina(pagina)}
                        />
                    </Row>
                </React.Fragment>
            )
    }

    render() {
        return (
            <Content style={{ padding: '20px 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280, borderRadius: 10 }}>
                    <Row type="flex" justify="center">
                        {this.mostrarImagenes()}
                    </Row>
                </div>
            </Content>
         );
    }
}
 
export default Resultado;