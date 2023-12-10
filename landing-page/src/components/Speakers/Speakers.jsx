import data from '../../../data';
import Profile from '../Profile/Profile';
import './Speakers.css';

const Speakers = () => {
    const speakers = data.map((speaker) => (
        <Profile
        key={speaker.id}
        imageUrl={speaker.imageUrl}
        rank={speaker.rank}
        name={speaker.name}
        />
    ))
    return ( 
        <section className="speakers--section">
            <h2 className='speakers--title'>Speakers</h2>
            <article className="speakers--profile">
                {speakers}
            </article>
        </section>
     );
}
 
export default Speakers;