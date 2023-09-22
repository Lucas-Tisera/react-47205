//URL: https://jsonplaceholder.typicode.com/posts
import { useEffect, useState } from 'react';
import './App.css';
import Toast from './Components/Toast/toast';
import Listado from './Components/Listado/listado';
import ListaNoticias from './Components/Filtro/ListaNoticias';
import Filtro from './Components/Filtro/Filtro';

const data = [
   {
     id: 1,
     categoria: 'Viajes',
     titulo: 'Viaje a la luna',
     contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.',
     autor: 'Juan Perez',
   },
   {
     id: 2,
     categoria: 'Comida',
     titulo: 'Receta de pizza',
     contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.',
     autor: 'Juan Perez',
   },
   {
      id: 3,
      categoria: 'Viajes',
      titulo: 'Puerto Rico, un destino turistico',
      contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.',
    },
    {
      id: 4,
      categoria: 'Comida',
      titulo: 'Receta de hamburguesa',
      contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.',
    },
]


function App() {
  const [mensaje, setMensaje] = useState('Hola')
  const [estado, setEstado] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [posts, setPosts] = useState()
  const [pokemon, setPokemon] = useState()

  const getPosts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 2000)
    })
  }

  getPosts()
  .then((res) => {
    setPosts(res)
  })
  .catch((error) => {
    console.log(error)
  })

  return (
    <>
      <Filtro>
        {(filterState, handleFilterChange)=>(
          <>
          <h1>BLOG DEL PROFE LUCAS</h1>
            <label htmlFor="filter">Filtrar por categoria: </label>
            <select
                name="filter"
                id="filter"
                value={filterState}
                onChange={handleFilterChange}
              >
                <option value="all">Todos</option>
                <option value="viajes">Viajes</option>
                <option value="comidas">Comidas</option>
                <option value="null">Nada</option>
            </select>
            <ListaNoticias posts={
              filterState === "all" 
              ? posts
              : posts.filter((post) => filterState === "viajes"
              ? post.categoria === "Viajes"
              : filterState === "comidas" ?  post.categoria === "Comida"
              : null
              )
            } />
            </>
        )}

      </Filtro>
    </>
  );
}

{/*  */}
export default App;
