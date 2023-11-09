import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function IndexDash() {

    const [Users, setUsers] = useState([]);
    useEffect(() => {
        fecthUsers();
    }, []);

    const fecthUsers = async () => {
        const response = await axios.get('http://localhost:3000/users')
        setUsers(response.data);
        console.log('Datos de la api')
        console.log(response)

    }
    const HandeDelte = async (id) => {
        const response = await axios.delete(`http://localhost:3000/users/${id}`);
        if (response.status == 200) {
            alert("Se borro correctamente")
        } else {
            alert("Succedio un error")
        }
        fecthUsers()
    }
    const navigate = useNavigate()

    return (
        <div class="p-4 sm:ml-50">
            <div class="p-20 border-dashed">

                <div class="flex items-center justify-center h-48 mb-4 rounded">
                    <div class="container">
                        <div class="relative  left-70 top-24">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Nombre
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Apellido
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            username
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            password
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            aditar
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            eliminar
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {Users.map((users) => (
                                        <tr class="border-b dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap ">
                                                {users.Nombre}
                                            </th>
                                            <td class="px-6 py-4">
                                                {users.apellido}
                                            </td>
                                            <td class="px-6 py-4">
                                                {users.username}
                                            </td>
                                            <td class="px-6 py-4">
                                                {users.password}
                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => navigate(`/edituser/${users.id}`)}><box-icon name='edit-alt' color='#699ec3' ></box-icon></a>
                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => HandeDelte(users.id)}><box-icon name='trash' type='solid' color='#4d89c3' ></box-icon></a>
                                            </td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}


export default IndexDash;