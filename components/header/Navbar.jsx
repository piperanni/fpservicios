"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import {
  AiFillHome,
  AiFillBook,
  AiFillPhone,
  AiFillSafetyCertificate,
} from "react-icons/ai";
import SvgLogo from "../Logo";
export default function Navbar() {
  const [menu_activar, setMenu_activar] = useState("False");

  function activarMenu() {
    setMenu_activar(!menu_activar);
    console.log(menu_activar);
  }
  return (
    <nav className="w-full min-w-[375px] items-center   text-white encabezado fixed z-50 md:flex md:justify-between px-10 py-1">
      <div className="flex  justify-between items-center">
        <SvgLogo/>
        <button className="md:hidden w-auto py-5" onClick={activarMenu}>
          <HiMenu />
        </button>
      </div>
      
      <ul className=" h-full flex flex-col items-center  md:flex-row ">
        <div
          className={
            menu_activar ? "hidden md:contents w-full " : "w-full md:w-auto"
          }
        >
          <ul className="md:flex md:gap-6 text-center md:text-start">
            <li className=" border-b-2 md:border-b-0 ">
              <Link href="/" className=" flex gap-1 items-center">
                <AiFillHome />
                INICIO
              </Link>
            </li>
            <li className=" border-b-2 md:border-b-0">
              <Link href="#serviciosid" className=" flex gap-1 items-center">
                <AiFillBook /> SERVICIOS
              </Link>
            </li>
            <li className=" border-b-2 md:border-b-0">
              <Link href="#nosotrosid" className=" flex gap-1 items-center">
                <AiFillSafetyCertificate />
                NOSOTROS
              </Link>
            </li>
            <li className=" border-b-2 md:border-b-0">
              <Link
                href="#seccionFormulario"
                className=" flex gap-1 items-center"
              >
                <AiFillPhone />
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
}
