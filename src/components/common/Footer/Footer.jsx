import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const localAddress = "Dirección del local"; // Inserta aquí la dirección del local

  const openGoogleMaps = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(localAddress)}`;
    window.open(mapUrl, "_blank");
  };

  return (
    <footer className="bg-dark text-light py-2 text-start" style={{ marginTop: "auto", bottom: "0", width: "100%" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <p className="mb-0 small" style={{ color: "#9E9E9E" }}>Correo electrónico: info@example.com</p>
            <p className="mb-0 small" style={{ color: "#9E9E9E" }}>Teléfono: 123-456-7890</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="enlace-a-red-social-1" className="text-decoration-none">
                  <i className="bi bi-facebook text-primary cursor-pointer" style={{ color: "#191919" }}> Facebook</i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="enlace-a-red-social-2" className="text-decoration-none">
                  <i className="bi bi-instagram text-purple cursor-pointer" style={{ color: "purple" }}>
                    Instagram
                  </i>
                </a>
              </li>
              <li className="list-inline-item">
                <i className="bi bi-geo-alt text-success" style={{ cursor: "pointer", color: "#191919" }} onClick={openGoogleMaps}>
                  Google Maps
                </i>
              </li>
            </ul>
          </div>
          <div className="col-md-4 d-flex justify-content-center text-center">
            <Link to="/terminos" className="text-light text-decoration-none me-2">
              <button className="btn btn-outline-light btn-sm text-nowrap" style={{ borderStyle: "none" }}>Ver términos y condiciones</button>
            </Link>
          </div>
          <div className="col-md-4 text-end align-self-end">
            <div className="text-end">
              <Link to="/arrepentimiento" className="text-decoration-none">
                <button className="btn btn-outline-light btn-sm ms-2" style={{ borderStyle: "none" }}>Arrepentirse de compra</button>
              </Link>
            </div>
            <p className="mb-0 small" style={{ color: "#9E9E9E" }}>&copy; {new Date().getFullYear()} Pluma</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
