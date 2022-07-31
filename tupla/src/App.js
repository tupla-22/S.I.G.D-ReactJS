import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error404 from './componentes/Error404';
import NavBar from './componentes/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Proyects from './pages/Proyects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <Routes>
        <Route path='/*' element={<Error404/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/proyects' element={<Proyects/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
