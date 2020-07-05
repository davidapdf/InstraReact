
import React from 'react';
import ContainerNavegacao from './navegacao/NavegacaoPrincipal'
import { init } from './dataBase/sqlite';

init().then(
  () => {
    console.log("Database inicializado");
  }
).catch((error) => {
  console.log("Erro");
  console.log(error);
})


const App =() =>{
  return(
    <ContainerNavegacao/>
  )
}

export default App;