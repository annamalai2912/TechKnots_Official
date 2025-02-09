"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

const Brands = () => {
  const mscCompanies = [
    {
      id: 1,
      name: "Internet of Things",
      image: "/images/brands/google.jpg",
      imageLight: "/images/learning/iot-light.png",
    },
    {
      id: 2,
      name: "PCB Design",
      image: "/images/learning/pcb.png",
      imageLight: "/images/learning/pcb-light.png",
    },
    {
      id: 3,
      name: "Drone Technology",
      image: "/images/learning/drone.png", 
      imageLight: "/images/learning/drone-light.png",
    },
    {
      id: 4,
      name: "Electric Vehicles",
      image: "/images/learning/ev.png",
      imageLight: "/images/learning/ev-light.png",
    },
    {
      id: 5,
      name: "Smart Home",
      image: "/images/learning/smart-home.png",
      imageLight: "/images/learning/smart-home-light.png",
    },
    {
      id: 6,
      name: "RFID & NFC",
      image: "/images/learning/rfid.png",
      imageLight: "/images/learning/rfid-light.png",
    }
  ];

  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="rounded-sm bg-gray-light dark:bg-gray-dark overflow-hidden">
              <div className="flex animate-carousel">
                {[...mscCompanies, ...mscCompanies].map((company, index) => (
                  <div
                    key={`${company.id}-${index}`}
                    className="flex min-w-[200px] items-center justify-center px-3 py-[15px]"
                  >
                    <div className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100">
                      <Image
                        src={company.imageLight}
                        alt={company.name}
                        fill
                        className="hidden dark:block"
                      />
                      <Image
                        src={company.image}
                        alt={company.name}
                        fill
                        className="block dark:hidden"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-carousel {
          animation: carousel 20s linear infinite;
        }

        .animate-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;