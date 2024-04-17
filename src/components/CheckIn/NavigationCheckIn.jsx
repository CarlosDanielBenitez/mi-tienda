import { Link, useLocation } from "react-router-dom";
import "./checkStyles.css"
const NavigationCheckIn = () => {
    const location = useLocation();
    // Mostrar el icono solo si no está en la página de CheckIn
    if (location.pathname !== "/CheckIn") {
      return (
        <Link to="/CheckIn">  
          <img className="iconsAll" src="./public/images/user-icon.svg" alt="user" />
        </Link>
      );
    }
    return null;
  };

  export default NavigationCheckIn;