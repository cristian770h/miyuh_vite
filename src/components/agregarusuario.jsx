import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
/*
<div className='container mx-15 w-50  p-20'>
    <h2 className="font-black text-3lx text-center">Agregar nuevo usuario</h2>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
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
        <button type='onSubmit' className='btn btn-success'>Guardar</button>
    </Form>

</div>*/




function AddUser() {
    return (
        <>
            <Formik
                initialValues={{
                    Nombre:"",
                    Apellido:"",
                    UserName: "",
                    Password: ""

                }}

                // VER LOS VALORES QUE AGREGA EL USUARIO
                onSubmit={async (values, actions) => {
                    console.log(values)
                    var res = await axios.post('http://localhost:3000/users', values)
                    actions.resetForm()
                    alert('Datos agregados correctamente')
                    window.location = '/dasboard';

                }}
            >
                {({ handleChange, handleSubmit, values }) => (

                    <div className=''>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-6">
                                <label  className="block mb-2 text-sm font-medium text-gray-900 ">Nombre</label>
                                <input type="text" onChange={handleChange}
                                    value={values.Nombre} name="Nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Nombre" required />
                            </div>
                            <div class="mb-6">
                                <label for="passwordName" class="block mb-2 text-sm font-medium text-gray-900">Apellido</label>
                                <input type="text" onChange={handleChange}
                                    value={values.Apellido} name="Apellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Apellido" required />
                            </div>
                            <div class="mb-6">
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre de usuario</label>
                                <input type="text" onChange={handleChange}
                                    value={values.UserName} name="UserName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                            </div>
                            <div class="mb-6">
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Contraseña</label>
                                <input type="password" onChange={handleChange}
                                    value={values.Password} name="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                            </div>

                            <button type='onSubmit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                        </form>
                    </div>

                )}
            </Formik>

        </>
    )
}

export default AddUser