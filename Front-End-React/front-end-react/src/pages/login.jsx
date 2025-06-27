import '../css/login.css';
import logo from '../assets/logo1.jpg';


const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Iniciar sesión</h2>
         <div className="login-logo-wrapper">
          <img
            src={logo}
            alt="Logo Montenegro Pizza"
            className="login-logo"
          />
        </div>

        <form>
          <input
            type="email"
            className="login-input"
            placeholder="Correo electrónico"
          />
          <input
            type="password"
            className="login-input"
            placeholder="Contraseña"
          />
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
        <p className="login-footer">
          ¿No tienes cuenta?{" "}
          <span style={{ color: "#3caa33", cursor: "pointer" }}>
            Regístrate
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;