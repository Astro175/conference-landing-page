import './App.css';
// import Profile from './components/Profile/Profile' 
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Guests from './components/Guests/Guests';
import Head from './components/Header/Header';
import Schedule from './components/Schedule/Schedule';
import Speakers from './components/Speakers/Speakers';
function App() {

  return (
    <div className='container'>
      <Head />
      <About />
      <Speakers />
      <Schedule />
      <Guests />
      <Footer />
    </div>
  )
}

export default App
