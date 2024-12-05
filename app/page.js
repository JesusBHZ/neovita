"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ref, get } from "firebase/database";
import { database } from "./lib/firebase";


const HomePage = () => {

  const router = useRouter();
  const [proyectos, setProyectos] = useState([]);
  const [error, setError] = useState(null);

  // Verificar localStorage y redirigir si no existe proveedorID
  useEffect(() => {
    const proveedorID = localStorage.getItem("proveedorID");
    if (!proveedorID) {
      router.push("/login");
    } else {
      // Obtener proyectos desde Firebase si el proveedorID está disponible
      const fetchProyectos = async () => {
        try {
          // Referencia a los proyectos en Firebase
          const proyectosRef = ref(database, "/proyectos");
          const snapshot = await get(proyectosRef);

          if (!snapshot.exists()) {
            throw new Error("No se encontraron proyectos en la base de datos.");
          }

          const proyectosData = snapshot.val(); // Obtener los datos de proyectos
          
          // Filtrar los proyectos donde el idProvedor coincida con el proveedorID del localStorage
          const proyectosFiltrados = Object.keys(proyectosData).filter(key => {
            return proyectosData[key].idProvedor === proveedorID;
          }).map(key => proyectosData[key]);

          // Si no hay proyectos, lanzar un error
          if (proyectosFiltrados.length === 0) {
            throw new Error("No se encontraron proyectos para este proveedor.");
          }

          setProyectos(proyectosFiltrados); // Establecer los proyectos filtrados en el estado
        } catch (err) {
          setError(err.message);
        }
      };
      fetchProyectos();
    }
  }, [router]);
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.navbar}>
        <div style={styles.logo}>
          <img src="/logo.png" alt="Logo" style={styles.logoImage} />
          <span style={styles.logoText}>NeoVita</span>
        </div>
        <nav style={styles.navLinks}>
          <a href="#" style={styles.navLink}>Home</a>
        </nav>
        <div>
          <button style={styles.navButton}>Log In</button>
          <button style={styles.navButton}>Sign In</button>
        </div>
      </header>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>NeoVita Analytics</h1>
        <img src="/solar-panels.jpg" alt="Solar Panels" style={styles.heroImage} />
      </div>

      {/* Recent Projects Section */}
      <div style={styles.projectsSection}>
        <h2 style={styles.sectionTitle}>Proyectos recientes</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div style={styles.projectsGrid}>
          {proyectos.length > 0 ? (
            proyectos.map((proyecto, index) => (
              <div key={index} style={styles.projectCard}>
                <div style={styles.projectContent}></div>
                <h3>{proyecto.nombre}</h3>
                <p>{proyecto.descripcion}</p>
              </div>
            ))
          ) : (
            <p>No hay proyectos disponibles para este proveedor.</p>
          )}

      </div>
      </div>     
      {/* New Project Section */}
      <div style={styles.newProjectSection}>
        <h2 style={styles.newProjectTitle}>Nuevo proyecto</h2>
        <button
          style={styles.newProjectButton}
          onClick={() => router.push("/proyecto")}
        >
          Crear Proyecto
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#0F3D47",
    color: "#fff",
    minHeight: "100vh",
    textAlign: "center",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    borderBottom: "1px solid #fff",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    height: "40px",
    marginRight: "10px",
  },
  logoText: {
    fontSize: "24px",
    color: "#4CAF50",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  navButton: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  heroSection: {
    padding: "40px",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  heroImage: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
  },
  projectsSection: {
    padding: "40px",
  },
  sectionTitle: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  projectCard: {
    backgroundColor: "#153542",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    textAlign: "left",
  },
  projectContent: {
    height: "100px",
    backgroundColor: "#4CAF50",
    marginBottom: "10px",
  },
  newProjectSection: {
    padding: "40px",
    textAlign: "center",
  },
  newProjectTitle: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  newProjectButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default HomePage;
