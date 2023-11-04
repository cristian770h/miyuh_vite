import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import NavDash from './NavDash'
import { Formik } from 'formik';
import { useParams, redirect } from 'react-router-dom'; //Obtiene el Id de la ruta

/**
 * 
 * <Form.Group className="mb-3">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" name="UserName"
                                    onChange={handleChange}
                                    value={values.UserName} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" name="Password"
                                    onChange={handleChange}
                                    value={values.Password} />
                            </Form.Group>
 */


export default function UpdUser() {

    const params = useParams()
    // console.log('Este es un parametro '+ params.id)
    console.log(params)
    var id = params.id;
    console.log(id)

    const [User, SetUser] = useState({
        Nombre: "",
        Apellido: "",
        UserName: "",
        Password: ""
    })

    useEffect(() => {

        const loadUser = async () => {
            const response = await axios.get(`http://localhost:3000/users/${id}`)
            console.log(response);
            SetUser({
                Nombre: response.data.Nombre,
                Apellido: response.data.Apellido,
                UserName: response.data.UserName,
                Password: response.data.Password
            })
        };
        loadUser(); //Ejecutar el método buscar usuario
    }, []);

    return (
        <>
            <Formik
                initialValues={User} //Una vez buscado los datos lo va mapear de forma automatica
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values)

                    var res = await axios.patch(`http://localhost:3000/users/${id}`, values)
                    actions.resetForm()
                    // alert('Datos actualizados correctamente')
                    if (res.status == 200) {
                        //Redirecciomar 
                        window.location = '/dasboard';
                    }
                    else {
                        alert("Succedio un error")
                    }
                }}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <div className='container mx-15 w-50  p-20'>
                        <h2 className="font-black text-3lx text-center">Editar usuario</h2>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Nombre</label>
                                <input type="text" onChange={handleChange}
                                    value={values.Nombre} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " id='Nombre' />
                            </div>
                            <div class="mb-6">
                                <label for="passwordName" class="block mb-2 text-sm font-medium text-gray-900">Apellido</label>
                                <input type="text" onChange={handleChange}
                                    value={values.Apellido} name="Apellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " id='Apellido'  />
                            </div>
                            <div class="mb-6">
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre de usuario</label>
                                <input type="text" onChange={handleChange}
                                    value={values.UserName} name="UserName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                            </div>
                            <div class="mb-6">
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Contraseña</label>
                                <input type="password" onChange={handleChange}
                                    value={values.Password} name="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " id='Password' required />
                            </div>
                            <button type='onSubmit' className='btn btn-success'>Guardar</button>
                        </form>
                    </div>
                )}
            </Formik>
        </>
    )
}