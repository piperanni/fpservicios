import React from "react";
import CardServicios from "./CardServicios";
import imgmic1 from "../../app/images/markus-spiske-7PMGUqYQpYc-unsplash.jpg";
import imgmic2 from "../../app/images/romain-dancre-doplSDELX7E-unsplash.jpg";
export default function Servicios() {
  return (
    <seccion id="serviciosid" className="h-full w-full md:h-screen  bg-white flex flex-col justify-center px-5 md:px-0">
      <h1 className="text-center text-xl  md:text-3xl text-slate-600 font-bold pb-10 pt-5"
      >
        NUESTROS SERVICIOS
      </h1>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:h-[80%]  ">
        <CardServicios imagen={imgmic1} />
        <CardServicios imagen={imgmic2} />
        <CardServicios imagen={imgmic1} />
        <CardServicios imagen={imgmic2} />
      </div>
    </seccion>
  );
}
