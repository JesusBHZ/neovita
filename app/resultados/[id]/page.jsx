'use client'; // Directiva que indica que este componente es un componente de cliente

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar Chart.js solo en el cliente
const ResultadosPage = () => {
  const [data, setData] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('useEffect ejecutado');
      
      // Registrar los componentes de Chart.js
      ChartJS.register(
        CategoryScale, // Escala de categorías para el eje X
        LinearScale,   // Escala lineal para el eje Y
        BarElement,    // Elemento para las barras
        Title,         // Título del gráfico
        Tooltip,       // Tooltip
        Legend         // Leyenda
      );

      // Datos del gráfico
      const chartData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'], // Eje X
        datasets: [
          {
            label: 'Resultados de Ventas', // Título de las barras
            data: [40, 60, 80, 90, 120, 150, 200], // Datos de las barras
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
      
      console.log('Datos del gráfico:', chartData);

      // Actualizar el estado con los datos
      setData(chartData);
    }
  }, []); // Se ejecuta una sola vez cuando el componente se monta

  // Opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Gráfico de Resultados Mensuales', // Título
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Eje Y comienza en 0
      },
    },
  };

  // Verificar que los datos estén disponibles antes de renderizar
  if (!data) return <p>Cargando gráfico...</p>;

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <h1>Gráfico de Resultados</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ResultadosPage;
