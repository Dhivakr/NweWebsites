import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';


function App() {
  return (
   <>
    <Routes>

      <Route  exact path='/' element={<Home/>}></Route>
      <Route  exact path='/register' element={<Register/>}></Route>
      <Route  exact path='/login' element={<Login/>}></Route>
     

    </Routes>

   </>
  );
}

export default App;
