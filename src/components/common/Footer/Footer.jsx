import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Información de contacto</h4>
            <p>Correo electrónico: info@example.com</p>
            <p>Teléfono: 123-456-7890</p>
          </div>
          <div className="col-md-4">
            <h4>Términos y condiciones</h4>
            <Link to="/terminos" className="text-light text-decoration-none">
              <button className="btn btn-outline-light">Ver términos y condiciones</button>
            </Link>
          </div>
          <div className="col-md-4">
            <h4>Arrepentimiento de compra</h4>
            <button className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#arrepentimientoModal">
              Arrepentirse de la compra
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; {new Date().getFullYear()} Mi Sitio Web</p>
          </div>
        </div>
      </div>

      <div className="modal fade" id="arrepentimientoModal" tabIndex="-1" aria-labelledby="arrepentimientoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="arrepentimientoModalLabel">Arrepentimiento de compra</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>¿Estás seguro de que quieres arrepentirte de tu compra?</p>
              <p>Por favor, completa el siguiente formulario:</p>
              <form>
                {/* Aquí irían los campos del formulario */}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;