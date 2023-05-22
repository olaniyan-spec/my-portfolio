import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' index element={<Home/>} ></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
