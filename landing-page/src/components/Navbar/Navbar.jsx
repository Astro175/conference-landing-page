import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <p className='title'>TECH2GRASSROOTS</p>
            <Link to="/register"><button className='register-btn'>Register</button></Link>
        </nav>
    )
}