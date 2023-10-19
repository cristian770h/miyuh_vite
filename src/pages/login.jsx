import { Link } from "react-router-dom"

export default function Login() {
    return(
    <>
        <div className=" container text-green-500 m-0 p-0 border-b-0 font-serif bg-[#c9d6ff]">
            <div className=" form-container">
                <form action="" method="get">
                    <h1>Crear cuenta</h1>
                    <div> 
                        <Link to="" ></Link>
                    </div>
                    <span>
                        O utilize su correo electronico
                    </span>
                    <input type="text" placeholder="Nombre"></input>
                    <input type="email" placeholder="Correo"></input>
                    <input type="password" placeholder="Contraseña"></input>
                    <button>Registrarse</button>
                </form>
            </div>
            <div className=" form-container">
                <form action="" method="get">
                    <h1>Ingresar a su cuenta</h1>
                    <div> 
                        <Link to="" ></Link>
                    </div>
                    <span>
                        O utilize su correo electronico
                    </span>
                    <input type="email" placeholder="Correo"></input>
                    <input type="password" placeholder="Contraseña"></input>
                    <Link to="" >Olvido su contraseña</Link>
                    <button>Ingresar cuenta</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className=" toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Bienvenido de nuevo</h1>
                        <p>
                            Enter your personal details to use all of site features
                        </p>
                        <button className="hidden" id="login">Ingresar</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Registrese aquí</h1>
                        <p>
                            Enter your personal details to use all of site features
                        </p>
                        <button className="hidden" id="register">Registrarse</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
    )
}