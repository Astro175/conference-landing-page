import './About.css';
import image1 from './About1.png';
import image2 from './About2.png';
import vector from './vector.svg';

const About = () => {
    const myText = `In an era of rapid digital transformation, 
    we gather for the transformative conference, 
    "Digital Inclusion for All: Shaping Our Future," to bridge the digital divide 
    and empower a technologically inclusive society.`;
    return ( 
        <section className="about--section">
            <div className="about--images">
                <img src={image1} alt="tech experts in office" />
                <img src={image2} alt="ladies in tech" />
                <img src={vector} alt="button-vector-icon" />

            </div>
            <div className="about--writeup">
                <h3>About Conference</h3>
                <p>{myText}</p>
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