import '../css/register.css';
import logo from '../assets/logo1.jpg';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Crear cuenta</h2>
         <div className="login-logo-wrapper">
          <img
            src={logo}
            alt="Logo Montenegro Pizza"
            className="login-logo"
          />
        </div>
        <form>
          <input
            type="text"
            className="register-input"
            placeholder="Nombre completo"
          />
          <input
            type="email"
            className="register-input"
            placeholder="Correo electrónico"
          />
          <input
            type="password"
            className="register-input"
            placeholder="Contraseña"
          />
          <input
            type="password"
            className="register-input"
            placeholder="Confirmar contraseña"
          />
          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>
        <p className="register-footer">
          ¿Ya tienes cuenta?{' '}
          <span className="register-link">
            Iniciar sesión
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;