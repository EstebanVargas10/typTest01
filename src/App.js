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
          Plaio, digame que texto podríamos poner aca. Tenemos campos para poner
          mucha hablada, esto es un ejemplo de un text muy largo
        </p>

        <p className="customText">
          Podemos escribir varios parrajos de lo que se nos de la gana. Estoy
          revisando como podemos saber que tante gente se metió en el sitio si
          es que le nos damos por este vara, para crear más misterio jeje
        </p>

        <p className="customText">
          Contar alguna breve historia, algo no muy elaborado. O se le puede
          cagar a la tía de chepe
        </p>

        <p className="customText">
          Todo va a depender de que tanto se quiera inspirar. Voy a poner un
          texto genérico para que vea como se ve con un mucho text. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Mauris justo nibh, tempor
          sed tincidunt nec, ultricies ac diam. Proin ex mi, cursus sed volutpat
          ac, faucibus in lorem. Aliquam sit amet metus at arcu tempus fermentum
          a a mi. Nunc aliquet ex vel tellus sagittis, non finibus mauris
          sagittis. Cras commodo quam vel quam iaculis, malesuada ultricies nunc
          convallis
        </p>

        <h5>- Byron</h5>

        <img src={Byron01} className="customImage" />
        {/* <h7>#Cacao</h7> */}

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
