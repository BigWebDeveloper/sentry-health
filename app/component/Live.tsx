"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaCircle } from "react-icons/fa";
import { useState } from "react";
import FadeIn from "./FadeIn";

const Live = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  const handleToggle = () => setToggle(!toggle);

  return (
    <FadeIn className="fixed w-screen left-0 z-50 flex justify-center">
      <div
        onClick={handleToggle}
        className="relative grid gap-2 items-center bg-black shadow-2xl z-50 p-4 py-3 px-5 text-white rounded-3xl cursor-pointer"
      >
        {/* LIVE row */}
        <div className="flex items-center gap-5 justify-between transition-all duration-700 ease-in-out">
          <div className="flex items-center gap-1">
            {/* Blinking dot */}
            <motion.div
              className="text-red-500 flex items-center w-3 h-3"
              animate={{ opacity: [0.5, 0, 0.5] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <FaCircle />
            </motion.div>
            <p className="font-bold">LIVE</p>
          </div>

          <div className="flex items-center gap-1">
            <FaHeart className="text-red-600 ml-1" />
            <p className="font-bold">72</p>
          </div>
        </div>

        {/* Toggleable info panel with bounce */}
        <AnimatePresence>
          {!toggle && (
            <motion.div
              key="info-panel"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.95,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 70,
                mass: 5.5,
              }}
              className="flex gap-6 justify-center mt-3"
            >
              <div className="flex flex-col leading-4 items-center gap-1">
                <p className="text-xl font-bold">72</p>
                <span className="font-bold text-gray-500">BPM</span>
              </div>
              <div className="flex flex-col leading-4 items-center gap-1">
                <p className="text-xl font-bold">98.6</p>
                <span className="font-bold text-gray-500">TEMP</span>
              </div>
              <div className="flex flex-col leading-4 items-center gap-1">
                <p className="text-xl font-bold">98%</p>
                <span className="font-bold text-gray-500">O₂</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
};

export default Live;
