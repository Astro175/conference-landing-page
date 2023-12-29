import { FormspreeProvider } from '@formspree/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './pages/Form';

import Home from './pages/home';

function App() {

  return (
    <FormspreeProvider project="mleyqqve">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Form />} />
        {/* <Route path='/gallery' element={<HomeGallery />} />  */}
      </Routes>
    </BrowserRouter>
    </FormspreeProvider>
   
  )
}

export default App;
