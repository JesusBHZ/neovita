import "/workspaces/neovita/app/perfil/perfil.css";

export const metadata = {
  title: "Perfil",
  description: "Perfil de Usuario",
};

export default function Perfil() {
  return (
    <div className="perfil-container">
      <div className="imagen-perfil">
        <img src="perfil.jpg" alt="Imagen de perfil" className="imagen-perfil-img" />
      </div>

      <h1 className="nombre-usuario">Juan Pérez</h1>

      <div className="informacion-perfil">
        <div className="campo">
          <label htmlFor="empresa">Nombre de la Empresa:</label>
          <input type="text" id="empresa" value="Empresa XYZ" disabled />
        </div>
        <div className="campo">
          <label htmlFor="correo">Correo Electrónico:</label>
          <input type="email" id="correo" value="juan@empresa.com" disabled />
        </div>
        <div className="campo">
          <label htmlFor="contraseña">Contraseña:</label>
          <input type="password" id="contraseña" value="******" disabled />
        </div>
        <div className="campo">
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" value="Calle Ficticia 123, Ciudad" disabled />
        </div>
        <div className="campo">
          <label htmlFor="encargado">Nombre del Encargado:</label>
          <input type="text" id="encargado" value="Ana García" disabled />
        </div>
        <div className="campo">
          <label htmlFor="telefono">Número Telefónico:</label>
          <input type="tel" id="telefono" value="123-456-7890" disabled />
        </div>
      </div>
    </div>
  );
}
