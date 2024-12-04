'use client'; // Directiva que indica que este componente es un componente de cliente

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar Chart.js solo en el cliente
const ResultadosPage = () => {
  const [data, setData] = useState(true); // Cambiar el estado inicial a null
  const [comment, setComment] = useState(''); // Estado para los comentarios
  const [commentsList, setCommentsList] = useState([]); // Lista de comentarios guardados

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

      // Obtener los datos del gráfico
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
      setData(chartData); // Establecer los datos para el gráfico
    }
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  // Función para manejar el cambio de comentarios
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // Función para guardar el comentario
  const handleSaveComment = () => {
    if (comment.trim() !== '') {
      setCommentsList([...commentsList, comment]); // Agregar el nuevo comentario a la lista
      setComment(''); // Limpiar el campo de comentario
    }
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Gráfico de Resultados Mensuales', // Título del gráfico
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Eje Y comienza en 0
      },
    },
  };

  // Verificar que los datos estén disponibles antes de renderizar
  if (!data) return <p>Cargando gráfico...</p>; // Mostrar mensaje de carga mientras no hay datos

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <h1>Gráfico de Resultados</h1>
      <Bar data={data} options={options} /> {/* Renderizar el gráfico */}

      {/* Sección de Comentarios */}
      <div style={{ marginTop: '20px' }}>
        <h2>Comentarios</h2>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Escribe tu comentario aquí..."
          rows="4"
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '10px',
            color: '#4CAF50', // Cambiar el color del texto
          }}
        ></textarea>
        <br />
        <button
          onClick={handleSaveComment}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Guardar Comentario
        </button>
      </div>

      {/* Lista de comentarios guardados */}
      <div style={{ marginTop: '30px' }}>
        <h3>Comentarios Guardados</h3>
        <ul>
          {commentsList.length > 0 ? (
            commentsList.map((comment, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <p>{comment}</p>
              </li>
            ))
          ) : (
            <p>No hay comentarios guardados.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ResultadosPage;
