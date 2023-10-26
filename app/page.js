import ContenidoPrincipal from '@/components/ContenidoPrincipal'
import Encabezado from '@/components/header/Encabezado'
import FooterFp from '@/components/FooterFp'
import Navbar from '@/components/header/Navbar'
import "./css/sliderShow.css"
import "./css/estilos.css"
import "./css/nosotros.css"
import "./css/scrollAnimation.css"

export default function Home() {
  return (
    <>
        <Navbar/>
        <Encabezado/>
        <ContenidoPrincipal/>   
        <FooterFp/>
    </>
    
   
  )
}
