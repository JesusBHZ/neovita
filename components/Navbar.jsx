import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-300 mb-4 flex justify-between items-center px-20 p-3 font-bold text-black">
      <Link href="/" className=""
      >Home</Link>

      <ul>
        <li>
          <Link href="/perfil">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
