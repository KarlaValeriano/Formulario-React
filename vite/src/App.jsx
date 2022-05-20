import Botao  from './components/Botao'
import Formulario from './components/formulario/Formulario'
import logo from './images/logo.jpg'




function App() {
  return(
    <div className='App' id='' aria-label='' title="components">
      <img src={logo} alt='logo estudantes' />
      <Formulario titulo ='form Cadastro' />
     {/*<Botao texto = 'Botao 1' cor ='vermelho'/>
      <Botao texto = 'Botao 2' cor ='verde'/>
      <Botao texto = 'Botao 3' cor ='amarelo'/>
      <Botao texto = 'Botao 4' cor ='rosa'/>
  <Botao texto = 'Botao 5' cor ='azul'/>*/ }

<footer className='rodape'> Copyright © 2022  Karla Valeriano</footer>


    </div>

    

  )
 
  
}



export default App
