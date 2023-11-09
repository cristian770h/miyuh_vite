import React, { useState, useEffect } from 'react';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="text-center">
                <h1 className="text-4xl font-semibold text-white">Bienvenido</h1>
                <p className="text-xl">Inicia sesión para continuar</p>
                <span>
                    <Link to={"/"}>Regresar al inicio</Link>
                </span>
            </div>

            <form className="flex flex-col gap-2 mt-8">
                <div className="flex flex-col">
                    <label className="text-white mb-2">Correo electrónico</label>
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
                    <label className="text-white mb-2">Contraseña</label>
                    <div className="flex flex-row items-center justify-center gap-2 border-2 px-4 rounded-md">
                        <box-icon name="lock" color="gray"></box-icon>
                        <input
                            className="border-none outline-none rounded-md"
                            type="password"
                            placeholder="Contraseña"
                        />
                    </div>
                </div>
                <button className="bg-black text-white rounded-md py-2 mt-2">
                    Iniciar sesión
                </button>
            </form>
            <div className='items-center justify-center'>
                <br />
                {profile ? (
                    <div>
                        <img src={profile.picture} alt="user image" />
                        <h3>Usuario logeado</h3>
                        <p>Nombre: {profile.name}</p>
                        <p>Dirección email: {profile.email}</p>
                        <br />
                        <button onClick={logOut}>Cerrar sesion</button>
                    </div>
                ) : (
                    <button onClick={() => login()}>Iniciar sesion con Google </button>
                )}
            </div>
            <p className="mt-4 font-bold">¿No tienes cuenta? <Link to={"/register"} className="text-blue-700">Registrate</Link></p>
        </div>
    );
}