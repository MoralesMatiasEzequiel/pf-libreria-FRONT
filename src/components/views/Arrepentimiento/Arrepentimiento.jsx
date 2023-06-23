import React, { useState } from "react";
import style from "./Arrepentimiento.module.css";
import emailjs from 'emailjs-com';

const sendEmail = async () => {
  try {
    const result = await emailjs.sendForm('service_brws95f', 'template_f9465ua', '#form', 'CWYOCpB2Bd7P4TLB6');
    console.log(result.text);
    console.log("Correo electrónico enviado");
  } catch (error) {
    console.log(error.text);
  }
};

const Arrepentimiento = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [piso, setPiso] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [provincia, setProvincia] = useState("");
  const [recibido, setRecibido] = useState(false);
  const [modoDevolucion, setModoDevolucion] = useState("");
  const [motivoDevolucion, setMotivoDevolucion] = useState("");
  const [comentario, setComentario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Formulario enviado:", {
      nombre,
      apellido,
      email,
      telefono,
      numeroDocumento,
      direccion,
      piso,
      departamento,
      codigoPostal,
      localidad,
      provincia,
      recibido,
      modoDevolucion,
      motivoDevolucion,
      comentario,
    });
    sendEmail(); // Enviar el correo electrónico
    // Restablecer los valores del formulario
    setNombre("");
    setApellido("");
    setEmail("");
    setTelefono("");
    setNumeroDocumento("");
    setDireccion("");
    setPiso("");
    setDepartamento("");
    setCodigoPostal("");
    setLocalidad("");
    setProvincia("");
    setRecibido(false);
    setModoDevolucion("");
    setMotivoDevolucion("");
    setComentario("");
  };


  return (
    <div className={style.superContainer}>
      <h1 className={style.title}>Arrepentimiento de la compra</h1>
      <p className={style.introText}>
        Si deseas arrepentirte de tu compra, por favor completa el siguiente formulario y nos pondremos en contacto contigo.
      </p>

      <form onSubmit={handleSubmit} className={style.formArr} id="form">
      <div className="row">
      <div className="col-md-6">
          <div className="mb-3">
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-control"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              id="apellido"
              name="apellido"
              className="form-control"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              id="telefono"
              name="telefono"
              className="form-control"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              id="numeroDocumento"
              name="numeroDocumento"
              className="form-control"
              placeholder="Número de Documento"
              value={numeroDocumento}
              onChange={(e) => setNumeroDocumento(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              id="direccion"
              name="direccion"
              className="form-control"
              placeholder="Dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              id="piso"
              name="piso"
              className="form-control"
              placeholder="Piso"
              value={piso}
              onChange={(e) => setPiso(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              id="departamento"
              name="departamento"
              className="form-control"
              placeholder="Departamento"
              value={departamento}
              onChange={(e) => setDepartamento(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <input
              type="text"
              id="codigoPostal"
              name="codigoPostal"
              className="form-control"
              placeholder="Código Postal"
              value={codigoPostal}
              onChange={(e) => setCodigoPostal(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              id="localidad"
              name="localidad"
              className="form-control"
              placeholder="Localidad"
              value={localidad}
              onChange={(e) => setLocalidad(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              id="provincia"
              name="provincia"
              className="form-control"
              placeholder="Provincia"
              value={provincia}
              onChange={(e) => setProvincia(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="recibido" className={style.formLabel} style={{ color: "#3F3F3F"}}>
              ¿Recibiste tu pedido?
            </label>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="recibido-yes"
                name="recibido"
                className="form-check-input"
                value="Sí"
                checked={recibido}
                onChange={() => setRecibido(true)}
                required
              />
              <label htmlFor="recibido-yes" className="form-check-label" style={{ color: "#3F3F3F" }}>
                Sí
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="recibido-no"
                name="recibido"
                className="form-check-input"
                value="No"
                checked={!recibido}
                onChange={() => setRecibido(false)}
                required
              />
              <label htmlFor="recibido-no" className="form-check-label" style={{ color: "#3F3F3F" }}>
                No
              </label>
            </div>
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="modoDevolucion">Modo de devolución:</label>
            <select
              id="modoDevolucion"
              name="modoDevolucion"
              className="form-control"
              value={modoDevolucion}
              onChange={(e) => setModoDevolucion(e.target.value)}
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
              id="motivoDevolucion"
              name="motivoDevolucion"
              value={motivoDevolucion}
              className="form-control"
              onChange={(e) => setMotivoDevolucion(e.target.value)}
              required
            >
              <option value="">Seleccione una opción</option>
              <option value="Roto">Roto</option>
              <option value="Error">Error</option>
            </select>
          </div>

          <div className="mb-3">
            <textarea
              id="comentario"
              name="comentario"
              placeholder="Comentario"
              className="form-control"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>

        <button type="submit" className={`${style.btnPrimary}`}>Enviar</button>
      </form>
    </div>

  );
};

export default Arrepentimiento;
