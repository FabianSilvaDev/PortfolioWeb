const Button = ({cta})=>{
    return (
        <button
  className="
    font-[GeistMono-Regular]
    button
    h-[40px] 
    px-[25px] 
    text-white 
    text-[0.7rem] 
    leading-[14px] 
    tracking-[1.2px] 
    font-normal 
    uppercase 
    rounded 
    border-0 
    overflow-hidden 
    bg-gradient-to-r from-[#1c1c1c] to-[#6220fb] 
    [clip-path:polygon(0_0,0_0,100%_0,100%_0,100%_calc(100%-15px),calc(100%-15px)_100%,15px_100%,0_100%)] 
    cursor-pointer
  "
    >
    {cta}
    </button>
    )
}

export default Button;