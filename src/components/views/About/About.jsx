import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import style from "./About.module.css"

const About = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_brws95f', 'template_1eg39fw', form.current, 'CWYOCpB2Bd7P4TLB6')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        form.current.reset(); // Restablece los valores del formulario
      })
      .catch((error) => {
        console.log(error.text);
      });
  };  

  const localAddress = "Dirección del local"; // Inserta aquí la dirección del local

  const openGoogleMaps = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      localAddress
    )}`;
    window.open(mapUrl, "_blank");
  };

  return (
    <div className="container text-start" style={{ minHeight: "70vh", marginTop:"15px" }}>
      <div className="row">
        <div className="col-md-6">
          <h2 style={{ color: "#191919" }}>Contacto</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="col-md-6">
          <h2 style={{ color: "#191919" }}>Horarios</h2>
          <p style={{ color: "#3F3F3F" }}>De Lunes a Sábado</p>
          <p style={{ color: "#3F3F3F" }}>8:00 hs a 19:00 hs</p>

          <h2 style={{ color: "#191919" }}>Información de ubicación</h2>
          <p style={{ color: "#3F3F3F" }}>Dirección: {localAddress}</p>
          <p style={{ color: "#3F3F3F" }}>Teléfono: Número de teléfono</p>

          <h2 style={{ color: "#191919" }}>Encontranos en nuestras redes</h2>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="enlace-a-red-social-1" className="text-decoration-none">
                <i
                  className="bi bi-facebook text-primary cursor-pointer"
                  onClick={() => window.open("enlace-a-red-social-1", "_blank")}
                  style={{ color: "#191919" }}
                >
                  {" "}
                  Facebook
                </i>
              </a>
            </li>
            <li className="list-inline-item">
                <a href="enlace-a-red-social-2" className="text-decoration-none">
                  <i className="bi bi-instagram text-purple cursor-pointer" style={{ color: "purple" }}>
                  {" "}
                  Instagram
                  </i>
                </a>
            </li>
            <li className="list-inline-item">
              <i className="bi bi-geo-alt text-success" style={{ cursor: "pointer", color: "#191919" }} onClick={openGoogleMaps}>
                {" "}
                Google Maps
              </i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
