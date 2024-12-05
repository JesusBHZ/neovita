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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar />
        <main>
          <section id="analytics">
            <p>Imagen aquí</p>
          </section>

          <section id="recientes">
            <h2>Proyectos Recientes</h2>
            <div className="contenedor_mayor">
              <div className="contenedor_menor">
                <img src="" alt="Descripción 1" />
                <p>Descripción breve de la imagen 1</p>
                <figcaption>Texto</figcaption>
              </div>
              <div className="contenedor_menor">
                <img src="" alt="Descripción 2" />
                <p>Descripción breve de la imagen 2</p>
                <figcaption>Texto</figcaption>
              </div>
              <div className="contenedor_menor">
                <img src="" alt="Descripción 3" />
                <p>Descripción breve de la imagen 3</p>
                <figcaption>Texto</figcaption>
              </div>
            </div>
            <h2 id="mod">Nuevo Proyecto</h2>
            <Link href="/perfil">
              <button className="boton">Button</button>
            </Link>
          </section>
        </main>

        <footer>
          <a id="dr">&copy; 2024 NeoVita Analytics. Todos los derechos reservados.</a>
          <br />
          <a id="aviso_priv" href="avisopriv.txt">
            <u>Aviso de Privacidad</u>
          </a>
          <a id="terms_cond" href="termscond.txt">
            <u>Términos y Condiciones</u>
          </a>
        </footer>
      </body>
    </html>
  );
}
