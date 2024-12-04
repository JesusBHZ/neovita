// components/Resultado.jsx
"use client";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registrar los elementos de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Resultado({ user }) {
  // Ejemplo de datos para la gráfica
  const investmentData = {
    labels: ["2023", "2024", "2025"],
    datasets: [
      {
        label: "Retorno de Inversión",
        data: [10, 20, 30],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="bg-slate-400 p-10 rounded-md">
      {/* Detalles del Usuario */}
      <h3 className="text-3xl font-bold">{user.id} {user.first_name} {user.last_name}</h3>
      <p>{user.email}</p>

      {/* Gráfica */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold">Retorno de Inversión</h3>
        <Bar data={investmentData} />
      </div>
    </div>
  );
}

export default Resultado;
