import '../css/location.css';
import locationImage from '../assets/location.png';
import logo from '../assets/logo.png';

const Location = () => {
  return (
    <div className="location-wrapper">
      <div className="location-card">
        <div className="location-text">
          <h2 className="location-title">¿Deseas encontrarnos?</h2>
          <p className="location-description">
            Montenegro’s Pizza está en el corazón de la ciudad, ofreciendo sabor auténtico desde 1998.
            Ven a disfrutar de nuestras especialidades artesanales en un ambiente acogedor y familiar.
            ¡Te esperamos con el horno encendido!
          </p>
          <div className="login-logo-wrapper">
          <img
            src={logo}
            alt="Logo Montenegro Pizza"
            className="login-logo-location"
          />
         </div>
        </div>
        <div className="location-image-wrapper">
          <img
            src={locationImage}
            alt="Ubicación de Montenegro’s Pizza"
            className="location-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;