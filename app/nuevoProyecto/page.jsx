"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Importamos el hook para redirección
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Necesario para los estilos de Leaflet
import { ref, set, push } from "firebase/database"; // Asegúrate de usar 'set' o 'push'
import { database } from "../lib/firebase"; // Ajusta esta ruta a la ubicación correcta de tu archivo de configuración de Firebase



export default function FormularioProyecto() {
  const [idProvedor, setIdProvedor] = useState("");
  const [tipoEnergia, setTipoEnergia] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [tipoTerreno, setTipoTerreno] = useState("");
  const [tamanoTerreno, setTamanoTerreno] = useState("");
  const [suministroEnergia, setSuministroEnergia] = useState("");
  const [accesoRedElectrica, setAccesoRedElectrica] = useState("");
  const [distanciaRedElectrica, setDistanciaRedElectrica] = useState("");
  const [ecosistemaLocal, setEcosistemaLocal] = useState("");
  const [usoSuelo, setUsoSuelo] = useState("");
  const [consumoEnergetico, setConsumoEnergetico] = useState("");
  const [usuarioFinal, setUsuarioFinal] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter(); // Hook para manejar la redirección


const handleSubmit = (e) => {
  e.preventDefault();
  setError(null);
  setSuccess(false);

  // Verificar que todos los campos tengan datos
  if (
    !tipoEnergia ||
    !descripcion ||
    !ubicacion ||
    !latitude ||
    !longitude ||
    !tipoTerreno ||
    !tamanoTerreno ||
    !suministroEnergia ||
    !accesoRedElectrica ||
    !distanciaRedElectrica ||
    !ecosistemaLocal ||
    !usoSuelo ||
    !consumoEnergetico ||
    !usuarioFinal
  ) {
    setError("Todos los campos son obligatorios.");
    return;
  }

  // Crear un objeto con los datos del formulario
  const proyectoData = {
    idProvedor,
    tipoEnergia,
    descripcion,
    ubicacion,
    latitude,
    longitude,
    tipoTerreno,
    tamanoTerreno,
    suministroEnergia,
    accesoRedElectrica,
    distanciaRedElectrica,
    ecosistemaLocal,
    usoSuelo,
    consumoEnergetico,
    usuarioFinal,
  };

  // Obtener una referencia a la ruta 'proyectos' en Firebase y agregar los datos
  const proyectosRef = ref(database, "proyectos/");
  const newProyectoRef = push(proyectosRef); // Usamos 'push' para generar una nueva clave única para el proyecto
  set(newProyectoRef, proyectoData) // Usamos 'set' para guardar los datos en la ruta generada por 'push'
    .then(() => {
      setSuccess("Formulario enviado con éxito.");
      // Aquí puedes redirigir o hacer otras acciones si es necesario
      // router.push("/home"); // Descomenta si quieres redirigir
    })
    .catch((error) => {
      setError("Error al guardar el proyecto: " + error.message);
    });
};

useEffect(() => {
  // Obtener el id de localStorage cuando el componente se monta
  const storedId = localStorage.getItem("proveedorID");
  if (storedId) {
    setIdProvedor(storedId);
  } else {
    setError("No se encontró el ID del proveedor.");
  }
}, []);



  // Función para obtener la ubicación actual
  const obtenerUbicacionActual = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setUbicacion(`Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`);
        },
        () => {
          setError("No se pudo obtener la ubicación actual.");
        }
      );
    } else {
      setError("Geolocalización no soportada por este navegador.");
    }
  };

  // Componente para manejar el evento de arrastrar el marcador
  function LocationMarker() {
    const map = useMapEvents({
      click(event) {
        const { lat, lng } = event.latlng;
        setLatitude(lat);
        setLongitude(lng);
        setUbicacion(`Lat: ${lat}, Lng: ${lng}`);
      },
    });

    return (
      latitude && longitude ?
      <Marker position={[latitude, longitude]} draggable={true}>
        <Popup>{`Ubicación seleccionada: ${latitude}, ${longitude}`}</Popup>
      </Marker> : null
    );
  }

  useEffect(() => {
    obtenerUbicacionActual(); // Obtener la ubicación actual cuando el componente se monta
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Formulario de Proyecto</h1>
      <form onSubmit={handleSubmit}>
        {/* Información general del proyecto */}
        <div style={{ marginBottom: "10px" }}>
          <label>Tipo de Energía:</label>
          <select
            value={tipoEnergia}
            onChange={(e) => setTipoEnergia(e.target.value)}
            required
            style={{ padding: "8px", width: "100%" }}
          >
            <option value="">Seleccione un tipo de energía</option>
            <option value="Solar">Solar</option>
            <option value="Eólica">Eólica</option>
            <option value="Hidráulica">Hidráulica</option>
            <option value="Geotérmica">Geotérmica</option>
            <option value="Biomasa">Biomasa</option>
            <option value="Nuclear">Nuclear</option>
            <option value="Maremotriz">Maremotriz</option>
            <option value="Térmica">Térmica</option>
            <option value="Renovables">Renovables</option>
            <option value="Convencional">Convencional</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Descripción del Proyecto:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            style={{ padding: "8px", width: "100%", minHeight: "100px" }}
          />
        </div>

        {/* Ubicación del proyecto */}
        <div style={{ marginBottom: "10px" }}>
          <label>Ubicación (Selecciona en el mapa o usa ubicación actual):</label>
          <button
            type="button"
            onClick={obtenerUbicacionActual}
            style={{
              padding: "8px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              marginBottom: "10px"
            }}
          >
            Obtener Ubicación Actual
          </button>
          <div style={{ height: "400px", width: "100%" }}>
            <MapContainer center={[latitude || 19.432608, longitude || -99.133209]} zoom={12} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <LocationMarker />
            </MapContainer>
          </div>
          <input
            type="text"
            value={ubicacion}
            readOnly
            placeholder="Ubicación seleccionada (Lat y Lng)"
            style={{ padding: "8px", width: "100%", marginTop: "10px" }}
          />
        </div>

        {/* Resto del formulario */}
        <div style={{ marginBottom: "10px" }}>
          <label>Tipo de Terreno:</label>
          <select
            value={tipoTerreno}
            onChange={(e) => setTipoTerreno(e.target.value)}
            required
            style={{ padding: "8px", width: "100%" }}
          >
            <option value="">Seleccione un tipo de terreno</option>
            <option value="Rocoso">Rocoso</option>
            <option value="Llano">Llano</option>
            <option value="Montañoso">Montañoso</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Tamaño del Terreno (en hectáreas):</label>
          <input
            type="number"
            value={tamanoTerreno}
            onChange={(e) => setTamanoTerreno(e.target.value)}
            required
            max={500}
            style={{ padding: "8px", width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Suministro de Energía Actual (kWh):</label>
          <input
            type="number"
            value={suministroEnergia}
            onChange={(e) => setSuministroEnergia(e.target.value)}
            required
            style={{ padding: "8px", width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Acceso a Red Eléctrica Cercana:</label>
          <input
            type="text"
            value={accesoRedElectrica}
            onChange={(e) => setAccesoRedElectrica(e.target.value)}
            required
            style={{ padding: "8px", width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Distancia a Red Eléctrica (km):</label>
          <input
            type="number"
            value={distanciaRedElectrica}
            onChange={(e) => setDistanciaRedElectrica(e.target.value)}
            required
            style={{ padding: "8px", width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Ecosistema Local:</label>
          <textarea
            value={ecosistemaLocal}
            onChange={(e) => setEcosistemaLocal(e.target.value)}
            required
            style={{ padding: "8px", width: "100%", minHeight: "100px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Uso del Suelo:</label>
          <input
            type="text"
            value={usoSuelo}
            onChange={(e) => setUsoSuelo(e.target.value)}
            required
            style={{ padding: "8px", width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Consumo Energético del Proyecto:</label>
          <input
            type="number"
            value={consumoEnergetico}
            onChange={(e) => setConsumoEnergetico(e.target.value)}
            required
            style={{ padding: "8px", width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Usuario Final:</label>
          <input
            type="text"
            value={usuarioFinal}
            onChange={(e) => setUsuarioFinal(e.target.value)}
            required
            style={{ padding: "8px", width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <button type="submit" style={{
            backgroundColor: "#4CAF50", 
            color: "white", 
            padding: "10px", 
            border: "none", 
            borderRadius: "4px", 
            width: "100%" 
          }}>
            Enviar Proyecto
          </button>
        </div>

        {/* Mensajes de error y éxito */}
        {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
        {success && <div style={{ color: "green", marginTop: "10px" }}>{success}</div>}
      </form>
    </div>
  );
}