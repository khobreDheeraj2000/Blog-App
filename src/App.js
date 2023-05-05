
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Example from './component/Example';
import CustomNavbar from './component/CustomNavbar';
import Login from './page/Login';
import Signup from './page/Signup';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Example/>} />
      <Route path="login" element={<Login/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="logout" element={<CustomNavbar/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
