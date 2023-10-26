
import Image from "next/image"
export default function cardServicios( {imagen}) {
  return (
    <div className="  flex justify-between lg:grid  lg:grid-cols-3 text-slate-600  shadow-xl w-full bg-slate-100 items-center p-5 scroll-card-service">
       <div className="flex flex-col w-[60%] md:w-full lg:col-start-1 lg:col-end-3  md:flex-col lg:justify-center pr-5">
        <h1 className="font-semibold text-base mb-2">Lorem ipsum dolor sit amet.</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit consequuntur explicabo amet eveniet animi quis ratione facilis? Maxime, minus?</p>
       </div>
       <div className=" w-[40%] md:w-full lg:col-star-3 lg:col-end-4 ">
        <Image src={imagen}alt="imagen mic"></Image>
       </div>
    </div>
  )
}
