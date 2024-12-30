import Image, { ImageProps, StaticImageData } from "next/image";
import { motion } from "motion/react"
import Link from "next/link";

type BannerPropsType = {
  title: string,
  href: string
  image: string | StaticImageData
}

export default function BannerDiary({ title, image, href }: BannerPropsType) {

  const whiteSlide = {
    initial: {
      translateX: "0%", // Initial position
      transition: {
        type: "spring",
        damping: 35,
        stiffness: 100,
        delay: 0.0, // No delay for the white slide
      },
    },
    animate: {
      translateX: "-105%", // Slide out
      transition: {
        type: "spring",
        damping: 35,
        stiffness: 100,
        delay: 0.0, // No delay for the white slide
      },
    },
  };

  const blackSlide = {
    initial: {
      translateX: "0%", // Initial position
      transition: {
        type: "spring",
        damping: 35,
        stiffness: 100,
        delay: 0.0, // No delay for the white slide
      },
    },
    animate: {
      translateX: "105%", // Slide out
      transition: {
        type: "spring",
        damping: 35,
        stiffness: 100,
        delay: 0.2, // Delay to make it follow the white slide
      },
    },
  };

  const color = {
    initial: {
      color: "#424242",
    },
    animate: {
      color: "#FFFFFF",
    },
  };


  return (
    <Link href={href}>
      <motion.div
        initial="initial"
        animate="initial"
        whileHover="animate"
        className="relative flex items-center justify-center w-[180px] h-[415px] overflow-hidden"
      >
        <motion.h1 variants={color} className="font-new-york text-2xl text-[#424242]">
          {title}
        </motion.h1>
        {/* Background Image */}
        <Image
          className="-z-10 absolute overflow-hidden h-full object-cover"
          src={image}
          width={250}
          height={100}
          alt="Tiffany's Journey"
        />
        {/* White Slide */}
        <motion.div
          variants={whiteSlide}
          className="-z-[5] absolute top-0 left-0 h-full w-full bg-white"
        ></motion.div>
        {/* Black Slide */}
        <motion.div
          variants={blackSlide}
          className="-z-[6] absolute top-0 left-0 h-full w-full bg-black/50"
        ></motion.div>
      </motion.div>
    </Link>
  )
}