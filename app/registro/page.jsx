"use client";
import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { database } from "../lib/firebase";
import { useRouter } from "next/navigation";

export default function CreateAccountForm() {
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [direccion, setDireccion] = useState("");
  const [representante, setRepresentante] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const generarIdAleatorio = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const subirDato = async (id, correo, nombreEmpresa, telefono, contrasena, direccion, representante) => {
    try {
      const userRef = ref(database, "provedores/" + id);
      await set(userRef, {
        correo,
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

    if (!correo || !nombreEmpresa || !telefono || !contrasena || !direccion || !representante) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      const idAleatorio = generarIdAleatorio();
      await subirDato(idAleatorio, correo, nombreEmpresa, telefono, contrasena, direccion, representante);
      setSuccess(true);
      setError(null);
      limpiarCampos();
      alert("Registro exitoso. Por favor, inicia sesión.");

    // Redirigir al usuario a la página de inicio de sesión
      router.push("/login"); // Redirect after success
    } catch (error) {
      setError("Hubo un error al subir los datos.");
    }
  };

  const limpiarCampos = () => {
    setNombreEmpresa("");
    setCorreo("");
    setTelefono("");
    setContrasena("");
    setDireccion("");
    setRepresentante("");
  };

  return (
    <div style={styles.container}>
      <header style={styles.navbar}>
        <div style={styles.logo}>N</div>
        <nav style={styles.navLinks}>
          <a href="#" style={styles.navLink}>
            Home
          </a>
          <a href="#" style={styles.navLink}>
            About
          </a>
          <a href="#" style={styles.navLink}>
            Contact
          </a>
        </nav>
        <div>
          <button style={styles.navButton}>Log In</button>
          <button style={styles.navButton}>Sign Up</button>
        </div>
      </header>
      <form onSubmit={handleSubmit}>
        <div style={styles.formContainer}>
          <h1 style={styles.title}>Crear cuenta</h1>
          <p style={styles.subtitle}>
            ¿Tienes una cuenta? <a href="/inicio" style={styles.link}>Inicia sesión</a>
          </p>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>¡Cuenta creada exitosamente!</p>}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nombre de empresa</label>
            <input
              type="text"
              value={nombreEmpresa}
              onChange={(e) => setNombreEmpresa(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Correo electrónico</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Teléfono</label>
            <input
              type="number"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nombre del representante</label>
            <input
              type="text"
              value={representante}
              onChange={(e) => setRepresentante(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Contraseña</label>
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Dirección</label>
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Crear cuenta
          </button>
        </div>
      </form>
    </div>
  );
}
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#0F3D47",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#4CAF50",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  navButton: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    marginLeft: "10px",
    cursor: "pointer",
  },
  formContainer: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#4CAF50",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#fff",
  },
  link: {
    color: "#153542",
    textDecoration: "underline",
    fontWeight: "bold",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#fff",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "2px solid #fff",
    borderRadius: "15px",
    fontSize: "14px",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    marginTop: "20px",
    backgroundColor: "#153542",
    color: "#fff",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
    fontSize: "16px",
  },
};