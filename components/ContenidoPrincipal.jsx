import Servicios from "./servicios/Servicios";
import Nosotros from "./Nosotros";
import FormularioFp from "./FormularioFp";
import Transportes from "./Transportes";

export default function ContenidoPrincipal() {
  return (
    <main className="w-full h-full flex  flex-col lg:w-[90vw]  ">
        <Servicios/>
        <Nosotros/>
        <Transportes/>
        <FormularioFp/>
    </main>
  )
}
