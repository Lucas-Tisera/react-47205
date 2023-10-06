import './App.css';
import { AppContent } from './Components/AppContent/AppContent';
import { Navbar } from './Components/Navbar/Navbar';
import {  useTemaContexto } from './Context/TemaContext';

function App() {
  const { colorContexto } = useTemaContexto();
  return (
    <div id={colorContexto} >
        <Navbar />
        <AppContent />
    </div>
  );
}

export default App;
