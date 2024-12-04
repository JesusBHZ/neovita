import Link from "next/link";
import "/workspaces/neovita/app/index.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <div class="nav_izq">
          <li><img src="/workspaces/neovita/app/img/Neo Vita Logo.png" alt="Hola"></img></li>
          <li><a href="#home">Home</a></li>
        </div>
        <div class="nav_espacio"></div>
        <div class="nav_der">
          <li><a href="log_in">Log In</a></li>
          <li><a href="sign_up">Sign Up</a></li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
