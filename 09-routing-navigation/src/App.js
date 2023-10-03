
import './App.css';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Cart from './Pages/Cart/Cart';
import Item from './Components/Item/Item';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MyNavbar from './Components/Navbar/Navbar';
import { CarritoProvider } from './Context/CarritoContext';

function App() {
  return (
    <BrowserRouter className="App">
      <MyNavbar />
      <CarritoProvider>
        <Routes>
          <Route path='/' element={<Home  />}/>
          <Route path='/products' element={<Products/>}/>
            <Route 
              path='/products/:itemId' 
              element={<Item  />}
              />
            <Route
              path='/cart' 
              element={<Cart />}
              />
        </Routes>
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
