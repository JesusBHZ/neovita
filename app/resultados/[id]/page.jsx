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

      // Example of a stored response (replace with actual localStorage call)
      const storedResponse = {
        proyecto: {
          tipo_energia: "Desconocido",
          descripcion: "Desconocido",
          ubicacion: "Lat: 20.1130737, Lng: -98.3910127",
          tipo_terreno: "Rocoso, Tamaño del terreno: 78.0 hectáreas",
          tamano_terreno: 78.0,
          suministro_energia_actual: "67",
          acceso_red_electrica: false,
          distancia_red_electrica: 67.0,
          ecosistema_local: "Bosques",
          uso_actual_suelo: "Agrícola",
          consumo_energetico_actual: 67.0,
          usuario_final: "Comunidad",
        },
        factibilidad_preliminar: {
          checks: {
            distancia_red_aceptable: true,
            tamaño_terreno_adecuado: false,
            consumo_energetico_adecuado: false,
          },
          preliminary_feasible: false,
        },
        analisis_tecnico: "Análisis técnico no disponible",
        impacto_ambiental: "Impacto ambiental no disponible",
        analisis_economico: "Análisis económico no disponible",
        factibilidad_detallada: "Factibilidad no disponible",
        riesgos: "Riesgos no evaluados",
        recomendaciones: "Recomendaciones pendientes",
        project_scores: {
          technical_feasibility: 16.7,
          environmental_impact: 60,
          economic_viability: 85,
          risk_level: 50.0,
          sustainability_index: 70,
          overall_score: 56.339999999999996,
        },
      };

      const dataMOre = {
        proyecto: {
          tipo_energia: "Desconocido",
          descripcion: "Desconocido",
          ubicacion: "Lat: 20.1130737, Lng: -98.3910127",
          tipo_terreno: "Rocoso, Tamaño del terreno: 78.0 hectáreas",
          tamano_terreno: 78.0,
          suministro_energia_actual: "67",
          acceso_red_electrica: false,
          distancia_red_electrica: 67.0,
          ecosistema_local: "Bosques",
          uso_actual_suelo: "Agrícola",
          consumo_energetico_actual: 67.0,
          usuario_final: "Comunidad",
        },
        factibilidad_preliminar: {
          checks: {
            distancia_red_aceptable: true,
            tamaño_terreno_adecuado: false,
            consumo_energetico_adecuado: false,
          },
          preliminary_feasible: false,
        },
        analisis_tecnico:
          "**\n\n* **Tipo de energía**: El proyecto se basa en la energía solar, lo que es una excelente opción para la zona rural considerando la abundante luz solar disponible.\n* **Descripción del proyecto**: El proyecto implica la instalación de un sistema de energía solar con capacidad instalada de 491.73 MW y promedio de producción de energía de 252813.68 MWh. Esto equivale a una generación de energía aproximadamente el 37% del consumo actual.\n* **Ubicación**: La ubicación es ideal para la energía solar, ya que se encuentra en una zona con abundante luz solar. La latitud (20.1130737) y longitud (-98.3910127) son favorables para la captura de radianzas solares.\n* **Tipo de terreno**: El terreno rocoso puede presentar desafíos en términos de instalación y mantenimiento del sistema solar, pero se pueden tomar medidas para adaptar el proyecto a las características del terreno.\n\n**SECCIÓN 2:",
        impacto_ambiental:
          "**\n\n* **Descripción del impacto**: El proyecto puede tener un impacto positivo en la conservación del ecosistema local, ya que la energía solar es una fuente de energía limpia y renovable. La instalación de sistemas de almacenamiento de energía también puede ayudar a reducir la dependencia de las fuentes de energía no renovables.\n* **Impacto en el ecosistema**: El proyecto puede tener un impacto limitado en el ecosistema local, ya que se trata de una zona boscosa y no se espera que se afecte significativamente la biodiversidad del área.\n\n**SECCIÓN 3:",
        analisis_economico:
          "**\n\n* **Análisis financiero**: El costo inicial del proyecto es significativo, con un promedio de inversión inicial de USD $256192797.10 y una capacidad instalada de 491.73 MW. Sin embargo, la producción de energía a largo plazo puede ser más económica que la generación de energía tradicional.\n* **Rentabilidad**: La rentabilidad del proyecto depende de los precios de la electricidad en el mercado y las tarifas de transporte de energía. Es importante considerar que la energía solar es una fuente de energía costosa, pero también es una fuente de energía limpia y renovable.\n\n**SECCIÓN 4:",
        factibilidad_detallada:
          "**\n\n* **Viabilidad**: La viabilidad del proyecto depende de varios factores, incluyendo la disponibilidad de recursos financieros, el acceso a la red eléctrica y las regulaciones ambientales. Es importante considerar que el proyecto puede ser viable si se puede obtener financiamiento adecuado y cumplir con las regulaciones locales.\n\n**SECCIÓN 5:",
        riesgos:
          "**\n\n* **Identificación de riesgos**: Los principales riesgos para este proyecto son:\n + Desviaciones en la producción de energía debido a factores climáticos.\n + Problemas técnicos en el sistema solar o los componentes del proyecto.\n + Cambios en las regulaciones ambientales o de energía.\n* **Mitigación de riesgos**: La mitigación de estos riesgos puede ser lograda mediante:\n + El uso de tecnología avanzada y sistemas de almacenamiento de energía para reducir la dependencia de factores climáticos.\n + La implementación de protocolos de mantenimiento regular para minimizar problemas técnicos.\n + La participación en programas de educación y capacitación para garantizar que las partes interesadas estén informadas sobre los riesgos y cómo abordarlos.\n\n**",
        recomendaciones:
          "**\n\n* Se recomienda seguir con el proyecto de energía solar, considerando las ventajas de la tecnología y su impacto positivo en la conservación del ecosistema local.\n* Es importante considerar las siguientes recomendaciones:\n + Realizar un análisis detallado de los costos y beneficios del proyecto para asegurarse de que sea rentable a largo plazo.\n + Implementar protocolos de mantenimiento regular y monitoreo de la producción de energía para minimizar problemas técnicos.\n + Participar en programas de educación y capacitación para garantizar que las partes interesadas estén informadas sobre los riesgos y cómo abordarlos.",
      };
      console.log("Raw localStorage response:", storedResponse);

      if (storedResponse) {
        let finalData = storedResponse; // No need for JSON.parse on an already object

        console.log("Final parsed data:", finalData);

        // Validate project scores
        if (!finalData.project_scores) {
          setError("No project scores found in the data");
          return;
        }

        setMoredata(dataMOre);
        setProjectData(finalData);
      } else {
        setError("No response found in localStorage");
      }
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
