import React, { Component } from 'react';
import Webcam from "react-webcam";

export default class Camara extends Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  state = {
    imagen: null
  };

  foto = () => {
    const captura = this.webcam.getScreenshot();
    console.log(captura);
    this.setState({
      imagen: captura
    });
  };

  render() {
    // Configuración para usar la cámara trasera
    const videoConstraints = {
      facingMode:  "environment"  // Selecciona la cámara trasera
    };

    return (
      <div className='App'>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints} // Aplica los constraints
        />
        <br />
        <button onClick={this.foto}>Hacer captura</button>
        <hr />
        {this.state.imagen && (
          <>
            <img src={this.state.imagen} alt="Captura" />
            <br />
            <a href={this.state.imagen} download="captura">Descargar captura</a>
          </>
        )}
      </div>
    );
  }
}
