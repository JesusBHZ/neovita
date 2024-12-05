import React from "react";
import "/workspaces/neovita/app/perfil.css";

export const metadata = {
  title: "Perfil",
  description: "Perfil de Usuario",
};

const CampoPerfil = ({ label, id, value, type = "text" }) => (
  <div className="campo">
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} value={value} disabled />
  </div>
);

export default function Perfil() {
  const usuario = {
    nombre: "Juan Pérez",
    imagen: "perfil.jpg",
    correo: "juan@empresa.com",
    contraseña: "******",
    direccion: "Calle Ficticia 123, Ciudad",
    encargado: "Ana García",
    telefono: "123-456-7890",
  };

  return (
    <div className="perfil-container">
      <h1 className="nombre-usuario">{usuario.nombre}</h1>

      <div className="imagen-perfil">
        <img
          src={usuario.imagen}
          alt={`Imagen de perfil de ${usuario.nombre}`}
          className="imagen-perfil-img"
        />
      </div>

      <div className="informacion-perfil">
        <CampoPerfil label="Correo Electrónico:" id="correo" value={usuario.correo} type="email" />
        <CampoPerfil label="Contraseña:" id="contraseña" value={usuario.contraseña} type="password" />
        <CampoPerfil label="Dirección:" id="direccion" value={usuario.direccion} />
        <CampoPerfil label="Nombre del Encargado:" id="encargado" value={usuario.encargado} />
        <CampoPerfil label="Número Telefónico:" id="telefono" value={usuario.telefono} type="tel" />
      </div>
    </div>
  );
}
