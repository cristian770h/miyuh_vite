

export default function AcercaDe() {
    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4">Clima y Noticias Hoy</h1>
                <div className="grid grid-cols-2 gap-4">
                    {/* Sección de Clima */}
                    <div className="bg-blue-200 p-4">
                        <h2 className="text-2xl font-bold mb-2">Pronóstico del Clima</h2>
                        <p>Soleado con temperaturas máximas de 25°C y mínimas de 15°C.</p>
                        {/* Aquí puedes agregar más información relacionada con el clima */}
                    </div>

                    {/* Sección de Noticias */}
                    <div className="bg-gray-200 p-4">
                        <h2 className="text-2xl font-bold mb-2">Noticias Destacadas</h2>
                        <p>Las noticias más importantes del día con titulares y resúmenes.</p>
                        {/* Aquí puedes agregar más noticias y categorías */}
                    </div>
                </div>
            </div>
        </>
    );
};