import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './component/About';
import Home from './component/Home';
import Booking from './component/Booking';
import Footer from './component/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Signin from './component/Signin';
import Signup from './component/Signup';
import Logout from './component/Logout';
import Menu from './component/Menu';
import Search from './component/Search';
import Cart from './component/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/booking' element={<Booking/>}></Route>
          {/* <Route path='/signin' element={<Signin/>}></Route> */}
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>

        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
