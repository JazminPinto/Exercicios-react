//App.js

import React from 'react';
import Footer from './Footer'

function App(){
  return(
    <div>
      <nav>
        <ul>
          <li>Link1</li>
          <li>Link2</li>
          <li>Link3</li>
        </ul>
      </nav>
      <main>
        <h3>Este é o conteúdo principal do site</h3>
      </main>
      <Footer/>
    </div>
  );
}

export default App 

//Footer.js

import React from 'react'

function Footer(){
  return (
    <footer>Este é nosso rodape</footer>

  )
}

export default Footer;

//index.js

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));


/* pratica

+vamos explorar componentes Pai e Filho:
    -Crie um projeto React do zero (dica: create-react-app)
    -renderize um componente chamado App (definido em um arquivo separado) e dentro de App:
        .Crie um componente hamado Header, que sera nosso componente de navegaçao
        .Crie um componente chamado MainContent, que tera o contudo principal da pagina.
        .Cria um componente chamado Footer, que tera o conteudo do rodape.

import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import MainContent from './components/MainComponent'
import Footer from './Footer'

function App(){
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
*/
