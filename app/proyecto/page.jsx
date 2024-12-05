import React from "react";

const NuevoProyecto = () => {
  return (
    <div style={styles.container}>
      <header style={styles.navbar}>
        <div style={styles.logo}>N</div>
        <nav style={styles.navLinks}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>About</a>
          <a href="#" style={styles.navLink}>Contact</a>
        </nav>
        <div>
          <button style={styles.navButton}>Log In</button>
          <button style={styles.navButton}>Log In</button>
        </div>
      </header>

      <div style={styles.formContainer}>
        <h1 style={styles.title}>Nuevo Proyecto</h1>

        <h2 style={styles.sectionTitle}>Información general del proyecto</h2>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Tipo de energía renovable</label>
          <input type="text" placeholder="Ingrese el tipo" style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Descripción del proyecto</label>
          <textarea placeholder="Descripción" style={styles.textarea} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            <input type="checkbox" /> Ubicación Actual
          </label>
          <div style={styles.mapPlaceholder}>[Mapa aquí]</div>
        </div>

        <h2 style={styles.sectionTitle}>Recursos naturales</h2>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Tipo de terreno</label>
          <select style={styles.input}>
            <option>Seleccionar</option>
            <option>Urbano</option>
            <option>Rural</option>
          </select>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Tamaño del terreno</label>
          <input type="number" placeholder="500 hectáreas" style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Suministro de energía actual</label>
          <input type="number" placeholder="kWh" style={styles.input} />
        </div>

        <button style={styles.button}>Crear Proyecto</button>
        <button style={styles.cancelButton}>Cancelar</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "left",
    backgroundColor: "#0F3D47",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
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
    marginLeft: "10px",
    cursor: "pointer",
  },
  formContainer: {
    backgroundColor: "#153542",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "20px",
    marginTop: "20px",
    marginBottom: "10px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "60px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  mapPlaceholder: {
    height: "200px",
    backgroundColor: "#0a2c37",
    color: "#aaa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    marginTop: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
  cancelButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#ff6347",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default NuevoProyecto;
