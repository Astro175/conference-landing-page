import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Header.css';

const Header = ({ headImageUrls }) => {
    const carouselItemStyle = {
      height: '400px',  
    };


return (
      <>
        <div className="header">
          <Carousel>
            {headImageUrls.map((headImageUrl, index) => (
              <Carousel.Item key={index} style={carouselItemStyle}>
                <img className="d-block w-100 carousel-image" src={headImageUrl} alt={`Slide ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </>
    );
  };

    
  
  export default Header;