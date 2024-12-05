"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ReactMarkdown from "react-markdown";

const ProjectScoresChart = () => {
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState(null);
  const [moredata, setMoredata] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Register Chart.js components
      ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

      

        let vari = localStorage.getItem("response");
        let vari2 = JSON.parse(vari)


        console.log("vari", JSON.parse(vari2.values));
        

        setMoredata(JSON.parse(vari2.response));
        setProjectData(JSON.parse(vari2.values));
      
    }
  }, []);

  // Error handling
  if (error) {
    return (
      <div
        style={{
          color: "red",
          padding: "20px",
          border: "1px solid red",
          borderRadius: "5px",
        }}
      >
        <h2>Error Loading Project Data</h2>
        <p>{error}</p>
        <p>Please ensure the data is correctly stored in localStorage.</p>
      </div>
    );
  }

  // If no data is available, show loading
  if (!projectData) return <p>Cargando datos del proyecto...</p>;

  // Safety check for project_scores
  const projectScores = projectData.project_scores || {};

  // Prepare chart data
  const chartData = {
    labels: [
      "Factibilidad Técnica",
      "Impacto Ambiental",
      "Viabilidad Económica",
      "Nivel de Riesgo",
      "Índice de Sostenibilidad",
      "Puntuación General",
    ],
    datasets: [
      {
        label: "Puntuaciones del Proyecto",
        data: [
          projectScores.technical_feasibility || 0,
          projectScores.environmental_impact || 0,
          projectScores.economic_viability || 0,
          projectScores.risk_level || 0,
          projectScores.sustainability_index || 0,
          projectScores.overall_score || 0,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Puntuaciones del Proyecto de Energía",
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.formattedValue}%`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Porcentaje (%)",
        },
      },
    },
  };

  return (
    <div style={{ width: "90%", margin: "0 auto", padding: "20px" }}>
      <Bar data={chartData} options={options} />

      {/* Additional Project Details */}
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#f4f4f4",
          borderRadius: "8px",
          color: "black",
        }}
      >
        <h1>
          <strong>Detalles del Proyecto</strong>
        </h1>
        <p>
          <strong>Ubicación:</strong>{" "}
          {projectData.proyecto?.ubicacion || "No disponible"}
        </p>
        <p>
          <strong>Tipo de Terreno:</strong>{" "}
          {projectData.proyecto?.tipo_terreno || "No disponible"}
        </p>
        <p>
          <strong>Ecosistema Local:</strong>{" "}
          {projectData.proyecto?.ecosistema_local || "No disponible"}
        </p>
        <p>
          <strong>Uso Actual del Suelo:</strong>{" "}
          {projectData.proyecto?.uso_actual_suelo || "No disponible"}
        </p>

        <br />
        <h4
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#d2d0d0",
            padding: "8px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        >
          Análisis Técnico
        </h4>
        <ReactMarkdown
          style={{
            backgroundColor: "#fff",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginBottom: "20px",
            lineHeight: "1.6",
          }}
        >
          {moredata.analisis_tecnico || "No disponible"}
        </ReactMarkdown>
        <hr
          style={{
            border: "0",
            borderTop: "2px solid #ccc",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
        <h4
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#d2d0d0",
            padding: "8px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        >
          Impacto Ambiental
        </h4>
        <ReactMarkdown
          style={{
            backgroundColor: "#fff",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginBottom: "20px",
            lineHeight: "1.6",
          }}
        >
          {moredata.impacto_ambiental || "No disponible"}
        </ReactMarkdown>
        <hr
          style={{
            border: "0",
            borderTop: "2px solid #ccc",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
        <h4
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#d2d0d0",
            padding: "8px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        >
          Análisis Económico
        </h4>
        <ReactMarkdown
          style={{
            backgroundColor: "#fff",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginBottom: "20px",
            lineHeight: "1.6",
          }}
        >
          {moredata.analisis_economico || "No disponible"}
        </ReactMarkdown>
        <hr
          style={{
            border: "0",
            borderTop: "2px solid #ccc",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
        <h4
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#d2d0d0",
            padding: "8px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        >
          Factibilidad
        </h4>
        <ReactMarkdown
          style={{
            backgroundColor: "#fff",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginBottom: "20px",
            lineHeight: "1.6",
          }}
        >
          {moredata.factibilidad_detallada || "No disponible"}
        </ReactMarkdown>
        <hr
          style={{
            border: "0",
            borderTop: "2px solid #ccc",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
        <h4
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#d2d0d0",
            padding: "8px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        >
          Recomendaciones
        </h4>
        <ReactMarkdown
          style={{
            backgroundColor: "#fff",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginBottom: "20px",
            lineHeight: "1.6",
          }}
        >
          {moredata.recomendaciones || "No disponible"}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ProjectScoresChart;
