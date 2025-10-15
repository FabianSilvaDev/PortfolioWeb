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


gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);


function App() {
  const titleRef = useRef(null);
  const carousel = useRef(null);
const sectionTwo = useRef(null);


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
      <div className=' h-[90vh] flex items-center flex-col overflow-hidden sm:overflow-visible' >
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
      </div>
      
      <SectionTwo />
      <SectionThree/>

      
    </>
  )
}

export default App
