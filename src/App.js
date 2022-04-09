import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import Reviews from './components/Reviews/Reviews';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from './firebase.init';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';

const auth = getAuth(app);

function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='products' element={
          <RequiredAuth>
            <Products></Products>
          </RequiredAuth>
        }></Route>
        <Route path='orders' element={
          <RequiredAuth>
            <Orders></Orders>
          </RequiredAuth>
      }></Route>
        <Route path='reviews' element={<Reviews></Reviews>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
