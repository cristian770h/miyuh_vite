export default function TableAqi() {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            AQI
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nivel de contaminación del aire
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Implicaciones para la salud
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Declaración de precaución (para PM2.5)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-green-500 text-white border-b ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            0-50
                        </th>
                        <td class="px-6 py-4">
                            Bueno
                        </td>
                        <td class="px-6 py-4">
                            La calidad del aire se considera satisfactoria y la contaminación del aire representa poco o ningún riesgo.
                        </td>
                        <td class="px-6 py-4">
                            Ninguna
                        </td>
                    </tr>
                    <tr class="bg-yellow-400 text-white border-b ">
                        <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                            51-100
                        </th>
                        <td class="px-6 py-4">
                            Moderado
                        </td>
                        <td class="px-6 py-4">
                            La calidad del aire es aceptable; sin embargo, para algunos contaminantes puede haber
                            un problema de salud
                            moderado para un número
                            muy pequeño de personas que son
                            inusualmente sensibles a la contaminación del aire.
                        </td>
                        <td class="px-6 py-4">
                            Los niños y adultos activos y las personas con enfermedades respiratorias, como asma,
                            deben limitar el esfuerzo prolongado al aire libre.
                        </td>
                    </tr>
                    <tr class="bg-orange-400 text-white">
                        <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                            101-150
                        </th>
                        <td class="px-6 py-4">
                            Dañino para grupos sensibles
                        </td>
                        <td class="px-6 py-4">
                            Los miembros de grupos sensibles pueden experimentar efectos sobre la salud.
                            No es probable que el público en general se vea afectado.
                        </td>
                        <td class="px-6 py-4">
                            Los niños y adultos activos y las personas con enfermedades respiratorias, como asma, deben limitar el esfuerzo prolongado al aire libre.
                        </td>
                    </tr>
                    <tr class="bg-red-600 text-white">
                        <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                            151-200
                        </th>
                        <td class="px-6 py-4">
                            Dañino
                        </td>
                        <td class="px-6 py-4">
                            Todo el mundo puede empezar a experimentar efectos sobre la salud;
                            Los miembros de grupos sensibles pueden experimentar efectos más graves para la salud.
                        </td>
                        <td class="px-6 py-4">
                            Los niños y adultos activos y las personas con enfermedades respiratorias, como asma, deben evitar el esfuerzo prolongado al aire libre;
                            todos los demás, especialmente los niños, deben limitar el esfuerzo prolongado al aire libre.
                        </td>
                    </tr>
                    <tr class="bg-purple-700 text-white ">
                        <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                            201-300
                        </th>
                        <td class="px-6 py-4">
                            Muy Dañino
                        </td>
                        <td class="px-6 py-4">
                            Advertencias sanitarias de condiciones de emergencia. Es más probable que toda la población se vea afectada.
                        </td>
                        <td class="px-6 py-4">
                            Los niños y adultos activos y las personas con enfermedades respiratorias, como asma, deben evitar todo esfuerzo al aire libre;
                            todos los demás, especialmente los niños, deben limitar el esfuerzo al aire libre.
                        </td>
                    </tr>
                    <tr class="bg-red-800 text-white">
                        <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                            300+
                        </th>
                        <td class="px-6 py-4">
                            Peligroso
                        </td>
                        <td class="px-6 py-4">
                            Alerta de salud: todos pueden experimentar efectos de salud más graves
                        </td>
                        <td className="px-6 py-4">
                            Todo el mundo debería evitar todo esfuerzo al aire libre.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}