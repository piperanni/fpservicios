"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import FlechaDerecha from "./iconsSlider/FlechaDerecha";
import FlechaIzquierda from "./iconsSlider/FlechaIzquierda";

export default function SlideCorrecto({ listaImagenes }) {
  const contenedorSlideShow = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  function siguiente() {
    if (contenedorSlideShow.current.children.length > 0) {
      const primerElemento = contenedorSlideShow.current.children[0];
      const tamanoSlide = contenedorSlideShow.current.children[0].offsetWidth;
      contenedorSlideShow.current.style.transition = `600ms ease-out all`;
      contenedorSlideShow.current.style.transform = `translateX(-${tamanoSlide}px)`;

      function transicion() {
        contenedorSlideShow.current.style.transition = "none";
        contenedorSlideShow.current.style.transform = `translateX(0)`;
        contenedorSlideShow.current.appendChild(primerElemento);
        contenedorSlideShow.current.removeEventListener(
          "transitionend",
          transicion
        );
      }

      contenedorSlideShow.current.addEventListener("transitionend", transicion);
    }
  }

  function anterior() {
    if (contenedorSlideShow.current.children.length > 0) {
      const index = contenedorSlideShow.current.children.length - 1;
      const ultimoElemento = contenedorSlideShow.current.children[index];

      contenedorSlideShow.current.insertBefore(
        ultimoElemento,
        contenedorSlideShow.current.firstChild
      );
      contenedorSlideShow.current.style.transition = "none";
      const tamanoSlide = contenedorSlideShow.current.children[0].offsetWidth;
      contenedorSlideShow.current.style.transform = `translateX(-${tamanoSlide}px)`;

      setTimeout(() => {
        contenedorSlideShow.current.style.transition = `600ms ease-out all`;
        contenedorSlideShow.current.style.transform = `translateX(0)`;
      }, 60);
    }
  }

  useEffect(() => {
    let intervalId;

    const startInterval = () => {
      intervalId = setInterval(() => {
        // Código a ejecutar en cada intervalo
        siguiente();
      }, 3000); // Intervalo de 1 segundo
    };

    if (!isPaused) {
      startInterval();
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused]);

  return (
    <div className="slide-right h-full seccionSlider w-full md:w-[65%]">
      <div
        className="contenedorPrincipal h-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="contenedorSlide h-full w-full" ref={contenedorSlideShow}>
          {listaImagenes.map((item) => {
            return (
              <div className="slideshow" key={item.id}>
                <div className="w-full h-full ">
                <Image
                  src={item.imgUrl}
                  className="h-full w-full"
                  alt={item.desc}
                  priority={true}
                                 
                />
                </div>
                <div className="contendorParrafo">
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="contenedorBotones">
          <button className="botonSlide" onClick={anterior}>
            <FlechaIzquierda />
          </button>
          <button className="botonSlide" onClick={siguiente}>
            <FlechaDerecha />
          </button>
        </div>
      </div>
    </div>
  );
}
