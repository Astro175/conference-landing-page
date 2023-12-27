import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';

const Gallery = ({ imageUrls }) => { 
  return (
    <>
      <h2 className="">Gallery</h2>
      <div className="container">
        <div className="row">
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="image-container">
                <img src={imageUrl} className="img-fluid rounded" alt={`img${index + 1}`}/>
              </div>
            </div>
          ))}
        </div>
        <div>
        <footer className="text-center mt-4">
           <p style={{ color: 'black'}}> &copy; {new Date().getFullYear()} Tech2Grassroots. All rights reserved.</p>
        </footer>
      </div> 
      </div>
    </>
  )
  };

export default Gallery;
