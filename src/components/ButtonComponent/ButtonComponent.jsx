const ButtonComponent = ({cta}) => {
  return (
    <button
      className="
        btnC2
        font-[Aeonik]
        tracking-wider 
        rounded-[1.1em] 
        bg-[#0e0e0e] 
        text-white 
        cursor-pointer 
        px-8 py-4 
        duration-300 
        ease-in-out 
        shadow-[13px_13px_10px_#0a0a0a,-13px_-13px_10px_#151515]
        hover:shadow-[16px_16px_33px_#0a0a0a,-16px_-16px_33px_#1b1b1b]
        hover:bg-[#121212] 
        active:scale-95
      "
    >
      {cta}
    </button>
  );
};

export default ButtonComponent;