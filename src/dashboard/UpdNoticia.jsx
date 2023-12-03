import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdNoticia() {
    const params = useParams();
    const id_Noticia = params.id_Noticia;

    const [User, SetUser] = useState({
        Titulo: "",
        Img_noticia: "",
        Noticia: ""
    });

    useEffect(() => {
        const loadUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/Noticias/${id_Noticia}`);
                SetUser({
                    Titulo: response.data.Titulo,
                    Img_noticia: response.data.Img_noticia,
                    Noticia: response.data.Noticia,
                    
                });
            } catch (error) {
                console.error("Error loading user:", error);
            }
        };
        loadUser();
    }, [id_Noticia]);

    const navigate = useNavigate();

    return (
        <>
            <Formik
                initialValues={User}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    try {
                        const res = await axios.patch(`http://localhost:3000/Noticias/${id_Noticia}`, values);
                        actions.resetForm();
                        if (res.status === 200) {
                            navigate('/dashboard_noticias');
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
                        <h2 className="font-black text-3xl text-center">Editar Noticia</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Titulo</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={values.Titulo}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    id='Titulo'
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Imagen de la noticia</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={values.Img_noticia}
                                    name="Img_noticia"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    id='Img_noticia'
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Noticia</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={values.Noticia}
                                    name="Noticia"
                                    id='Noticia'
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
