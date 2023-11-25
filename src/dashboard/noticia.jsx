import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export default function NoticiaDash() {
    const [Noticia, setNoticia] = useState([])
    useEffect(() => {
        fetchNoticia();

    }, [])

    const HandeUpdate = async () => {
        try {
            await axios.put(`http://localhost:3000/Noticias/${id_Noticia}`, userData);
            alert("Usuario actualizado");
        } catch (error) {
            console.error("Error usuario no encontrado", error);
        }
    };

    const fetchNoticia = async () => {
        const response = await axios.get('http://localhost:3000/Noticias')
        setNoticia(response.data)
        console.log(response.data)
        console.log('Datos de la api')
        console.log(response)
    }

    const navigate = useNavigate();

    const HandeDelte = async (id_Noticia) => {
        const response = await axios.delete(`http://localhost:3000/Noticias/${id_Noticia}`);
        if (response.status == 200) {
            alert("Se borro corectamente")
        } else {
            alert("Succedio correctamente")
        }
        fetchUsers()
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
                                                Titulo
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Url_img
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Noticia
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
                                        {Noticia.map((users) => (<tr className="border-b dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                {users.id_Noticia}
                                            </th>
                                            <td className="px-6 py-4">
                                                {users.Titulo}
                                            </td>
                                            <td className="px-6 py-4">
                                                {users.Img_noticia}
                                            </td>
                                            <td className="px-6 py-4">
                                                {users.Noticia}
                                            </td>
                                            <td className="px-6 py-4">
                                                <button onClick={() => navigate(`/update_noticia/${users.id_Noticia}`)} className=" btn btn-warning mr-auto"> Editar</button>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button onClick={() => HandeDelte(users.id_Noticia)} className="font-medium text-blue-600  hover:underline">Eliminar</button>
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