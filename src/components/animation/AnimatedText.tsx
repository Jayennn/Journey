"use client";
import { AnimatePresence, motion, useAnimation, useInView, type Variants } from "motion/react";
import { useEffect, useRef } from "react";
import { variant, VariantKeys } from "./variant";
import { cn } from "@/lib/utils";

type AnimatedPropsType = {
  className?: string,
  word: string,
}


const AnimatedTextUp = ({ word, className }: AnimatedPropsType) => {
  let letters = word.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }

    return () => {
      mainControls.stop();
    };
  }, [isInView]);



  return (
    <motion.div
      ref={ref}
      variants={variant.container}
      className="overflow-hidden relative flex py-1"
      initial="hidden"
      animate={mainControls}
    >
      {letters.map((letter, index) => (
        <motion.h1
          custom={index}
          key={index}
          variants={variant.pullupVariant}
          className={cn(className, "inline-block tracking-[-0.02em]")}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </motion.div>
  );
};

const AnimateGradualSpacing = ({ word, className }: AnimatedPropsType) => {
  const gradual = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="flex space-x-1 justify-center">
      <AnimatePresence>
        {word.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={gradual}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={cn("text-4xl tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]", className)}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
};

export {
  AnimatedTextUp,
  AnimateGradualSpacing,
};