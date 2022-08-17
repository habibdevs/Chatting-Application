import Registration from './pages/Registration';
import Login from './pages/Login';
import {  BrowserRouter,  Routes,  Route, Router,} from "react-router-dom";
import Home from './pages/Home';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
        <Route path='/homepage' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
