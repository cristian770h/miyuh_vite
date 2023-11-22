

export default function Noticia_id (){
    const [Noticia, setNoticia] = useState([])
    useEffect(() => {
        fetchNoticia();

    }, [])

    const fetchNoticia = async () => {
        const response = await axios.get(`http://localhost:3000/Noticias/`)
        setNoticia(response.data)
        console.log(response.data)
        console.log('Datos de la api')
        console.log(response)


    }

    return(
        <>
        
        </>
    )
}