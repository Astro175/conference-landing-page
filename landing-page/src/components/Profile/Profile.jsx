import { PropTypes } from "prop-types";
import './profile.css';
export default function Profile(props) {
    return (
        <div className="profile-ctn">
            <div className='img-card'>
                <img src={props.imageUrl} alt="" className='profileImg'/>
            </div>
            <div className="card">
                <h4>{props.name}</h4>
                <p>{props.rank}</p>
            </div>
        </div>
    )
}

Profile.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    rank: PropTypes.string
}