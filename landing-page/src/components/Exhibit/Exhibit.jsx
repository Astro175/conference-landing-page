import './Exhibit.css';
import image from './Image.png';
const Exhibit = () => {
    return (
        <article className='exhibit--container'>
             <div className='rectangle'>
            </div>
            <div>
                <img className="exhibit--image" src={image} alt="man with camera" />
            </div>
        </article>
       
     );
}
 
export default Exhibit;