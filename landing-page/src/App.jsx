import './App.css';
// import Profile from './components/Profile/Profile' 
import About from './components/About/About';
import Head from './components/Header/Header';
import Speakers from './components/Speakers/Speakers';
function App() {

  return (
    <div className='container'>
      <Head />
      <About />
      <Speakers />
    </div>
  )
}

export default App
