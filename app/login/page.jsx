"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { database } from "../lib/firebase";
import { ref, get } from "firebase/database";

const LoginForm = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const formatEmailForFirebase = (email) => email.replace(/\./g, "_");

  const comprobarCredenciales = async (correo, contrasena) => {
    try {
      const proveedoresRef = ref(database, "provedores/");
      const snapshot = await get(proveedoresRef);

      if (snapshot.exists()) {
        const proveedores = snapshot.val();
        for (const key in proveedores) {
          const userData = proveedores[key];
          if (userData.correo === correo && userData.contrasena === contrasena) {
            return { id: key, correo };
          }
        }
        throw new Error("Usuario o contraseña incorrectos.");
      } else {
        throw new Error("No hay proveedores registrados.");
      }
    } catch (e) {
      throw e;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!correo || !contrasena) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      const proveedor = await comprobarCredenciales(correo, contrasena);
      if (proveedor) {
        setSuccess("Inicio de sesión exitoso.");
        localStorage.setItem("proveedorID", proveedor.id);
        localStorage.setItem("proveedorCorreo", proveedor.correo);
        router.push("/home");
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.navbar}>
        <div style={styles.logo}>N</div>
        <nav style={styles.navLinks}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>About</a>
          <a href="#" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <div style={styles.loginContainer}>
        <h1 style={styles.title}>Inicio de Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Correo Electrónico:</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Contraseña:</label>
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Iniciar Sesión</button>
          <button
          style={styles.button}
          onClick={() => router.push("/registro")}
        >
          Registrarse
        </button>        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
    </div>
  );
};

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
  loginContainer: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#153542",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    color: "#000", // Color negro para el texto
    backgroundColor: "#fff", // Fondo blanco para contraste
  },
  
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default LoginForm;