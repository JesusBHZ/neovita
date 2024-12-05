import React from "react";

const LoginForm = () => {
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

      <div style={styles.loginContainer}>
        <h1 style={styles.title}>Login</h1>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Correo Electrónico</label>
          <input type="email" placeholder="Text" style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Contraseña</label>
          <input type="password" placeholder="Text" style={styles.input} />
        </div>
        <button style={styles.button}>Inicio de sesión</button>
        <button style={styles.button}>Registro</button>
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
  loginContainer: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#153542",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default LoginForm;
