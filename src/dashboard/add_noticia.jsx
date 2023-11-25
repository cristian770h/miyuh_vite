import axios from 'axios';
import { Formik, Field } from 'formik';

function AddNoticia() {
    return (
        <>
            <Formik
                initialValues={{
                    Titulo: '',
                    Img_noticia: '',
                    Noticia: '',
                }}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    try {
                        const res = await axios.post('http://localhost:3000/Noticias', values);
                        actions.resetForm();
                        alert('Datos agregados correctamente');
                        window.location = '/dashboard_noticias';
                    } catch (error) {
                        console.error(error);
                        alert('Error al agregar los datos');
                    }
                }}
            >
                {({ handleSubmit }) => (
                    <div className="">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Titulo</label>
                                <Field
                                    type="text"
                                    name="Titulo"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Titulo"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Url de noticia</label>
                                <Field
                                    type="text"
                                    name="Img_noticia"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Url de noticia"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Noticia</label>
                                <Field
                                    type="text"
                                    name="Noticia"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                )}
            </Formik>
        </>
    );
}

export default AddNoticia;
