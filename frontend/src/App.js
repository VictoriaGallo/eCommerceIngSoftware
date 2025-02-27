
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Tienda from './Pages/Tienda/Tienda';
import Productos from './Pages/Productos/Productos';
import Contactanos from './Pages/Contactanos/Contactanos';
import Login from './Pages/Login/Login';
import Carrito from './Pages/Carrito/Carrito';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Tienda/>}/>
            <Route path='/Product' element={<Productos/>}>
              <Route path=':Productid' element={<Productos/>}/>
            </Route>
            <Route path='/Contactanos' element={<Contactanos/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Carrito' element={<Carrito/>}/>
          </Routes>
         
      </BrowserRouter>
      
    </div>
  );
}

export default App;
