import React from "react";
import SlideCorrecto from "./sliderShow/SlideCorrecto";
import { data } from "@/app/listaImagenes";
export default function Transportes() {
  return (
    <section className="flex flex-col md:flex-row mt-5 bg-white w-full h-[50vh]  md:justify-center md:items-center shadow-xl">
      <h1 className="uppercase text-center w-full md:w-[30%] text-sm md:text-2xl text-slate-600 font-bold px-5">
        los transportes que representamos
      </h1>
      <SlideCorrecto listaImagenes={data}  />
      

      
    </section>
  );
}
