"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [proyectos, setProyectos] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Función para obtener los proyectos desde la API
  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const response = await fetch("/proyectos");
        if (!response.ok) {
          throw new Error("Error al obtener los proyectos.");
        }
        const data = await response.json();
        setProyectos(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProyectos();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Home</h1>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
        onClick={() => router.push("/nuevoProyecto")}
      >
        Crear Nuevo Proyecto
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
