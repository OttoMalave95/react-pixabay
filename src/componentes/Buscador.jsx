import React, { Component } from 'react';
import { Input, Col, Row, Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;
const { Search } = Input;

class Buscador extends Component {
    render() {
        return (
            <Header>
                <Title style={{ textAlign: 'center', color: 'gray' }}>Buscador de Imágenes</Title>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Search
                            placeholder="Busca tu imagen. Ejemplo: Futbol, Montaña, Perro"
                            size="large"
                            enterButton
                            onSearch={termino => this.props.datosBusqueda(termino)}
                        />
                    </Col>
                </Row>
            </Header>
         );
    }
}
 
export default Buscador;