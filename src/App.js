import logo from './logo.svg';
import './App.css';
import MasterLayout from './componets/layouts/MasterLayout';
import Header from './componets/layouts/Header';
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import Home from './componets/pages/Home/Home';
import Magazine from './componets/pages/Magazine/Magazine';
import Outline from './componets/pages/Outline/Outline';
import Product from './componets/pages/Product/Product';
import About from './componets/pages/About/About';
import Login from './componets/pages/register/login';
import Cart from './componets/pages/Cart/Cart';
import Detail from './componets/pages/detail/Detail';
import Register from './componets/pages/register/register';
function App() {
  return (

    <Routes>
      <Route path='/' element={<MasterLayout children={<Home />} />} />
      <Route path='/magazine' element={<MasterLayout children={<Magazine />} />} />
      <Route path='/outline' element={<MasterLayout children={<Outline />} />} />
      <Route path='/product' element={<MasterLayout children={<Product />} />} />
      <Route path='/about' element={<MasterLayout children={<About />} />} />
      <Route path='/login' element={<MasterLayout children={<Login />} />} />
      <Route path='/cart' element={<MasterLayout children={<Cart />} />} />
      <Route path='/detail/:id' element={<MasterLayout children={<Detail />} />} />
      <Route path='/register' element={<MasterLayout children={<Register />} />} />
    </Routes>
  );
}

export default App;
