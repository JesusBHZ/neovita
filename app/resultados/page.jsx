"use client";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2"; // Importamos el gráfico de barras de react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registrar los componentes de Chart.js que necesitamos
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulamos la consulta de los resultados
    // En un caso real, obtendrás los datos de una API o base de datos
    const fetchResults = async () => {
      const response = {
        idProveedor: "zlne0qzxf",
        inversion: 50,
        factibilidad: 65,
        ambiental: 56,
        riesgos: 35
      };

      setData(response);
    };

    fetchResults();
  }, []);

  if (!data) return <div>Cargando...</div>;

  // Configuración del gráfico para Inversión
  const chartDataInversion = {
    labels: ["Inversión"], 
    datasets: [
      {
        label: "Inversión",
        data: [data.inversion],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  // Configuración del gráfico para Factibilidad
  const chartDataFactibilidad = {
    labels: ["Factibilidad"], 
    datasets: [
      {
        label: "Factibilidad",
        data: [data.factibilidad],
        backgroundColor: "rgba(255,159,64,0.4)",
        borderColor: "rgba(255,159,64,1)",
        borderWidth: 1,
      },
    ],
  };

  // Configuración del gráfico para Ambiental
  const chartDataAmbiental = {
    labels: ["Ambiental"], 
    datasets: [
      {
        label: "Ambiental",
        data: [data.ambiental],
        backgroundColor: "rgba(153,102,255,0.4)",
        borderColor: "rgba(153,102,255,1)",
        borderWidth: 1,
      },
    ],
  };

  // Configuración del gráfico para Riesgos
  const chartDataRiesgos = {
    labels: ["Riesgos"], 
    datasets: [
      {
        label: "Riesgos",
        data: [data.riesgos],
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
      },
    ],
  };

  // Opciones comunes para todos los gráficos
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Resultados del Proveedor",
      },
    },
  };

  return (
    <div>
      <h1>Resultados del Proveedor</h1>
      
      <div>
        <h2>Inversión</h2>
        <Bar data={chartDataInversion} options={chartOptions} />
      </div>

      <div>
        <h2>Factibilidad</h2>
        <Bar data={chartDataFactibilidad} options={chartOptions} />
      </div>

      <div>
        <h2>Ambiental</h2>
        <Bar data={chartDataAmbiental} options={chartOptions} />
      </div>

      <div>
        <h2>Riesgos</h2>
        <Bar data={chartDataRiesgos} options={chartOptions} />
      </div>
      <button type="submit">Subir</button>
        
    
    </div>
    
  );
}
