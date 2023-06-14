import React from "react";

const About = () => {
  const localAddress = "Dirección del local"; // Inserta aquí la dirección del local

  const openGoogleMaps = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      localAddress
    )}`;
    window.open(mapUrl, "_blank");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Formulario de contacto</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre:</label>
              <input type="text" id="nombre" name="nombre" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" id="email" name="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Información de ubicación</h2>
          <p>Dirección: {localAddress}</p>
          <p>Teléfono: Número de teléfono</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="enlace-a-red-social-1" className="text-decoration-none">
                <i className="bi bi-facebook" onClick={() => window.open("enlace-a-red-social-1", "_blank")}> Facebook</i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="enlace-a-red-social-2" className="text-decoration-none">
                <i className="bi bi-instagram" onClick={() => window.open("enlace-a-red-social-2", "_blank")}> Instagram</i>
              </a>
            </li>
            <li className="list-inline-item">
              <i className="bi bi-geo-alt" onClick={openGoogleMaps}> Google Maps</i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;