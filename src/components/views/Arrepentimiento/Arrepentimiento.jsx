import React, { useState } from "react";

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
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos al servidor o realizar alguna lógica adicional
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
    // Resetear los valores del formulario después de enviarlo
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
    <div className="container">
      <h1>Arrepentimiento de la compra</h1>
      <p>
        Si deseas arrepentirte de tu compra, por favor completa el siguiente formulario y nos pondremos en contacto contigo.
      </p>

      <form onSubmit={handleSubmit} className="text-start">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input type="text" id="nombre" name="nombre" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido:</label>
          <input type="text" id="apellido" name="apellido" className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="numeroDocumento" className="form-label">Número de documento:</label>
          <input type="text" id="numeroDocumento" name="numeroDocumento" className="form-control" value={numeroDocumento} onChange={(e) => setNumeroDocumento(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección:</label>
          <input type="text" id="direccion" name="direccion" className="form-control" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="piso" className="form-label">Piso:</label>
              <input type="text" id="piso" name="piso" className="form-control" value={piso} onChange={(e) => setPiso(e.target.value)} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="departamento" className="form-label">Departamento:</label>
              <input type="text" id="departamento" name="departamento" className="form-control" value={departamento} onChange={(e) => setDepartamento(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="codigoPostal" className="form-label">Código postal:</label>
          <input type="text" id="codigoPostal" name="codigoPostal" className="form-control" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="localidad" className="form-label">Localidad:</label>
          <input type="text" id="localidad" name="localidad" className="form-control" value={localidad} onChange={(e) => setLocalidad(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="provincia" className="form-label">Provincia:</label>
          <input type="text" id="provincia" name="provincia" className="form-control" value={provincia} onChange={(e) => setProvincia(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label>¿Recibiste tu pedido?</label>
          <div className="form-check">
            <input type="radio" id="recibido-si" name="recibido" value="si" checked={recibido} onChange={() => setRecibido(true)} />
            <label htmlFor="recibido-si" className="form-check-label">Sí</label>
          </div>
          <div className="form-check">
            <input type="radio" id="recibido-no" name="recibido" value="no" checked={!recibido} onChange={() => setRecibido(false)} />
            <label htmlFor="recibido-no" className="form-check-label">No</label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="modoDevolucion" className="form-label">Modo de devolución:</label>
          <select id="modoDevolucion" name="modoDevolucion" className="form-select" value={modoDevolucion} onChange={(e) => setModoDevolucion(e.target.value)} required>
            <option value="">Selecciona una opción</option>
            <option value="Correo">Correo</option>
            <option value="Retiro en domicilio">Retiro en domicilio</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="motivoDevolucion" className="form-label">Motivo de devolución:</label>
          <select id="motivoDevolucion" name="motivoDevolucion" className="form-select" value={motivoDevolucion} onChange={(e) => setMotivoDevolucion(e.target.value)} required>
            <option value="">Selecciona una opción</option>
            <option value="Producto defectuoso">Producto defectuoso</option>
            <option value="Producto incorrecto">Producto incorrecto</option>
            <option value="Cambio de opinión">Cambio de opinión</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="comentario" className="form-label">Comentario:</label>
          <textarea id="comentario" name="comentario" className="form-control" value={comentario} onChange={(e) => setComentario(e.target.value)} rows="3" required></textarea>
        </div>

        <div className="text-start">
          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  )
};

export default Arrepentimiento;
