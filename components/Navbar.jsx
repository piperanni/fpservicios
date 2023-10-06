"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";


export default function Navbar() {
  const[menu_activar, setMenu_activar] = useState("False")

  function activarMenu () {
    setMenu_activar(!menu_activar)
    console.log(menu_activar)
  }
  return (
    <nav className="w-full min-w-[375px]">
        <ul className="w-full h-full bg-slate-400 flex flex-col items-center  md:flex-row lg:justify-between p-5 ">
         <div className=" w-full flex justify-between">
              <div className="flex gap-4 m-auto md:m-0">
              <h1>LOGO</h1>
              <h1 >FP SERVICIOS</h1>
              </div>
              <button className="md:hidden w-auto" onClick={activarMenu}><HiMenu/></button> 
         </div>
              
          <div className={menu_activar?"hidden md:contents w-full ":"w-full md:w-auto"}>
            <ul className="md:flex md:gap-2 text-center md:text-start">
              <li className=" border-b-2 md:border-b-0"><Link href="/" >INICIO</Link></li>
              <li className=" border-b-2 md:border-b-0"><Link href="/"> SERVICIOS</Link></li>
              <li className=" border-b-2 md:border-b-0"><Link href="/">CONTACTO</Link></li>
              <li className=" border-b-2 md:border-b-0"><Link href="/">NOSOTROS</Link></li>
            </ul>
          </div>
          
        </ul>   
    </nav>
  )
}
