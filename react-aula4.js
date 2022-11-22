import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div>
    <h1> Hello World!!</h1>
    <p>Teste</p>
  </div>,
  document.getElementById('root'));

  //ou

  let titulo = document.createElement('h1')
  titulo.textContent = 'Hola mundo!!'

  let p = document.createElement('p')
  p.textContent = 'teste1'

  let root = document.getElementById('root')
  root.append(titulo)
  root.append(p)

  /* pratica
  -execute voce mesmo o comando Create React App
    +no seu template App.js cria uma lista nao ordenada
    (ul) que deve conter tres itens (li) com azafares
    do seu dia.
  -fiquem a vontade para explorar e criar mais itens no 
  template!!
    */

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div>
    <ul>
      <li>Ir ao mercado</li>
      <li>Limpar a casa</li>
      <li>Brincar com os gatos</li>
    </ul>
  </div>, 
  document.getElementById('root')
);