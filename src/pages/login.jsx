import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="flex flex-col h-[36rem] w-[30rem] items-center justify-center translate-x-[28rem] px-50 border-4 border-blue-400 rounded-xl" >
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-black">Bienvenido</h1>
            <p className="text-xl">Inicia sesión para continuar</p>
            <span>
              <Link to={"/"}>Regresar al inicio</Link>
            </span>
          </div>
    
          <form className="flex flex-col gap-2 mt-8">
            <div className="flex flex-col">
              <label className="text-black text-center mb-2">Correo electrónico</label>
              <div className="flex flex-row items-center justify-center gap-2 border-2 px-4 rounded-md">
                <box-icon name="envelope" color="gray"></box-icon>
                <input
                  className="border-none outline-none rounded-md"
                  type="email"
                  placeholder="Correo electrónico"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-black text-center mb-2">Contraseña</label>
              <div className="flex flex-row items-center justify-center gap-2 border-2 px-4 rounded-md">
                <box-icon name="lock" color="gray"></box-icon>
                <input
                  className="border-none outline-none rounded-md "
                  type="password"
                  placeholder="Contraseña"
                />
              </div>
            </div>
            <button className="bg-black text-white rounded-md py-2 mt-2">
              Iniciar sesión
            </button>
          </form>
          <p className="mt-4 font-bold">¿No tienes cuenta? <Link to={"/register"} className="text-blue-700">Registrate</Link></p>
          <div className="absolute w-full h-4 bottom-0 left-0 bg-gradient-to-t from-blue-400 to-transparent rounded-xl"></div>
        </div>
      );
    }
    