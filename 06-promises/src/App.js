//URL: https://jsonplaceholder.typicode.com/posts
import { useEffect, useState } from 'react';
import './App.css';
import Toast from './Components/Toast/toast';
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
  const [mensaje, setMensaje] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [estado, setEstado] = useState('')


  return (
    <div className="App">
      <h1>Promises</h1>
      <Toast mensaje={mensaje} isOpen={isOpen} estado={estado} />
    </div>
  );
}

export default App;
