import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CardImage from "../CardImage/CardImage.jsx";

const CardsCarousel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Selecciona solo los <picture> dentro del contenedor

    const pictures = gsap.utils.toArray(containerRef.current.querySelectorAll("picture"));
    const divsCards = gsap.utils.toArray(containerRef.current.querySelectorAll(".divCard"));

    const tl = gsap.timeline();

        tl.fromTo(
          divsCards,
          { y: 100, opacity: 0 }, // estado inicial
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2 // animación en cascada
          }
        );

    pictures.forEach((pic, index) => {
      
      pic.addEventListener("mouseenter", () => {
        // Resetear todas las imágenes primero
        gsap.to(pictures, { scale: 1, duration: 1, ease: "power3.out", overwrite: "auto" });

        // La imagen central (hover)
        gsap.to(pic, { scale: 1.2, duration: 1, ease: "power3.out", overwrite: "auto" });

        // Imagen anterior
        if (pictures[index - 1]) {
          gsap.to(pictures[index - 1], { scale: 1.1, duration: 1, ease: "power3.out", overwrite: "auto" });
        }

        // Imagen siguiente
        if (pictures[index + 1]) {
          gsap.to(pictures[index + 1], { scale: 1.1, duration: 1, ease: "power3.out", overwrite: "auto" });
        }
      });

      pic.addEventListener("mouseleave", () => {
        // Reset todas al salir
        gsap.to(pictures, { scale: 1, duration: 1, ease: "power3.out", overwrite: "auto" });
      });

      

    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full flex gap-4 sm:gap-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory ml-5 sm:ml-0 sm:pl-0 sm:justify-center overflow-hidden items-center font-[GeistMono-Light] pb-3"
    >
      <section className="divCard flex flex-col gap-4 items-center group">
        <picture className="h-[200px] w-[200px] cursor-pointer flex-shrink-0 snap-start ">
          <CardImage url={'./src/assets/img/argent.png'}/>
        </picture>
        <div className=" flex gap-10 mt-3 justify-between w-full">
          <p >Argent</p>
          <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 border-amber-50 border py-1 px-2 rounded text-[12px]">
            WEBDESING
          </span>
        </div>
      </section>

      <section className="divCard flex flex-col gap-4 items-center group">
        <picture className="h-[200px] w-[200px] cursor-pointer flex-shrink-0 snap-start ">
          <CardImage url={'./src/assets/img/puntoweb.png'}/>
        </picture>
        <div className=" flex gap-10 mt-3 justify-between w-full">
          <p >PuntoWeb</p>
          <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 border-amber-50 border py-1 px-2 rounded text-[12px]">
           WEBDESING
          </span>
        </div>
      </section>

      <section className="divCard flex flex-col gap-4 items-center group">
        <picture className="h-[200px] w-[200px] cursor-pointer flex-shrink-0 snap-start ">
          <CardImage url={'./src/assets/img/online.png'}/>
        </picture>
        <div className=" flex gap-10 mt-3 justify-between w-full">
          <p >NoctAH</p>
          <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 border-amber-50 border py-1 px-2 rounded text-[12px]">
            FIGMA + WP
          </span>
        </div>
      </section>

      <section className="divCard flex flex-col gap-4 items-center group">
        <picture className="h-[200px] w-[200px] cursor-pointer flex-shrink-0 snap-start ">
          <CardImage url={'./src/assets/img/gallery.png'}/>
        </picture>
        <div className=" flex gap-10 mt-3 justify-between w-full">
          <p >Gallery</p>
          <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 border-amber-50 border py-1 px-2 rounded text-[12px]">
            WEBDESING
          </span>
        </div>
      </section>
      
      <section className="divCard flex flex-col gap-4 items-center group">
        <picture className="h-[200px] w-[200px] cursor-pointer flex-shrink-0 snap-start ">
          <CardImage url={'./src/assets/img/e-coomerce.png'}/>
        </picture>
        <div className=" flex gap-10 mt-3 justify-between w-full">
          <p >Shop</p>
          <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 border-amber-50 border py-1 px-2 rounded text-[12px]">
            SHOP BUILD
          </span>
        </div>
      </section>

      




      
    </div>
  );
};

export default CardsCarousel;
