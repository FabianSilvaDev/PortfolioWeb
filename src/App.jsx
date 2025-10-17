import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useEffect, useRef } from 'react'
import './App.css'
import './index.css'
import Header from './components/header/header'
import TitleHeader from './components/TitleHeader/TitleHeader.jsx'
import CardsCarousel from './components/CardsCarousel/CardsCarousel.jsx'
import Text from './components/TextHeader/Text.jsx'
import SectionTwo from './components/SectionTwo/SectionTwo.jsx'
import SectionThree from './components/SectionThree/SectionThree.jsx'
import SectionFour from './components/SectionFour/SectionFour.jsx'
import Lottie from "lottie-react";
import hanIcon from "../public/assets/iconsAnimated/han.json";


gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);


function App() {
  const titleRef = useRef(null);
  const carousel = useRef(null);



 useEffect(() => {
  const ctx = gsap.context(() => {
    
   

    const tl = gsap.timeline({
      ease: "power2.out",
      scrollTrigger: {
      scrub:true,
      scrub:1,
    }
    });

    // 1) Animación inicial cuando carga el componente
    tl.to(titleRef.current.children[0],{
      opacity:0,
      scale:10,
      duration:1,
      ease:"power3.out",
    })

    tl.to(titleRef.current.children[1],{
      y:100,
      opacity:0,
      ease:"power3.out",
    },"<")


  })


  return () => ctx.revert();
}, []);

  return (
    <>


      <Header />
      <div className=' h-[90vh] flex items-center flex-col overflow-hidden sm:overflow-visible relative' >
        <div className='h-[70%] flex flex-col justify-center items-center' ref={titleRef}>
          <TitleHeader title="Building Digital Experiences That Last" />
          <Text Text="I’m Fabian, Creative Full-Stack Developer with 5+ years of experience.
            Specialized in building scalable, high-performance web applications and modern interfaces." />
        </div>

        <section className='h-[40%] w-full'>
          <p className='text-center font-[GeistMono-light] '>
            Last Projects
          </p>
          <CardsCarousel ref={carousel} />
        </section>
        <span className="sm:hidden px-4 mt-5 py-1 absolute bottom-5 left-0 rounded-full justify-left">
            <Lottie
              className=" inline-block"
              animationData={hanIcon}
              loop
              autoplay
              style={{ width: 50, height:50 }}
            />
          </span>
      </div>
      <SectionTwo />
      <SectionThree/>
      <SectionFour/>

      
    </>
  )
}

export default App
