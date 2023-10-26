
import SvgLogo from "./Logo";
export default function FooterFp() {
  return (
    <footer className="py-5 h-[30vh] w-full text-slate-400   bg-black  px-5  md:h-[20vh]  md:mt-5 flex flex-col md:flex-row md: justify-between md:items-center ">
     <div className="flex items-center gap-2">
     
        <SvgLogo className="hidden md:flex"/>
            <div>
              <h4>Fp Servicios</h4>
            <p>direccion: chorrillos 1540, Puerto Montt, Chile</p>
            </div>
     </div>
      <div>
        <h4>contactos:</h4>
        <p>paolo@fpservicios.cl - +56 6 64507229 </p>
        <p></p>
      </div>
      <div>
        <p>Fp servicios Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
