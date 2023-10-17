import { Formik } from "formik";

export default function Adduser() {


    return
    {
        <>
            <Formik
                initialValues={{
                    Username: "",
                    Password: ""
                }}
                onSubmit={async (value, actions) => {
                    console.log(values)
                    var res = await axios.post('http://localhost:3000/users', values)
                    actions.resetForm()
                    alert('Datos agrgados correctamente')
                    window.location = '/Indexuser';
                }}
            >
                {({ handleChange, handleSubmit }) =>
                (
                    <div className="container mx-15 w-50 p-20">
                        <h2 className="font-black text.3xl text-center">Agregar nuevo</h2>
                        <form onSubmit={handleSubmit}/>
                        <form.Group />
                    </div>
                )
                }
            </Formik>
        </>
    }
}