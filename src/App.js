import './components/directory/directory.styles.scss'
import {Routes, Route, Outlet } from 'react-router-dom'
import Home from './routes/home/home'
import NavBar from './routes/nav-bar/nav-bar'
import Authentication from './routes/authentication/authentication'
import Shop from './routes/shop/shop'


const App = () => {
 return (
 <Routes>
    <Route path='/' element={<NavBar/>}>
      <Route index element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='auth' element={<Authentication/>}/>

    </Route>

 </Routes>
 
 );
};

export default App;
