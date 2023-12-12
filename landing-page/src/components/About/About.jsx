import './About.css';
import image1 from './About1.png';
import image2 from './About2.png';

const About = () => {
    const myText = `In an era of rapid digital transformation, 
    we gather for the transformative conference, 
    "Digital Inclusion for All: Shaping Our Future," to bridge the digital divide 
    and empower a technologically inclusive society.`;
    return ( 
        <section className="about--section">
            <div className="about--images">
                <img className='vector-2'src={image2} alt="ladies in tech" />
                <img className='vector-1'src={image1} alt="tech experts in office" />
                <svg className="vector-3"width="158" height="158" viewBox="0 0 158 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Button">
                    <circle id="Ellipse 5" opacity="0.2" cx="79" cy="79" r="79" fill="#3461FF"/>
                    <circle id="Ellipse 4" opacity="0.3" cx="79" cy="79" r="60" fill="#3461FF"/>
                    <circle id="Ellipse 3" cx="79" cy="79" r="44" fill="#3461FF"/>
                        <path id="Vector" d="M-nan -nanL90.631 76.5777L70.2019 64.3848C68.542 63.3946 66 64.3555 66 66.8046V91.1845C66 93.3817 68.3621 94.7059 70.2019 93.6043L90.631 81.4173C92.4534 80.3334 92.4592 77.6616 90.631 76.5777L-nan -nanZ" fill="white"/>
                    </g>
                </svg>

            </div>
            <div className="about--writeup">
                <h3 className='about--title'>About Conference</h3>
                <p className='about--text'>{myText}</p>
                <span className='about--subtitle'>Kwara State Banquet Hall</span>
                <div className="about--info">
                    <div className="about--day">
                        <h4>1</h4>
                        <span>Day event</span>
                    </div>
                    <div className="about--speakers">
                        <h4>15+</h4>
                        <span>Speakers</span>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;