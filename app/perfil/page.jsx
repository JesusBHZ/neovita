import React from "react";
import "../perfil.css";

export const metadata = {
  title: "Perfil",
  description: "Perfil de Usuario",
};

const CampoPerfil = ({ label, id, value, type = "text" }) => (
  <div className="campo">
    <input type={type} id={id} value={value} disabled placeholder={label} />
  </div>
);

export default function Perfil() {
  const usuario = {
    nombre: "Juan Pérez",
    imagen: "", // Deja vacío para usar un avatar genérico
    correo: "juan@empresa.com",
    contraseña: "******",
    direccion: "Calle Ficticia 123, Ciudad",
    encargado: "Ana García",
    telefono: "123-456-7890",
  };

  return (
    <div className="perfil-container">
      <header className="header">
        <h1>Perfil</h1>
      </header>
      <div className="imagen-perfil">
        <div className="avatar-placeholder"></div>
      </div>
      <div className="informacion-perfil">
        <CampoPerfil label="Nombre Empresa" id="nombre-empresa" value={usuario.nombre} />
        <CampoPerfil label="Correo electrónico" id="correo" value={usuario.correo} type="email" />
        <CampoPerfil label="Contraseña" id="contraseña" value={usuario.contraseña} type="password" />
        <CampoPerfil label="Dirección" id="direccion" value={usuario.direccion} />
        <CampoPerfil label="Nombre del encargado" id="encargado" value={usuario.encargado} />
        <CampoPerfil label="Número Telefónico" id="telefono" value={usuario.telefono} type="tel" />
      </div>
    </div>
  );
}
