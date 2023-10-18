
import Image from "next/image"
export default function cardServicios( {imagen}) {
  return (
    <div className="flex flex-col lg:flex-row md:h-[300px]  text-slate-600  shadow-2xl items-center justify-center p-5">
       <div className="">
        <h1 className="font-semibold text-lg">Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit consequuntur explicabo amet eveniet animi quis ratione facilis? Maxime, minus?</p>
       </div>
       <Image src={imagen}alt="imagen mic"className=" lg:w-[300px] lg:h-[200px]"></Image>
    </div>
  )
}
