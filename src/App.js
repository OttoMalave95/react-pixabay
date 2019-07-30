/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';
import './App.css';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: '',
  };

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if (pagina === 1) return null;
    pagina -= 1;
    this.setState({ pagina }, () => {
      this.consultarApi();
      this.scroll();
    });
  };

  paginaSiguiente = () => {
    let pagina = this.state.pagina;
    pagina += 1;
    this.setState({ pagina }, () => {
      this.consultarApi();
      this.scroll();
    });
  };

  consultarApi = () => {
    const api_key = '13169517-a0564aef3dd9fa71a87504dbe';
    const termino = this.state.termino;
    const cantidad_resultado = 30;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=${api_key}&q=${termino}&per_page=${cantidad_resultado}&page=${pagina}`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = (termino) => {
    this.setState({ termino, pagina: 1 }, () => this.consultarApi());
  };

  render() {
    return (
      <Layout>
        <Buscador datosBusqueda={this.datosBusqueda} />
        <Content style={{ padding: '20px 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280, borderRadius: 10 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>React PixaBay ©2019 Creado por Otto Malavé</Footer>
      </Layout>

      // <div className="app container">
      //   <div className="jumbotron">
      //     <p className="lead text-center">Buscador de Imágenes</p>

      //     <Buscador
      //       datosBusqueda={this.datosBusqueda}
      //     />
      //   </div>

      //   <div className="row justify-content-center">
      //     <Resultado
      //       imagenes={this.state.imagenes}
      //       paginaAnterior={this.paginaAnterior}
      //       paginaSiguiente={this.paginaSiguiente}
      //     />
      //   </div>

      //   <Button type="primary">Button</Button>
      // </div>
    );
  }
}

export default App;
