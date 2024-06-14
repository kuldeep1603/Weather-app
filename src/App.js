import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Page/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fav from './Page/FavCity/Fav';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Favourite' element={<Fav />} />
          <Route path='*' element="Page Not Found ...!" />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
