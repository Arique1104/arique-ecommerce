import './components/directory/directory.styles.scss'
import {Routes, Route, Outlet } from 'react-router-dom'
import Home from './routes/home/home'
import NavBar from './routes/nav-bar/nav-bar'
import Authentication from './routes/authentication/authentication'


const Shop = () => {
    return <h1>I am the shop page</h1>
};

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
