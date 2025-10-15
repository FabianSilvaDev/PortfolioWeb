import gsap from 'gsap'
import { useEffect } from 'react';


const Text = ({Text}) => {

     useEffect(()=>{
        const ctx = gsap.context(() => {
            gsap.from('P',{   
                opacity:0,
                y:100,
                duration:2,
                ease:"power3.out",
            })
        });
        return () => ctx.revert();
    },[])

    return(
        <p className='paragraf text-center sm:text-sm text-xs sm:w-[450px] w-[300px] font-[GeistMono-regular] text-[#AAAAAA] '>
            {Text}
        </p>
    )
}

export default Text;