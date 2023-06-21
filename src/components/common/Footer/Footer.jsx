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
      <footer className="bg-dark text-light py-2 text-start" style={{ marginTop:"auto", bottom:"0", width:"100%"}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <p className="mb-0 small">Correo electrónico: info@example.com</p>
            <p className="mb-0 small">Teléfono: 123-456-7890</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="enlace-a-red-social-1" className="text-decoration-none">
                  <i className="bi bi-facebook text-primary cursor-pointer"> Facebook</i>
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
                <i className="bi bi-geo-alt text-success" style={{ cursor: "pointer" }} onClick={openGoogleMaps}>
                  Google Maps
                </i>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <Link to="/terminos" className="text-light text-decoration-none">
              <button className="btn btn-outline-light btn-sm">Ver términos y condiciones</button>
            </Link>
            <Link to="/arrepentimiento" className="text-decoration-none">
              <button className="btn btn-outline-light btn-sm ms-2">
                Arrepentirse de la compra
              </button>
            </Link>
          </div>
          <div className="col-md-4 text-end">
            <p className="mb-0 small">&copy; {new Date().getFullYear()} Tu Librito</p>
          </div>
        </div>
      </div>

      {/* Modal de arrepentimiento */}
      <div className="modal fade" id="arrepentimientoModal" tabIndex="-1" aria-labelledby="arrepentimientoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="arrepentimientoModalLabel">Arrepentimiento de la compra</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
