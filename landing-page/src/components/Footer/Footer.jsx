import './Footer.css';

const Footer = () => {
    return ( 
        <footer>
            <div className="newsletter">
                <h1 className='footer--title'>Join our newsletter to get latest updates about the conference.</h1>
                <form className="newsletter--form">
                    <input type="text" name="" id="" placeholder="Email Address"/>
                    <button className="subscribe--btn" >Subscribe</button>
                </form>
            </div>
            <div className="social">
                <svg className='vector-social' xmlns="http://www.w3.org/2000/svg" width="99" height="20" viewBox="0 0 99 20" fill="none">
                    <path d="M82.23 0L65.79 16.36L49.34 0L32.9 16.36L16.46 0L0 16.39L1.88995 18.13L16.46 3.62L32.9 19.98L49.34 3.62L65.79 19.98L82.23 3.62L96.74 18.05L98.55 16.23L82.23 0Z" fill="#3461FF"/>
                </svg>
                <div className="social--icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="20" viewBox="0 0 65 20" fill="none">
                        <path d="M61.8467 20V10.8919H64.5122L64.9084 7.32578H61.8467V5.05432C61.8467 4.02527 62.0954 3.32071 63.3766 3.32071H65V0.141321C64.2101 0.0437405 63.4162 -0.0033761 62.6218 0.000187992C60.2657 0.000187992 58.6481 1.65823 58.6481 4.70204V7.31912H56V10.8852H58.6539V20H61.8467Z" fill="white"/>
                        <path d="M21 3.9006C20.2277 4.21303 19.3873 4.43788 18.5217 4.52545C19.4204 4.02471 20.0934 3.23362 20.4145 2.3006C19.5711 2.77111 18.6473 3.10104 17.6838 3.27575C17.2811 2.87202 16.7941 2.5504 16.2531 2.33091C15.7121 2.11143 15.1287 1.99879 14.5392 2.00001C12.1543 2.00001 10.2363 3.81303 10.2363 6.03788C10.2363 6.3503 10.2767 6.66273 10.3423 6.96332C6.77118 6.78817 3.58623 5.18817 1.46881 2.73847C1.083 3.3565 0.880818 4.06019 0.883307 4.77634C0.883307 6.17752 1.64295 7.41302 2.80135 8.13965C2.11869 8.11444 1.45201 7.93846 0.855546 7.62604V7.67575C0.855546 9.63787 2.33446 11.2639 4.30549 11.6379C3.93541 11.728 3.5547 11.7741 3.17234 11.7752C2.8922 11.7752 2.62721 11.7491 2.35969 11.7136C2.90482 13.3136 4.49225 14.4757 6.38253 14.5136C4.90362 15.6 3.0512 16.2391 1.03978 16.2391C0.678885 16.2391 0.345752 16.2272 0 16.1894C1.90794 17.3373 4.17173 18 6.60966 18C14.5241 18 18.8548 11.8509 18.8548 6.51362C18.8548 6.33847 18.8548 6.16332 18.8422 5.98817C19.6801 5.41303 20.4145 4.7006 21 3.9006Z" fill="white"/>
                    </svg>
                </div>
                <h3 className="site--title">Tech2grassroots.com.ng</h3>
                <div className="policy-and-terms">
                    <span>Privacy Policy</span>
                    <span>Terms of conference </span>
                    <span>Contact Us</span>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;