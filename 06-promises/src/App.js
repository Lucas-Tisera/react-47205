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
  const [posts, setPosts] = useState()

  const getPosts = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data)
        setMensaje('Posts cargados')
        setEstado('seccess')
        setIsOpen(true)
      })
      .catch(error => {
        setMensaje('Hubo un error con el servicio')
        setEstado('error')
        setIsOpen(true)
      })
      .finally(() => {
        setTimeout(()=>{
          setIsOpen(false)
        }, 3000)
      })
  }

  useEffect(() => {
    setTimeout(() => {
      getPosts()
    }, 3000)
  }, [])

  return (
    <div className="App">
      <h1>Promises</h1>
      {
        posts ?  <Listado posts={posts} /> : <h2>Cargando...</h2>
      }
      <Toast mensaje={mensaje} isOpen={isOpen} estado={estado} />
    </div>
  );
}

export default App;
