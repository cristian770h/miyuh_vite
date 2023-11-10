import React from "react";
import { Formik } from 'formik';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <>
            <Formik
                initialValues={{
                    Nombre: "",
                    apellido: "",
                    username: "",
                    password: ""
                }}

                // VER LOS VALORES QUE AGREGA EL USUARIO
                onSubmit={async (values, actions) => {
                    try {//Maldito try-catch, ese era el error.
                        console.log(values);

                        const res = await axios.post('http://localhost:3000/users', values);

                        actions.resetForm();
                        alert('Datos agregados correctamente');
                        window.location = '/';
                    } catch (error) {
                        console.error('Error al enviar los datos:', error);
                    }
                }}
            >
                {({ handleChange, handleSubmit, values }) => (

                    <main className=" bg-white px-96 p-32 ">
                        <div >
                            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                                <div className="flex flex-col -mx-3 mb-6">
                                    <div className="flex flex-col w-full px-3 mb-6 md:mb-2">
                                        <div className="text-center mb-12">
                                            <h1 className="text-4xl font-semibold text-black">Registrate</h1>
                                            <p className="text-xl text-black">Crea una cuenta para empezar</p>
                                            <span>
                                                <Link to={"/"}>Regresar al inicio</Link>
                                            </span>
                                        </div>

                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 px-52" htmlFor="grid-Nombre">
                                            Nombre
                                        </label>
                                        <div className="flex flex-row">
                                            <input
                                                className="appearance-none block w-full h-11 bg-gray-200 text-gray-700 border border-gray-200 rounded-s py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-Nombre"
                                                name="Nombre"
                                                type="text"
                                                placeholder="Ingrese su Nombre "
                                                onChange={handleChange}
                                                value={values.Nombre}
                                                required
                                            />
                                            <div className="bg-gray-200 h-11 rounded-e px-2 py-1">
                                                <box-icon name='music' type='solid' animation='tada' size='md' ></box-icon>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="flex flex-col w-full px-3 mb-6 md:mb-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 px-52" htmlFor="grid-apellido">
                                            Apellido
                                        </label>
                                        <div className="flex flex-row">

                                            <input
                                                className="appearance-none block w-full h-11 bg-gray-200 text-gray-700 border border-gray-200 rounded-s py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-apellido"
                                                name="apellido"
                                                type="text"
                                                placeholder="Ingrese su Apellido"
                                                onChange={handleChange}
                                                value={values.apellido}
                                            />

                                            <div className="bg-gray-200 h-11 rounded-e px-3 py-1">
                                                <box-icon name='guitar-amp' type='solid' animation='burst' size='md' ></box-icon>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 px-52" htmlFor="grid-username">
                                            Username
                                        </label>
                                        <div className="flex flex-row">
                                        <input
                                            className="appearance-none block w-full h-11 bg-gray-200 text-gray-700 border border-gray-200 rounded-s py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-username"
                                            name="username"
                                            type="text"
                                            placeholder="Ingrese un Alias"
                                            onChange={handleChange}
                                            value={values.username}
                                        /><div className="bg-gray-200 h-11 rounded-e px-4 py-1">
                                            <box-icon name='user-circle' animation='fade-right' size='md' ></box-icon>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 px-52" htmlFor="grid-password">
                                            Contraseña
                                        </label>
                                        <div className="flex flex-row">
                                        <input
                                            className="appearance-none block w-full h-11 bg-gray-200 text-gray-700 border border-gray-200 rounded-s py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-password"
                                            name="password"
                                            type="password"
                                            placeholder="******"
                                            onChange={handleChange}
                                            value={values.password}
                                        /><div className="bg-gray-200 h-11 rounded-e px-3 py-1">
                                            <box-icon name='check-shield' animation='burst' size='md' ></box-icon>
                                        </div>
                                        </div>
                                        <p className="text-gray-600 text-xs italic px-28">La contraseña debe contener minimo 6 caracteres</p>
                                    </div>
                                </div>
                                <br />
                                <div className="px-52">
                                    <button
                                        type="submit"
                                        className="bg-transparent hover:bg-gray-400 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded"
                                    >
                                        Agregar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </main>
                )}
            </Formik>

        </>
    );
}