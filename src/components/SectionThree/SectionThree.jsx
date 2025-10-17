import React, { useState } from "react";
import iconFile from "../../../public/assets/iconsAnimated/iconFile.json";
import Lottie from "lottie-react";
import projects from "../../works.json";

const SectionThree = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="h-auto w-full">
      <div className="sm:flex justify-between w-full">
        <h3 className="text-5xl font-[Aeonik-Bold] w-full sm:w-[600px] text-left px-3">
          Here is a selection of my most recent works
          <span className="inline-flex items-center px-4 py-1 mt-1 ml-4 rounded-full border-2 border-solid">
            <Lottie
              className="inline-block"
              animationData={iconFile}
              loop
              autoplay
              style={{ width: 30, height: 30 }}
            />
          </span>
        </h3>
        <h4 className="font-[GeistMono-Medium] sm:w-[200px] sm:text-end text-[#444444] opacity-0 sm:opacity-100">
          Hover on names for a closer look
        </h4>
      </div>

      <section className="mt-20 flex flex-col gap-10 items-center w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative cursor-pointer flex flex-col sm:flex-row w-full justify-between items-center p-6 border-b border-[#444444] transition-all duration-300"
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
          >
           <div className="flex gap-5">
             {/* Imagen izquierda */}
            <picture className="sm:w-[200px] sm:h-[200px]  w-[120px] h-[120px] inline-block">
              <img
                src={project.img?.[0]}
                alt=""
                className={`w-full h-full object-cover transition-all duration-500
                  ${
                    hovered === project.id
                      ? "sm:opacity-100 sm:scale-100"
                      : "sm:opacity-0 sm:scale-95"
                  }
                  opacity-100 scale-100  /* visible siempre en móvil */
                `}
              />
            </picture>

            {/* Imagen central */}
            <picture className="sm:w-[200px] sm:h-[200px]  w-[120px] h-[120px] inline-block">
              <img
                src={project.img?.[1] || project.img?.[0]}
                alt=""
                className={`w-full h-full object-cover transition-all duration-500
                  ${
                    hovered === project.id
                      ? "sm:opacity-100 sm:scale-100"
                      : "sm:opacity-0 sm:scale-95"
                  }
                  opacity-100 scale-100 /* visible siempre en móvil */
                `}
              />
            </picture>
           </div>

            {/* Nombre del proyecto */}
            <div className="w-full flex flex-col justify-center items-center">
              <h3
              className={`text-6xl sm:text-9xl font-[Anton] sm:text-center w-[100%] sm:w-[100%] transition-all duration-500 mt-4
                ${
                  hovered === project.id
                    ? "text-gray-200 sm:scale-110"
                    : "text-[#444444] sm:scale-100"
                }
              `}
            >
              {project.name}
            </h3>

           <div className="w-full h-auto flex sm:gap-4 gap-2 flex-wrap items-center justify-center sm:mt-3 mt-5">
                {project.labels.map((label, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 bg-[#222] text-white rounded-full text-sm
                      ${
                         hovered === project.id
                        ? "opacity-100 sm:scale-110"
                        : "sm:opacity-0 sm:scale-100"
                }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Imagen derecha */}
            <picture className=" hidden w-[200px] h-[200px] sm:inline-block">
              <img
                src={project.img?.[2] || project.img?.[0]}
                alt=""
                className={`w-full h-full object-cover transition-all duration-500
                  ${
                    hovered === project.id
                      ? "sm:opacity-100 sm:scale-100"
                      : "sm:opacity-0 sm:scale-95"
                  }
                  opacity-100 scale-100 /* visible siempre en móvil */
                `}
              />
            </picture>
          </div>

        ))}
      </section>
    </div>
  );
};

export default SectionThree;
