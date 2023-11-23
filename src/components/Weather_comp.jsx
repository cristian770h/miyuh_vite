import { useState, useEffect } from "react";
import axios from "axios";

export default function Weather({ clima,ciudad}) {

    
    
   
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false); // Nuevo estado para controlar la expansión del fondo

    const toggleContentVisibility = () => {
        setIsContentVisible(!isContentVisible);
        setIsExpanded(!isExpanded); // Cambia el estado de expansión del fondo
    };

    const Bg_Navbar = (text) => {
        
    }

    return (
        <>
            {clima && (
                <div className={`bg-white w-[42rem] shadow-2xl text-black transition-all duration-300 ${isExpanded ? 'h-[16rem]' : 'h-[3.8rem]' // Aplica una altura mayor si está expandido
                    }`}
                >
                    <div className="flex flex-col gap-10 font-bold">
                        <div className="flex flex-row">
                            <div className="text-[15px] items-start ml-2">{clima.location.name}</div>
                            <div className="ml-16 flex flex-row">
                                <box-icon name='thermometer' type='solid' color='#0f69e5' ></box-icon>
                                {clima.current.temp_c} °C
                            </div>
                            <div className="flex flex-row">
                                <img src={clima.current.condition.icon} alt="Icono del Clima" className="ml-2 h-[45px] w-[45px]" />
                                <div>{clima.current.condition.text}</div>
                            </div>

                            <div className="ml-12 flex flex-row">
                                <box-icon name='wind' color='#0f69e5' ></box-icon>
                                {clima.current.wind_kph} km/h
                            </div>
                            <div className=" ml-12">
                                <button className="bg-white" onClick={toggleContentVisibility}>Mostrar/Ocultar</button>
                            </div>
                        </div>
                    </div>

                    {isContentVisible && (
                        <div className={`grid grid-cols-3 gap-4 border border-3 p-4 mx-auto mt-4 border-gray-400 text-black ${isContentVisible ? 'block' : 'hidden'
                            }`}
                            style={{ maxWidth: '72%' }}>
                            <div className="flex flex-col items-center justify-center h-16 border-b-2 border-x-2 border-gray-400">
                                <div className="flex flex-row">
                                    <box-icon name='thermometer' type='solid' color='#0f69e5' ></box-icon>
                                    <text className=" text-[12px] text-">Sensacion termica</text>
                                </div>
                                <text className="font-bold">{clima.current.feelslike_c} °C</text>
                            </div>
                            <div className="flex flex-col items-center justify-center h-16 border-b-2 border-x-2">
                                <div className="flex flex-row">
                                    <box-icon name='droplet' type='solid' color='#0f69e5' ></box-icon>
                                    <text className=" text-[12px] text-">Humedad</text>
                                </div>
                                <text className="font-bold">{clima.current.humidity} %</text> {/* Humedad */}
                            </div>
                            <div className="flex flex-col items-center justify-center h-16 border-b-2 border-x-2">
                                <div className="flex flex-row">
                                    <box-icon name='sun' color='#0f69e5' ></box-icon>
                                    <text className=" text-[12px] text-">Índice UV</text>
                                </div>
                                <text className="font-bold"> {clima.current.uv}</text>
                            </div>
                            <div className="flex flex-col items-center justify-center h-16 border-t-2 border-x-2">
                                <div className="flex flex-row">
                                    <box-icon name='wind' color='#0f69e5' ></box-icon>
                                    <text className=" text-[12px] text-">Viento</text>
                                </div>
                                <text className="font-bold">{clima.current.wind_kph}kmph</text>
                            </div>
                            <div className="flex flex-col items-center justify-center h-16 border-t-2 border-x-2">
                                <div className="flex flex-row">
                                    <box-icon name='cloud' type='solid' color='#0f69e5' ></box-icon>
                                    <text className=" text-[12px] text-">Nubosidad</text>
                                </div>
                                <text> {clima.current.cloud}%</text> {/* Nubosidad */}
                            </div>
                            <div className="flex flex-col items-center justify-center h-16 border-t-2 border-x-2">
                                <div className="flex flex-row">
                                    <box-icon name='donate-heart' type='solid' color='#0f69e5' ></box-icon>
                                    <text className=" text-[12px]">Calidad de aire</text>
                                </div>

                                <text className="font-bold">CO: {clima.current.air_quality.co} μg/m³</text>
                            </div>
                        </div>)}
                </div>
            )}
        </>
    );
}