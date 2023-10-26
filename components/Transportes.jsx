import React from "react";
import SlideCorrecto from "./sliderShow/SlideCorrecto";
import { data } from "@/app/listaImagenes";
export default function Transportes() {
  return (
    <section className="flex flex-col md:flex-row  bg-white w-full h-[35vh] md:h-[50vh] justify-center items-center shadow-xl md:py-5 ">
      <h1 className="hidden pr-5 md:block uppercase text-center w-full md:w-[35%] text-sm md:text-2xl text-slate-600 font-bold ">
        los transportes que representamos
      </h1>
      <SlideCorrecto listaImagenes={data}  />
   
    </section>
  );
}
