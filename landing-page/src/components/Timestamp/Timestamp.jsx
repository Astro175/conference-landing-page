import PropTypes from 'prop-types';
import './Timestamp.css';
const Timestamp = (props) => {
    return ( 
        <div className="timestamp--section">
            <span className='timestamp--duration'>{props.time}</span>
            <div className='timestamp-content-container'>
                 <h3 className='timestamp--title'>{props.title}</h3>
                {props.description && <p>{props.description}</p>}
            </div>
           
        </div>
     );
}

Timestamp.propTypes = {
    time: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string
}
 
export default Timestamp;