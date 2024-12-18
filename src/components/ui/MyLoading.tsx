"use client";
import Lottie from "lottie-react";
import loading from "@/assets/lottie/loading.json";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MyLoading = () => {
  const alphabetsArr = [
    "e",
    "a",
    "t",
    "",
    "s",
    "l",
    "e",
    "e",
    "p",
    "",
    "c",
    "o",
    "d",
    "e",
  ];

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div   className={`absolute top-0 left-0 inset-0  h-screen w-full flex justify-center items-center bg-black  z-[99999] transition-opacity duration-700 ${
      isVisible ? "opacity-100" : "opacity-0 pointer-events-none "
    }`}>
      <div className="pb-">
        <Lottie className="h-96  " animationData={loading} loop={true} />
        <div className="flex items-center justify-center font-bold  text-white text-center text-5xl  ">
          {alphabetsArr?.map((item, index) => (
            <div key={index} >
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                // viewport={{ once: false }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 11,
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`text-primary-light  xs:text-6xl sm:text-7xl md:text-7xl xl:text-9xl  ${
                  item === "" ? "w-3 xs:w-5 sm:w-7 md:w-10" : ""
                }`}
              >
                {item}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyLoading;
