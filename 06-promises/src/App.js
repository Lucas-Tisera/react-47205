//URL: https://jsonplaceholder.typicode.com/posts
import { useEffect, useState } from 'react';
import './App.css';
import Toast from './Components/Toast/toast';
import Listado from './Components/Listado/listado';
const data = [
  {
    title: 'Post 1',
    body: 'Body 1'
  },
  {
    title: 'Post 2',
    body: 'Body 2'
  },
  {
    title: 'Post 3',
    body: 'Body 3'
  },
]
function App() {
  const [mensaje, setMensaje] = useState('Hola')
  const [estado, setEstado] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [pokemon, setPokemon] = useState()

  const getPokemon = () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=1")
      .then(response => response.json())
      .then(data => setPokemon(data.results))
  }

  useEffect(() => {
      getPokemon()
  }, [])

  return (
    <div className="App">
      <h1>Promises</h1>
      {
        pokemon &&
        pokemon.map((poke, index) => {
          return(
            <h2 key={index}> {poke.name} </h2>
          )
        })
      }
      {/* {
        posts ?  <Listado posts={posts} /> : <h2>Cargando...</h2>
      } */}
      {/* <Toast mensaje={mensaje} isOpen={isOpen} estado={estado} /> */}
    </div>
  );
}

export default App;
