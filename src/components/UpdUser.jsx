import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdUser() {
    const params = useParams();
    const id_user = params.id_user;

    const [User, SetUser] = useState({
        Nombre: "",
        Apellido: "",
        UserName: "",
        Password: ""
    });

    useEffect(() => {
        const loadUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/users/${id_user}`);
                SetUser({
                    Nombre: response.data.Nombre,
                    Apellido: response.data.Apellido,
                    UserName: response.data.UserName,
                    Password: response.data.Password
                });
            } catch (error) {
                console.error("Error loading user:", error);
            }
        };
        loadUser();
    }, [id_user]);

    const navigate = useNavigate();

    return (
        <>
            <Formik
                initialValues={User}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    try {
                        const res = await axios.patch(`http://localhost:3000/users/${id_user}`, values);
                        actions.resetForm();
                        if (res.status === 200) {
                            navigate('/dashboard');
                        } else {
                            alert("Ocurrió un error");
                        }
                    } catch (error) {
                        console.error("Error updating user:", error);
                        alert("Ocurrió un error");
                    }
                }}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <div className='container mx-15 w-50 p-20'>
                        <h2 className="font-black text-3xl text-center">Editar usuario</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={values.Nombre}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    id='Nombre'
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Apellido</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={values.Apellido}
                                    name="Apellido"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    id='Apellido'
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Nombre de usuario</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={values.UserName}
                                    name="UserName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
                                <input
                                    type="password"
                                    onChange={handleChange}
                                    value={values.Password}
                                    name="Password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    id='Password'
                                    required
                                />
                            </div>
                            <button type='submit' className='btn btn-success'>Guardar</button>
                        </form>
                    </div>
                )}
            </Formik>
        </>
    );
}
