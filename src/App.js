import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import login from './pages/login.js';
import Base from './component/Base';
import Example from './component/Example';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Example/>} />
      <Route path="login" element={<login/>} />
      <Route path="signup" element={<h1>signup</h1>} />
      <Route path="logout" element={<h1>logout</h1>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
