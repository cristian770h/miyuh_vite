import { useEffect, useState } from "react"
import axios from "axios";


export default function Clima() {

    const [Users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        const response = await axios.get('https://api.datos.gob.mx/v1/condiciones-atmosfericas')
        setUsers(response.data);
        console.log(response.data);
        console.log('Datos de la api')
        console.log(response)
    }


    const columns=[
        {
            name:'id',
            selector: row => row.id
        },
        {
            name:'nombre',
            selector: row => row.name
        },
        {
            name:'Estado',
            selector: row => row.state
        },
        {
            name:'temperatura',
            selector: row => row.tempc
        }
    ]

    return (
        <>
            <div>
                
                columns={columns}
                data={Users}               
                 
            </div>
           
        </>
    )
}