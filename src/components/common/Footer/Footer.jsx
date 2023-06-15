import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    const localAddress = "Dirección del local"; // Inserta aquí la dirección del local

    const openGoogleMaps = () => {
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        localAddress
        )}`;
        window.open(mapUrl, "_blank");
    };

    return (
        <footer className="bg-primary text-light py-3">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                <h4>Información de contacto</h4>
                <p>Correo electrónico: info@example.com</p>
                <p>Teléfono: 123-456-7890</p>
                <div>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-2">
                    <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-2">
                    <i className="bi bi-instagram"></i>
                    </a>

                    <i className="bi bi-geo-alt" style={{ cursor: "pointer" }} onClick={openGoogleMaps}></i>
                    
                </div>
                </div>
                <div className="col-md-4">
                <h4>Términos y condiciones</h4>
                <Link to="/terminos" className="text-light text-decoration-none">
                    Ver términos y condiciones
                </Link>
                </div>
                <div className="col-md-4">
                <h4>Arrepentimiento de compra</h4>
                <button className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#arrepentimientoModal">
                    Arrepentirse de la compra
                </button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12 text-center">
                <p>&copy; {new Date().getFullYear()} Tu Librito</p>
                </div>
            </div>
            </div>

            {/* Modal de arrepentimiento de compra */}
            <div className="modal fade" id="arrepentimientoModal" tabIndex="-1" aria-labelledby="arrepentimientoModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                {/* Contenido del modal */}
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;