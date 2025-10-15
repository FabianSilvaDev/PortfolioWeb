import {useState, useEffect, useRef} from 'react'
import {gsap} from 'gsap'
import Button from '../Button/Button'

const Header = ()=>{
    const button = useRef(null);

    useEffect(()=>{
        const ctx = gsap.context(() => {
          gsap.from('.header', {
            y: -80,
            duration: 1,
            ease: "power3.out",
            immediateRender: false,
          });

         
            gsap.from('.menu li', {
              opacity: 0,
              y: -20,
              stagger: 0.2,
              delay: 0.7,
              ease: "power3.out",
            });

            gsap.from('.logo', {
              opacity: 0,
              y: -20,
              delay: 0.5,
              ease: "power3.out",
            });

            gsap.from('.button',{
                opacity:0,
                y:-20,
                stagger:0.2,
                delay:0.9,
            })

        });

        return () => ctx.revert();
    },[])
    const [activeIndex, setActiveIndex] = useState(0); // por defecto el primero
    const menuItems = ["Home", "About Me", "Projects","Social Media"];
    return(
       <header className="heasder flex justify-between items-center px-10">
      <span className="logo flex items-center font-[Neuropolitical] p-0">
        FabianDev
      </span>
      <div className="font-[GeistMono-Regular]">
        <ul className="hidden sm:flex menu gap-4">
          {menuItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <li
                key={index}
                className={`cursor-pointer text-sm transition-colors duration-200 text-[16px]`}
                onClick={() => setActiveIndex(index)}
              >
                <a
                  href={`#${item}`}
                  className={isActive ? "text-[#454545]" : "text-[#f9f9f9]"}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <Button cta="Contact Me"></Button>
    </header>
    )
}

export default Header;