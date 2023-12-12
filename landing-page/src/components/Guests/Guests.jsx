import guests from "../../../guests";
import Profile from "../Profile/Profile";
import './Guests.css';
const Guests = () => {
    const specialGuests = guests.map((guest) => {
        return <Profile
        key={guest.id}
        imageUrl={guest.imageUrl}
        rank={guest.rank}
        name={guest.name}
        />
    })
    return ( 
        <section className="guests--section speakers--section">
            <h3 className="guests--title">Special Guests of Honor</h3>
            <article className="speakers--profile">
                {specialGuests}
            </article>
        </section>
     );
}
 
export default Guests;
<section className="guests--section">
    <h3>Special Guests</h3>
</section>