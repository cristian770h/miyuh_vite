import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Iniciar Sesión</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-800 font-medium">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-md p-2 mt-1"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-blue-800 font-medium">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded-md p-2 mt-1"
              placeholder="Tu contraseña"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
            >
              Iniciar Sesión
            </button>
            <Link to="/Registro">
              <button
                type="button"
                className="bg-blue-200 text-blue-700 rounded-md py-2 px-4 hover:bg-blue-300"
              >
                Registrarse
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;