/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';
import './App.css';
import { Layout, BackTop, Icon } from 'antd';

const { Footer } = Layout;

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: '',
    total_imagenes: '',
  };

  cambioPagina = (pagina) => {
    this.setState({ pagina }, () => this.consultarApi());
  };

  consultarApi = () => {
    const api_key = '13169517-a0564aef3dd9fa71a87504dbe';
    const termino = this.state.termino;
    const cantidad_resultado = 30;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=${api_key}&q=${termino}&per_page=${cantidad_resultado}&page=${pagina}`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits, total_imagenes: resultado.total }));
  };

  datosBusqueda = (termino) => {
    this.setState({ termino, pagina: 1 }, () => this.consultarApi());
  };

  render() {
    return (
      <Layout>
        <Buscador datosBusqueda={this.datosBusqueda} />
        <Resultado
          imagenes={this.state.imagenes}
          pagina={this.state.pagina}
          total={this.state.total_imagenes}
          cambioPagina={this.cambioPagina}
        />
        <BackTop>
          <div className="ant-back-top-inner"><Icon type="arrow-up" /></div>
        </BackTop>
        <Footer>React PixaBay ©2019 Creado por Otto Malavé</Footer>
      </Layout>
    );
  }
}

export default App;
