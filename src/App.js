import ReactGA from 'react-ga';
import Byron01 from './Byron01.jpeg';
import './App.css';
import React from 'react';

function initizeAnalytics() {
  ReactGA.initialize('UA-206772680-1');
  ReactGA.pageview('/main');
}
function App() {
  initizeAnalytics();
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>TEST</h1> */}
        <h2>The Young Promise</h2>

        <p className="customText">
          Esto es un borrador de The Young Promise. Una simple prueba. Nada muy
          formal ni elegante.
        </p>

        <p className="customText">
          Mucho de este texto no tiene mucho sentido, más que un lugar para
          ilustrar lo que serían unos parrafos de inspiración. Habiendo dicho
          esto. Estoy en una situación similar a cuando el profe solicita llenar
          una resumen de 200 palabras, pero uno no tiene idea de que carajos
          escribir
        </p>

        <p className="customText">
          Puede ser comer chocolate, o cacao. Pero ninguno de ellos va a dar
          sabor a helado. Todo es cuestión de perspectiva, cuestión de como se
          ven las cosas en la vida.
        </p>

        <p className="customText">
          Voy a poner un texto genérico para que vea como se ve con un mucho
          text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          justo nibh, tempor sed tincidunt nec, ultricies ac diam. Proin ex mi,
          cursus sed volutpat ac, faucibus in lorem.
        </p>

        <h5>- Byron</h5>

        <img src={Byron01} className="customImage" />
        {/* <h7>#Cacao</h7> */}

        <br />
        <br />
        <text>
          {'\n'}
          1/OCT/2021 (O la fecha de cacao)
        </text>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
