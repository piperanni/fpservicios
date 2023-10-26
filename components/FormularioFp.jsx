import Image from "next/image";
import contacto from "../app/images/contacto.jpg";

export default function formularioFp() {
  return (
    <section id="seccionFormulario" className="scroll-card-service md:p-0 md:bg-none md:bg-white grid grid-cols-1 md:grid-cols-7 md:mt-5 h-[70vh] md:h-[80vh] md:w-full shadow-xl">
      <div className=" hidden  md:col-start-1 md:col-end-4 lg:col-end-5 md:flex sm:bg-fixed md:bg-local w-full h-full">
        <Image src={contacto} className="w-full h-full "></Image>
      </div>
      <form
        action=""
        className="md:w-full md:h-full md:col-start-4 lg:col-start-5 md:col-end-8 flex flex-col items-center justify-center bg-slate-500 gap-8"
      >
        <h1 className="text-white font-bold md:font-extrabold md:text-3xl text-xl">CONTACTANOS</h1>
        <div className="flex flex-col md:w-full px-10 text-white text-sm gap-5 md:font-bold font-medium ">
          <div className="w-full flex justify-between items-center">
            <label className="w-1/3">NOMBRE</label>
            <input className=" w-full rounded-sm p-2 text-lg font-medium text-slate-500" type="text" placeholder="nombre" />
          </div>
          <div className="w-full flex justify-between items-center">
            <label className="w-1/3">CORREO</label>
            <input className="rounded-sm p-2 text-lg font-medium w-full text-slate-500"type="email" placeholder="nombre@correo.com" />
          </div>
          <div className="w-full flex justify-between items-center">
            <label className="w-1/3">ASUNTO</label>
            <input className="rounded-sm p-2 w-full text-lg font-medium text-slate-500"type="text" placeholder="asunto" />
          </div>
          <div className="w-full flex justify-between items-center">
            <label className="w-1/3">MENSAJE</label>
            <textarea className="rounded-sm p-2 w-full text-lg font-medium text-slate-500" placeholder="Ingrese su mensaje"></textarea>
          </div>
          <button className="bg-orange-600 p-2 rounded-sm">ENVIAR</button>
        </div>
      </form>
    </section>
  );
}
