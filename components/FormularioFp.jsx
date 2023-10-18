import Image from "next/image";
import contacto from "../app/images/jeshoots-com-pUAM5hPaCRI-unsplash.jpg";

export default function formularioFp() {
  return (
    <section id="seccionFormulario"className="grid grid-cols-1 md:grid-cols-7">
      <div className="md:col-start-1 md:col-end-5 flex ">
        <Image src={contacto} className="w-full"></Image>
      </div>
      <form
        action=""
        className=" w-full md:col-start-5 md:col-end-8 flex flex-col items-center justify-center bg-slate-500 gap-8"
      >
        <h1 className="text-white font-extrabold text-3xl">CONTACTANOS</h1>
        <div className="flex flex-col md:w-full px-10 text-white text-lg gap-4 font-bold ">
          <div className="w-full flex justify-between items-center">
            <label>NOMBRE</label>
            <input className=" w-80 rounded-sm p-2 text-lg font-medium" type="text" placeholder="nombre" />
          </div>
          <div className="w-full flex justify-between items-center">
            <label>CORREO</label>
            <input className="rounded-sm p-2 text-lg font-medium w-80"type="email" placeholder="nombre@correo.com" />
          </div>
          <div className="w-full flex justify-between items-center">
            <label>ASUNTO</label>
            <input className="rounded-sm p-2 w-80 text-lg font-medium"type="text" placeholder="asunto" />
          </div>
          <div className="w-full flex justify-between items-center">
            <label>MENSAJE</label>
            <textarea className="rounded-sm p-2 w-80 text-lg font-medium" placeholder="Ingrese su mensaje"></textarea>
          </div>
          <button className="bg-orange-600 p-5 rounded-md">ENVIAR</button>
        </div>
      </form>
    </section>
  );
}
