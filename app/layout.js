import Navbar from "@/components/Navbar";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Index",
  description: "Index NeoVita Analytics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>

      <body>
          <Navbar />
          <main>
            <section id="analytics">
              <p>Imagen aqui</p>
            </section>
            
            <section id="recientes">
              <h2>Proyectos Recientes</h2>
              <div class="contenedor_mayor">
                <div class="contenedor_menor">
                  <img src="app/imagenes/Silver Wolf 02.png" alt="Descripción 1"></img>
                  <p>Descripción breve de la imagen 1</p>
                  <figcaption>Texto</figcaption>
                </div>
                <div class="contenedor_menor">
                  <img src="image2.jpg" alt="Descripción 2"></img>
                  <p>Descripción breve de la imagen 2</p>
                  <figcaption>Texto</figcaption>
                </div>
                <div class="contenedor_menor">
                  <img src="image3.jpg" alt="Descripción 3"></img>
                  <p>Descripción breve de la imagen 3</p>
                  <figcaption>Texto</figcaption>
                </div>
              </div>
              <h2 id="mod">Nuevo Proyecto</h2>
                <Link className="boton" href="/perfil">
                  Button
                </Link>
            </section>
            
          </main>
          
          <footer>
          <a id="dr">&copy; 2024 NeoVita Analytics. Todos los derechos reservados.</a>
            <br></br>
            <a id="aviso_priv" href="avisopriv.txt"><u>Aviso de Privacidad</u></a>
            <a id="terms_cond" href="termscond.txt"><u>Terminos y Condiciones</u></a>
          </footer>
      </body>
    </html>
  );
}
