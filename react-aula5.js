import React from 'react'
import ReactDOM from 'react-dom'

function MyApp(){
  return(
    <div>
      <div>
        <h1> Jazmin Pinto </h1>
        <p>Eu amo chocolate meio amargo</p>
      </div>
      <div>
        <p>Tenho três gatões</p>
      </div>
    </div>
  )
}

ReactDOM.render(<MyApp/>, document.getElementById('root'))

/* pratica
+Vamos explorar Componentes funcionais:
  -crie um projeto react do zero (dica: create-react-app)
  -crie um componente funcional com o nome MyInfo
  -adicione um elemento de titulo com seu nome (dica: <h1>)
  -adicione um elemento de paragrafo com uma breve descriçao sobre voce(dica<p>)
  -crie uma lista ordenada com tres coisas que voces gosta de fazer nas suas horas livres
  -renderize seu componente funcional no navegador
  -[EXTRA] ainda nao falamos sobre estilos... mas que tal pesquesar sobre como 
  isto acontece no React e fazer uma tentativa?*/

  /*
  import React from 'react';
  import ReactDOM from 'react-dom';

  function MyInfo(){
    return(
        <div>
            <h1>Jazmin Pinto</h1>
            <p>Este é um paragrafo sobre mim</p>
            <ul>
                <li>Comer chocolate</li>
                <li>Salir a caminhar</li>
                <li>Escutar musica</li>
            </ul>
        </div>
    )
  }

  ReactDOM.render(<MyInfo/>, document.getElementById('root')); 
  */