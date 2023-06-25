import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import style from "./About.module.css";
import { Modal, Button } from "react-bootstrap";

const About = () => {
  // local storage
  const lSFormContact = () => {
    let datos = localStorage.getItem("FormContact");
    if (datos) {
      return JSON.parse(datos);
    } else {
      return {
        user_name: "sdf",
        user_email: "sdf",

        message: "sdf",
      };
    }
  };


  const [stateForm, setStateForm] = useState(lSFormContact());

  const handleChangeAbout = (event) => {
    setStateForm({
      ...stateForm,
      [event.target.name]: event.target.value,
    });
  };

  // validation and modal messages
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const form = useRef();

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const handleShowSuccessModal = () => {
    setShowSuccessModal(true);
  };

  const handleShowErrorModal = () => {
    setShowErrorModal(true);
  };

  const validateForm = () => {
    const errors = {};

    if (!form.current.user_name.value.trim()) {
      errors.user_name = "El nombre es requerido";
    }

    if (!form.current.user_email.value.trim()) {
      errors.user_email = "El email es requerido";
    }

    if (!form.current.message.value.trim()) {
      errors.message = "El mensaje es requerido";
    }

    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    emailjs
      .sendForm(
        "service_brws95f",
        "template_1eg39fw",
        form.current,
        "CWYOCpB2Bd7P4TLB6"
      )
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        form.current.reset(); // Restablece los valores del formulario
        setFormErrors({});
        handleShowSuccessModal(); // Muestra el modal de éxito
      })
      .catch((error) => {
        console.log(error.text);
        handleShowErrorModal(); // Muestra el modal de error
      });
  };

  const localAddress = "Dirección del local"; // Inserta aquí la dirección del local

  const openGoogleMaps = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      localAddress
    )}`;
    window.open(mapUrl, "_blank");
  };

  useEffect(() => {
    localStorage.setItem("FormContact", JSON.stringify(stateForm));
  }, [stateForm]);
  return (
    <div
      className="container text-start"
      style={{ minHeight: "70vh", marginTop: "15px" }}
    >
      <div className="row">
        <div className="col-md-6">
          <h2 style={{ color: "#191919" }}>Contacto</h2>

          <form ref={form} onSubmit={sendEmail} className={style.form}>
            <div className={style.formGroup}>
              <label htmlFor="user_name" className={style.formLabel}>
                Nombre:
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className={style.formControl}
                value={stateForm.user_name}
                onChange={handleChangeAbout}
								placeholder="Ingrese su nombre"
              />
              {formErrors.user_name && (
                <div className={style.error}>{formErrors.user_name}</div>
              )}
            </div>
            <div className={style.formGroup}>
              <label htmlFor="user_email" className={style.formLabel}>
                Email:
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className={style.formControl}
                value={stateForm.user_email}
                onChange={handleChangeAbout}
								placeholder="Ingrese su Email"
              />
              {formErrors.user_email && (
                <div className={style.error}>{formErrors.user_email}</div>
              )}
            </div>
            <div className={style.formGroup}>
              <label htmlFor="message" className={style.formLabel}>
                Mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                className={style.formControl}
                value={stateForm.message}
                onChange={handleChangeAbout}
              />
              {formErrors.message && (
                <div className={style.error}>{formErrors.message}</div>
              )}
            </div>
            {
              stateForm.user_name.length > 2 &&
              stateForm.user_email.length > 2 &&
              stateForm.message.length > 2 &&
              < button type="submit" className={style.btnPrimary}>
                Enviar
              </button>
            }

          </form>

          <Modal
            show={showSuccessModal}
            onHide={handleCloseSuccessModal}
            centered
          >
            <Modal.Body closeButton>
              <div className="d-flex justify-content-between align-items-center">
                <div> ✔ Tu mensaje ha sido enviado exitosamente.</div>
                <Button variant="secondary" onClick={handleCloseSuccessModal}>
                  Cerrar
                </Button>
              </div>
            </Modal.Body>
          </Modal>
          <Modal show={showErrorModal} onHide={handleCloseErrorModal} centered>
            <Modal.Body closeButton>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  {" "}
                  ❌ Hubo un error al enviar tu mensaje. Por favor, inténtalo
                  nuevamente más tarde.
                </div>
                <Button variant="secondary" onClick={handleCloseErrorModal}>
                  Cerrar
                </Button>
              </div>
            </Modal.Body>
          </Modal>
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
                <i
                  className="bi bi-instagram text-purple cursor-pointer"
                  style={{ color: "purple" }}
                >
                  {" "}
                  Instagram
                </i>
              </a>
            </li>
            <li className="list-inline-item">
              <i
                className="bi bi-geo-alt text-success"
                style={{ cursor: "pointer", color: "#191919" }}
                onClick={openGoogleMaps}
              >
                {" "}
                Google Maps
              </i>
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default About;
