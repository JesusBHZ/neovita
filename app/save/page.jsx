"use client"
import { useState } from "react";
import { subirDato } from "../lib/firebase";
import { database } from "../lib/firebase";
import { ref, set } from "firebase/database";
export default function SubirUsuario() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const subirDato = async (id, nombre, edad) => {
    try {
      const userRef = ref(database, "usuarios/" + id);  // 'usuarios' es la colección
      await set(userRef, {
        nombre: nombre,
        edad: edad,
        fechaCreacion: new Date().toISOString(),
      });
      console.log("Usuario agregado exitosamente");
    } catch (e) {
      console.error("Error al agregar usuario:", e);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !edad || !id) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    try {
      await subirDato(id, nombre, parseInt(edad));
      setSuccess(true);
      setError(null);
    } catch (error) {
      setError("Hubo un error al subir los datos.");
    }
  };

  return (
    <div>
      <h1>Subir Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID de Usuario:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Edad:</label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
          />
        </div>
        <button type="submit">Subir</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p>Usuario subido con éxito!</p>}
    </div>
  );
}
