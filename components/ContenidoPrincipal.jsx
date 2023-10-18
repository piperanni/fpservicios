import CardServicios from "./CardServicios"
import imgmic1 from '../app/images/markus-spiske-7PMGUqYQpYc-unsplash.jpg';
import imgmic2 from '../app/images/romain-dancre-doplSDELX7E-unsplash.jpg';
import FormularioFp from "./FormularioFp";
import SlideCorrecto from "./sliderShow/SlideCorrecto";
import { data } from "@/app/listaImagenes";

export default function ContenidoPrincipal() {
  return (
    <main className="  w-full lg:w-[90vw]  flex  flex-col">
        
        <seccion className="h-screen ">
             <h1 id="serviciosid"className="text-center py-5  text-3xl text-slate-600 font-bold ">NUESTROS SERVICIOS</h1>
            <div className="grid grid-cols-2 gap-5 mb-6">
            <CardServicios imagen={imgmic1}/>
            <CardServicios imagen={imgmic2}/>
            <CardServicios imagen={imgmic1}/>
            <CardServicios imagen={imgmic2}/>
            </div>
        </seccion>
        <article className="text-white shadow-2xl bg-slate-400">

         <div className="">
         <h1 id="nosotrosid"className="text-3xl font-extrabold">
            SOBRE NOSOTROS ...
          </h1>
          <p className="text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi hic minus aspernatur. Animi, consectetur necessitatibus. Et beatae optio doloribus tempore ducimus enim nulla ut molestiae magni quisquam debitis fugiat soluta dignissimos iure tempora praesentium corporis incidunt, omnis vel. Reiciendis velit odio accusamus. Sequi quidem, ipsum eius delectus doloribus in aspernatur porro nam harum dolor impedit. Non in perspiciatis tempore quisquam est? Nulla velit repellendus nemo magnam reiciendis neque praesentium debitis aperiam blanditiis nisi, recusandae, perspiciatis possimus non aut a quibusdam excepturi amet fuga sequi. Facilis iure aperiam voluptates enim eveniet, corrupti quia repudiandae assumenda totam eius, illo amet nisi!
          </p>
         </div>
          <section className="grid grid-cols-1 md:grid-cols-7 shadow-2xl h-[500px]">
          <div className="md:col-start-1 md:col-end-3 md:justify-center md:items-center flex flex-col px-5">
            <h1 className="uppercase">
              descubre los transportes que representamos
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam iste quisquam magni eius culpa facilis iure rem aliquam, soluta reprehenderit!</p>
          </div>
          <SlideCorrecto listaImagenes={data}/>  
        </section>
        </article>
        
        <FormularioFp/>
    </main>
  )
}
