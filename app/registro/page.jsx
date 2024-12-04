"use client";
import { useState } from "react";
import { ref, set } from "firebase/database";
import { database } from "../lib/firebase";

export default function SubirUsuario() {
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [direccion, setDireccion] = useState("");
  const [representante, setRepresentante] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Función para subir los datos
  const subirDato = async (correo, nombreEmpresa, telefono, contrasena, direccion, representante) => {
    try {
      // Usar el correo como ID en la base de datos
      const userRef = ref(database, "provedores/" + correo.replace(/\./g, "_")); 
      // Reemplaza '.' en el correo para evitar problemas con Firebase
      await set(userRef, {
        nombreEmpresa,
        telefono,
        contrasena,
        direccion,
        representante,
        fechaCreacion: new Date().toISOString(),
      });
      console.log("Usuario agregado exitosamente");
    } catch (e) {
      console.error("Error al agregar usuario:", e);
      throw e;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación para asegurarse de que no haya campos vacíos
    if (!correo || !nombreEmpresa || !telefono || !contrasena || !direccion || !representante) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      // Llamada a la función para subir los datos
      await subirDato(correo, nombreEmpresa, telefono, contrasena, direccion, representante);
      setSuccess(true); // Mostrar mensaje de éxito
      setError(null); // Limpiar mensajes de error
      limpiarCampos(); // Limpiar el formulario
    } catch (error) {
      setError("Hubo un error al subir los datos.");
    }
  };

  // Función para limpiar los campos del formulario
  const limpiarCampos = () => {
    setNombreEmpresa("");
    setCorreo("");
    setTelefono("");
    setContrasena("");
    setDireccion("");
    setRepresentante("");
  };

  return (
    <div>
      <h1>Subir Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la empresa:</label>
          <input
            type="text"
            value={nombreEmpresa}
            onChange={(e) => setNombreEmpresa(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nombre del representante:</label>
          <input
            type="text"
            value={representante}
            onChange={(e) => setRepresentante(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>
        <button type="submit">Subir</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Usuario subido con éxito!</p>}
    </div>
  );
}
