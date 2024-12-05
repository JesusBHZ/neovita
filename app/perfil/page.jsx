"use client"; // Esto indica que el componente es un Client Component

import "../perfil.css";
import React, { useState, useEffect } from "react";
import { ref, set, get } from "firebase/database";
import { database } from "../lib/firebase";
import { useRouter } from "next/navigation";


// Componente para los campos del perfil
const CampoPerfil = ({ label, id, value, type = "text", onChange, disabled }) => (
  <div className="campo">
    <label htmlFor={id}>{label}:</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={label}
      required={!disabled}
    />
  </div>
);

export default function Perfil() {
  const [id, setId] = useState(null);
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [direccion, setDireccion] = useState("");
  const [representante, setRepresentante] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  // Cargar datos de Firebase
  const cargarDatos = async (id) => {
    try {
      const userRef = ref(database, "provedores/" + id);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        setCorreo(data.correo || "");
        setNombreEmpresa(data.nombreEmpresa || "");
        setTelefono(data.telefono || "");
        setContrasena(data.contrasena || "");
        setDireccion(data.direccion || "");
        setRepresentante(data.representante || "");
        setError(null);
      } else {
        setError("No se encontraron datos para este ID.");
      }
    } catch (e) {
      console.error("Error al cargar los datos:", e);
      setError("Hubo un error al cargar los datos.");
    }
  };

  useEffect(() => {
    // Obtener el id de localStorage
    const storedId = localStorage.getItem("proveedorID");
    if (storedId) {
      setId(storedId);
      cargarDatos(storedId);
    } else {
      setError("No se encontró el ID del proveedor.");
    }
  }, []);

  // Actualizar datos en Firebase
  const subirDato = async (id, correo, nombreEmpresa, telefono, contrasena, direccion, representante) => {
    try {
      const userRef = ref(database, "provedores/" + id);
      await set(userRef, {
        id,
        correo,
        nombreEmpresa,
        telefono,
        contrasena,
        direccion,
        representante,
        fechaActualizacion: new Date().toISOString(),
      });
      setSuccess(true);
      setError(null);
    } catch (e) {
      console.error("Error al actualizar los datos:", e);
      setError("Hubo un error al actualizar los datos.");
    }
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!correo || !nombreEmpresa || !telefono || !contrasena || !direccion || !representante) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      await subirDato(id, correo, nombreEmpresa, telefono, contrasena, direccion, representante);
      setSuccess(true);
      setError(null);
      alert("Datos actualizados correctamente.");
    } catch (error) {
      setError("Hubo un error al actualizar los datos.");
    }
  };

  // Redirigir al inicio
  const handleRegresar = () => {
    router.push("/home");
  };

  return (
    <div className="perfil-container">
      <header className="header">
        <h1>Perfil</h1>
      </header>

      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <CampoPerfil
          label="Id"
          id="id"
          value={id || ""}
          onChange={(e) => setId(e.target.value)}
          disabled={true}
        />
        <CampoPerfil
          label="Correo"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          type="email"
        />
        <CampoPerfil
          label="Nombre de la empresa"
          id="nombre-empresa"
          value={nombreEmpresa}
          onChange={(e) => setNombreEmpresa(e.target.value)}
        />
        <CampoPerfil
          label="Teléfono"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <CampoPerfil
          label="Contraseña"
          id="contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          type="password"
        />
        <CampoPerfil
          label="Dirección"
          id="direccion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <CampoPerfil
          label="Nombre del representante"
          id="representante"
          value={representante}
          onChange={(e) => setRepresentante(e.target.value)}
        />

        {/* Botones */}
        <button type="submit">Actualizar</button>
        <button type="button" onClick={handleRegresar}>
          Regresar
        </button>
      </form>

      {/* Mensajes de error o éxito */}
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Datos actualizados correctamente.</p>}
    </div>
  );
}
