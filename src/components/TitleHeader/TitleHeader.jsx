import gsap from 'gsap'
import { useEffect } from 'react' ;

const TitleHeader = ({title})=>{

    useEffect(()=>{
        const ctx = gsap.context(() => {
            gsap.from('h1',{   
                opacity:0,
                y:100,
                duration:1,
                ease:"power3.out",
            })
        });
        return () => ctx.revert();
    },[])

    return(
            <h1 className='font-[Anton] text-4xl sm:text-7xl sm:w-[700px] w-[350px] text-center leading-snug box-border mb-2'>
                {title}
            </h1>
    )
}

export default TitleHeader;