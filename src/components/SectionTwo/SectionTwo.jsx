import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import ButtonComponent from '../ButtonComponent/ButtonComponent.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const SectionTwo = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const splitTextS = new SplitText('.SectionTwoParagraf', {
        type: 'chars,words,lines',
      });

      // 🔹 Mantener la sección fija mientras se anima
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.sectionTwo',
          start: 'top 20%',
          scrub: 1,
          pin: true,
          // markers: true, // quítalo al final
        },
      });

      // 🔹 Animación: comienza arriba, termina centrada
      
      tl.fromTo(
        '.SectionTwoParagraf',
        {
          y: '50vh', // empieza arriba del contenedor
          alpha:0
        },
        {
          y: '0vh', // llega al centro
          opacity: 1,
          duration: 2,
          ease: 'power2.out',
        }
      );

      tl.to('h2',{
        color:'#f9f9f9',
         duration: 1.5,
          ease: 'back.out(1.7)'

      })
      // 🔹 Aplica una animación adicional a los caracteres
      tl.from(splitTextS.chars,{
          y: 30,
          alpha:0,
          stagger: 0.03,
          duration: 1.5,
          ease: 'back.out(1.7)',
        },
        '<' // sincronizado con el movimiento del bloque
      );

      tl.from('.btnC2-wrapper', {
         alpha:0, 
         y: 20, 
         duration: 
         0.8, ease: 'power2.out' });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="sectionTwo flex flex-col mb-6 h-[700px] sm:h-[800px] w-full text-center items-center gap-10 ">
      <h2 className="text-6xl font-bold h-[15%] pt-10 font-[Anton] text-[#171717]">ABOUT ME</h2>
      <p className="SectionTwoParagraf sm:text-4xl text-3xl w-full px-2 sm:w-[700px] font-[Aeonik]">
      I collaborate with individuals, studios, and companies to transform their vision into powerful, engaging, and high-performing websites.</p>
      <div className="btnC2-wrapper mt-10">
         <ButtonComponent cta="Go to see me"  />
      </div>
    </section>
    
  );
};

export default SectionTwo;
