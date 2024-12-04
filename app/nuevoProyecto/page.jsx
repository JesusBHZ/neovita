"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Importamos el hook para redirección

export default function FormularioProyecto() {
  const [tipoEnergia, setTipoEnergia] = useState("");
  const [capacidadInstalar, setCapacidadInstalar] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter(); // Hook para manejar la redirección

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Verificar que todos los campos tengan datos
    if (!tipoEnergia || !capacidadInstalar || !presupuesto || !descripcion) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    // Aquí puedes agregar la lógica para procesar los datos
    setSuccess("Formulario enviado con éxito.");
    // Si todo es correcto, puedes redirigir al usuario o hacer otras acciones
    // router.push("/home"); // Descomenta si quieres redirigir
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Formulario de Proyecto</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Tipo de Energía:</label>
          <input
            type="text"
            value={tipoEnergia}
            onChange={(e) => setTipoEnergia(e.target.value)}
            required
            style={{ padding: "8px", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Capacidad a Instalar:</label>
          <input
            type="number"
            value={capacidadInstalar}
            onChange={(e) => setCapacidadInstalar(e.target.value)}
            required
            style={{ padding: "8px", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Presupuesto:</label>
          <input
            type="number"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
            required
            style={{ padding: "8px", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Descripción del Proyecto:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            style={{ padding: "8px", width: "100%", minHeight: "100px" }}
          />
        </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
          onClick={() => router.push("/home")}
        >
          Cancelar
        </button>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#28A745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => router.push("/resultados")}
        >
         Crear Proyectos
        </button>
      </div>
    </div>
  );
}
