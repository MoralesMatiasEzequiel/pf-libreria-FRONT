import React, { useState, useEffect } from "react";
import style from "./Arrepentimiento.module.css";

import emailjs from "emailjs-com";
import { Button, Modal } from "react-bootstrap";

const Arrepentimiento = () => {

  // local storage
  const lSformRegret = () => {
    let datos = localStorage.getItem("formRegret");
    if (datos) {
      return JSON.parse(datos);
    } else {
      return {

        name: "",
        lastName: "",
        email: "",
        phone: "",
        document: "",
        address: "",
        floor: "",
        department: "",
        postalCode: "",
        location: "",
        province: "",
        received: false,
        returnMode: "",
        returnReason: "",

        comment: "",
      };
    }
  };
  const [formRegret, setformRegret] = useState(lSformRegret());

  const handleChangeRegret = (event) => {
    setformRegret({
      ...formRegret,
      [event.target.name]: event.target.value,
    });

  };

  const setRecibido = (valu) => {
    setformRegret({
      ...formRegret,
      received: valu,

    });
  };

  //modal
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async () => {
    try {
      const result = await emailjs.sendForm(
        "service_brws95f",
        "template_f9465ua",
        "#form",
        "CWYOCpB2Bd7P4TLB6"
      );
      console.log(result.text);
      console.log("Correo electrónico enviado");
      setShowSuccessModal(true);
    } catch (error) {
      console.log(error.text);
      setErrorMessage(
        "Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente."
      );
      setShowErrorModal(true);

    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Formulario enviado:", formRegret);


    sendEmail(); // Enviar el correo electrónico


    // Restablecer los valores del formulario
    setformRegret({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      document: "",
      address: "",
      floor: "",
      department: "",
      postalCode: "",
      location: "",
      province: "",
      received: false,
      returnMode: "",
      returnReason: "",

      comment: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("formRegret", JSON.stringify(formRegret));

  }, [formRegret]);

  return (
    <div className={style.superContainer}>
      <h1 className={style.title}>Arrepentimiento de la compra</h1>
      <p className={style.introText}>
        Si deseas arrepentirte de tu compra, por favor completa el siguiente
        formulario y nos pondremos en contacto contigo.
      </p>

      <form onSubmit={handleSubmit} className={style.formArr} id="form">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Nombre"
                value={formRegret.name}
                onChange={handleChangeRegret}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
                placeholder="Apellido"
                value={formRegret.lastName}
                onChange={handleChangeRegret}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formRegret.email}
                onChange={handleChangeRegret}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="Numero de teléfono"
                value={formRegret.phone}
                onChange={handleChangeRegret}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                id="document"
                name="document"
                className="form-control"
                placeholder="Número de Documento"
                value={formRegret.document}
                onChange={handleChangeRegret}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                placeholder="Dirección"
                value={formRegret.address}
                onChange={handleChangeRegret}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                id="floor"
                name="floor"
                className="form-control"
                placeholder="Piso"
                value={formRegret.floor}
                onChange={handleChangeRegret}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                id="department"
                name="department"
                className="form-control"
                placeholder="Departamento"
                value={formRegret.department}
                onChange={handleChangeRegret}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                className="form-control"
                placeholder="Código Postal"
                value={formRegret.postalCode}
                onChange={handleChangeRegret}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                id="location"
                name="location"
                className="form-control"
                placeholder="Localidad"
                value={formRegret.location}
                onChange={handleChangeRegret}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                id="province"
                name="province"
                className="form-control"
                placeholder="Provincia"
                value={formRegret.province}
                onChange={handleChangeRegret}
                required
              />
            </div>

            <div className="mb-3 text-start">

              <label
                htmlFor="recibido"
                className={style.formLabel}
                style={{ color: "#3F3F3F" }}
              >
                ¿Recibiste tu pedido?
              </label>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="received-yes"
                  name="received"
                  className="form-check-input"
                  onChange={() => setRecibido(true)}
                  required
                />

                <label
                  htmlFor="recibido-yes"
                  className="form-check-label"
                  style={{ color: "#3F3F3F" }}
                >

                  Sí
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="received-no"
                  name="received"
                  className="form-check-input"
                  onChange={() => setRecibido(false)}
                  required
                />

                <label
                  htmlFor="recibido-no"
                  className="form-check-label"
                  style={{ color: "#3F3F3F" }}
                >

                  No
                </label>
              </div>
            </div>

            <div className="mb-3 text-start">
              <label htmlFor="modoDevolucion">Modo de devolución:</label>
              <select
                id="returnMode"
                name="returnMode"
                className="form-control"
                value={formRegret.returnMode}
                onChange={handleChangeRegret}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Correo">Correo</option>
                <option value="Retiro en tienda">Retiro en tienda</option>
              </select>
            </div>

            <div className="mb-3 text-start">
              <label htmlFor="motivoDevolucion">Motivo de devolución:</label>
              <select
                id="returnReason"
                name="returnReason"
                value={formRegret.returnReason}
                className="form-control"
                onChange={handleChangeRegret}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Roto">Roto</option>
                <option value="Error">Error</option>
              </select>
            </div>

            <div className="mb-3">
              <textarea
                id="comment"
                name="comment"
                placeholder="Comentario"
                className="form-control"
                value={formRegret.comment}
                onChange={handleChangeRegret}
              ></textarea>
            </div>
          </div>
        </div>
        {
          formRegret.name.length > 2 &&
          formRegret.lastName.length > 2 &&
          formRegret.email.length > 2 &&
          formRegret.phone.length > 2 &&
          formRegret.document.length > 2 &&
          formRegret.address.length > 2 &&
          formRegret.location.length > 2 &&
          formRegret.province.length > 2 &&
          formRegret.returnMode.length > 2 &&
          formRegret.returnReason.length > 2 &&
          formRegret.comment.length > 2 &&

          <Button type="submit" className={style.btnPrimary}>
            Enviar
          </Button>
        }

      </form>
      
			<Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
			<Modal.Body closeButton>
              <div className="d-flex justify-content-between align-items-center">
                <div> ✔ ¡El formulario se envió correctamente!.</div>
                <Button className={style.btnPrimary} onClick={() => setShowSuccessModal(false)}>
                  Cerrar
                </Button>
              </div>
            </Modal.Body>
						</Modal>


      
			<Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
            <Modal.Body closeButton>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  {" "}
                  ❌ Hubo un error al enviar tu Formulario. Por favor, inténtalo
                  nuevamente más tarde.
                </div>
                <Button className={style.btnPrimary} onClick={() => setShowErrorModal(false)}>
                  Cerrar
                </Button>
              </div>
            </Modal.Body>
          </Modal>
    </div>

  );
};

export default Arrepentimiento;
