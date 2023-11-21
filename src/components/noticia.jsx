import axios from "axios"
import { useEffect, useState } from "react"

export default function NoticiaComponent() {
    const [Noticia, setNoticia] = useState([])
    useEffect(() => {
        fetchNoticia();

    }, [])

    const fetchNoticia = async () => {
        const response = await axios.get('http://localhost:3000/Noticia')
        setNoticia(response.data)
        console.log(response.data)
        console.log('Datos de la api')
        console.log(response)


    }

    return (
        <>
            <div class="p-4 sm:ml-50">
                <div className="p-20 border-dashed">

                    <div className="flex items-center justify-center h-48 mb-4 rounded">
                        <div className="container">
                            <div className="relative  left-70 top-24">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                id
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Nombre
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Category
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Price
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Action
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Eliminar
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Users.map((users) => (<tr className="border-b dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                {users.id}
                                            </th>
                                            <td className="px-6 py-4">
                                                {users.Nombre}
                                            </td>
                                            <td className="px-6 py-4">
                                                {users.UserName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {users.Password}
                                            </td>
                                            <td className="px-6 py-4">
                                                <button onClick={() => navigate(`/update/${users.id}`)} className=" btn btn-warning mr-auto"> Editar</button>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button onClick={() => HandeDelte(users.id)} className="font-medium text-blue-600  hover:underline">Eliminar</button>
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
        </>
    )
}