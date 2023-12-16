import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './pages/Form';
import Home from './pages/home';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Form />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
