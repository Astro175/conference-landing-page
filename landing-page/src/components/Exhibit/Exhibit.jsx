import './Exhibit.css';
import image from './image.jpg';
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