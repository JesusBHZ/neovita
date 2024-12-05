import React from "react";

const CreateAccountForm = () => {
  return (
    <div style={styles.container}>
      <header style={styles.navbar}>
        <div style={styles.logo}>N</div>
        <nav style={styles.navLinks}>
          <a href="#" style={styles.navLink}>
            Home
          </a>
          <a href="#" style={styles.navLink}>
            About
          </a>
          <a href="#" style={styles.navLink}>
            Contact
          </a>
        </nav>
        <div>
          <button style={styles.navButton}>Log In</button>
          <button style={styles.navButton}>Log In</button>
        </div>
      </header>

      <div style={styles.formContainer}>
        <h1 style={styles.title}>Crear cuenta</h1>
        <p style={styles.subtitle}>
          ¿Tienes una cuenta? <a href="#" style={styles.link}>Inicia sesión</a>
        </p>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Nombre de empresa</label>
          <input type="text" placeholder="Text Field" style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Correo electrónico</label>
          <input type="email" placeholder="Text field" style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Contraseña</label>
          <input type="password" placeholder="Password" style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Dirección</label>
          <input type="text" placeholder="Text field" style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Nombre del representante</label>
          <input type="text" placeholder="Text field" style={styles.input} />
        </div>
        <button style={styles.submitButton}>Crear cuenta</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#0F3D47",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
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
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#4CAF50",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#fff",
  },
  link: {
    color: "#153542",
    textDecoration: "underline",
    fontWeight: "bold",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#fff",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "2px solid #fff",
    borderRadius: "15px",
    fontSize: "14px",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    marginTop: "20px",
    backgroundColor: "#153542",
    color: "#fff",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default CreateAccountForm;
