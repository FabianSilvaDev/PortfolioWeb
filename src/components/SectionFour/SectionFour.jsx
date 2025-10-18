import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import worldIcon from "../../../public/assets/iconsAnimated/world.json";
import pageIcon from "../../../public/assets/iconsAnimated/page.json";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const SectionFour = () => {

    useEffect(() => {
    const ctx = gsap.context(() => {

    const tl = gsap.timeline({
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.sectionFour',
        start: 'top 20%',
        scrub:true,
        scrub:1,
        pin:true
    }
    });

    // 1) Animación inicial cuando carga el componente
    tl.from('.pSectionFour',{
        x:-100,
        alpha:0,
        duration:1,
        ease:"power3.out",
    })

    tl.from('.btn-3',{
      alpha:0,
      x:30,
      duration:1,
      ease:"power3.out",
    },"<")

  })


  return () => ctx.revert();
}, []);

  return (
    <section className="sectionFour h-[500px] w-full  mt-20 flex flex-col items-center justify-center overflow-hidden">
      <article>

        <h5
          className="pSectionFour mb-15 font-[Aeonik] sm:font-[Aeonik-Bold] text-3xl sm:text-4xl sm:w-[800px] text-left sm:text-center w-[390px] pl-3"
        >
          <span className="inline-flex items-center px-4 py-1 mt-1 mr-3 rounded-full border-2 border-solid border-gray-700">
            <Lottie
              className="inline-block"
              animationData={worldIcon}
              loop
              autoplay
              style={{ width: 30, height: 30 }}
            />
          </span>
          Skilled in full-stack development using PHP, Node.js, MySQL, React, Vue,
          Astro, Express, and Laravel
           <span className="inline-flex items-center px-4 py-1 mt-1 mx-3 rounded-full border-2 border-solid border-gray-700">
            <Lottie
              className="inline-block"
              animationData={pageIcon}
              loop
              autoplay
              style={{ width: 30, height: 30 }}
            />
          </span>
          focused on scalable,
          user-centered solutions.
        </h5>

        <div className="btn-3">
            <ButtonComponent cta={"Watch my github"}/>
        </div>
      </article>
    </section>
  );
};

export default SectionFour;
