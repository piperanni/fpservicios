"use client"
import Link from "next/link";
import "../app/css/estilos.css";
import {Cursor, useTypewriter } from 'react-simple-typewriter';
export default function Encabezado() {
  const [text] = useTypewriter({
    words:[
      "PASIÓN POR LOS TRANSPORTES",
      "REPRESENTAMOS TRANSPORTES",
      "SOMOS FP SERVICIOS"
    ],
    loop:true,
    typeSpeed:80,
    delaySpeed:900,
    deleteSpeed:50
  });
  return (
    <header className="contenedorHeader">
        <div className=" text-center encabezado w-full h-full text-white flex flex-col items-center justify-center">
          <h1 className="text-base font-semibold md:font-bold md:text-4xl">REPRESENTAMOS A LOS MEJORES TRANSPORTES</h1>
          <p className=" font-medium md:font-semibold md:text-xl"> 
            {text} 
            <Cursor cursorBlinking cursorStyle="|"cursorColor='#ffaa17'/>
          </p>

          <Link  href="#seccionFormulario"className=" mt-10 uppercase bg-orange-500 p-4 rounded-md font-semibold">Contáctanos</Link>
        </div>
    </header>
  )
}
