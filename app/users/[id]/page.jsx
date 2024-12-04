import Link from "next/link";

async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UserPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="bg-slate-400 p-10 rounded-md">
      <img src={user.avatar} alt="avatar" className="m-auto my-4" />
      <h3 className="text-3xl font-bold">
        {user.id} {user.first_name} {user.last_name}
      </h3>
      <p>{user.email}</p>

      {/* Botón que redirige a la página de resultados del usuario */}
      <div className="mt-4">
        <Link href={`/resultados/${user.id}`} passHref>
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all">
            Ver Resultados
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserPage;
