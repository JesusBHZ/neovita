"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Importamos el hook para redirección
import { database } from "../lib/firebase";
import { ref, get, child } from "firebase/database";

// Función para formatear correos electrónicos
const formatEmailForFirebase = (email) => {
  return email.replace(/\./g, "_");
};

export default function LoginUsuario() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter(); // Hook para manejar la redirección

  // Función para comprobar las credenciales del proveedor
  const comprobarCredenciales = async (correo, contrasena) => {
    try {
      const formattedEmail = formatEmailForFirebase(correo);
      const proveedoresRef = ref(database, "provedores/");
      const snapshot = await get(proveedoresRef);

      if (snapshot.exists()) {
        // Iteramos sobre todos los proveedores y verificamos si el correo y contraseña coinciden
        for (const key in snapshot.val()) {
          const userData = snapshot.val()[key];
          if (userData.correo === correo && userData.contrasena === contrasena) {
            return { id: key, correo }; // Devuelve el id y correo del proveedor
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
        // Guardamos el ID y correo en localStorage
        localStorage.setItem("proveedorID", proveedor.id);
        localStorage.setItem("proveedorCorreo", proveedor.correo);
        router.push("/home"); // Redirigir al usuario a la página de inicio
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h1>Inicio de Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="text"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
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
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}
