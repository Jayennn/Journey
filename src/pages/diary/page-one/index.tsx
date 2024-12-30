"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView, useTransform, useScroll, motion, useAnimation } from "motion/react"
import { AnimatedTextUp, AnimateGradualSpacing } from "@/components/animation/AnimatedText";
export default function PageOne() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true })
  const mainControls = useAnimation()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"],
  })

  useEffect(() => {
    if (isInView) {
      console.log(1)
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);



  const scale = useTransform(scrollYProgress, [0.1, 7], [0, 7])

  return (
    <main>
      <section className="pt-10 pb-24 lg:py-16 h-screen min-h-screen">
        <div className="h-full container flex flex-col justify-between text-[#424242]">
          <div className="flex flex-col gap-1 items-end">
            <span className="h-[1.5px] w-[255px] bg-black"></span>
            <AnimateGradualSpacing className="font-new-york text-" word="Page 1" />
            {/* <h1 className="font-new-york text-4xl">Page 1</h1> */}
          </div>
          <div className="flex flex-col font-product-sans">
            <AnimatedTextUp className="text-5xl font-bold leading-[3rem]" word="Philacolist" />
            {/* <h2 ></h2> */}
            <p className="text-lg">Someone who finds beauty in all things</p>
          </div>
        </div>
      </section>
      <motion.div
        className="py-32"
      >
        <div className="container flex flex-col lg:flex-row items-center gap-3 font-product-sans text-[#424242]">
          <div className="relative w-full lg:w-[415px] h-[545px] flex items-center justify-center">
            <Image
              className="-z-10 absolute"
              src="/svg/blob_2.svg"
              width={400}
              height={400}
              alt="Blob 1"
            />
            <div className="flex flex-col items-center">
              <AnimatedTextUp className="text-5xl font-bold leading-[3rem]" word="Hi" />
              <AnimatedTextUp className="text-5xl font-bold leading-[3rem]" word="Tiffany" />
            </div>
          </div>
          <div className="relative text-justify">
            <Image
              className="-z-10 absolute right-0"
              src="/svg/blob_1.svg"
              width={400}
              height={400}
              alt="Blob 1"
            />
            <p className="text-lg">It’s great to see you!</p>
            <p className="text-lg">
              I hope your birthday is filled with happiness, good health, and prosperity. May all your dreams come true!
              <br />
              <br />
              Apologies for the late birthday wish, but this gift comes straight from the heart. I hope you love it. Happy birthday and all the best to you!
            </p>

          </div>
        </div>
      </motion.div>
      <section className="py-32">
        <div className="container flex flex-col gap-40">
          <div className="flex flex-col items-center justify-center font-product-sans text-[#424242]">
            <AnimatedTextUp className="text-5xl font-bold leading-[3rem]" word="Ineffaceable" />
            {/* <h2 className="text-5xl font-bold">Ineffaceable</h2> */}
            <p className="text-lg">Something that cannot be erased or forgotten.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 items-center justify-between">
            <Image
              className="w-full"
              src="/image/bendera.png"
              width={250}
              height={250}
              alt="Bendera"
            />
            <Image
              className="w-full"
              src="/image/tiffany.png"
              width={250}
              height={250}
              alt="Bendera"
            />
            <Image
              className="w-full"
              src="/image/blooming.png"
              width={250}
              height={250}
              alt="Bendera"
            />
            <Image
              className="w-full"
              src="/image/fish-art.png"
              width={250}
              height={250}
              alt="Bendera"
            />
          </div>
          {/* <div className="flex flex-col gap-4 items-center justify-between">
          </div> */}
        </div>
      </section>
      <section className="py-32">
        <div className="relative overflow-hidden container flex items-center justify-center w-full min-h-screen font-product-sans text-[#424242]">
          <AnimatedTextUp className="text-4xl md:text-5xl font-bold" word="Selamat Ulang Tahun!" />
          {/* <h2 className="text-3xl md:text-5xl font-bold">Selamat Ulang Tahun!</h2> */}
          <motion.img
            animate={mainControls}
            style={{ scale }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute max-w-3xl md:max-w-full"
            src="/language.svg"
            alt="happy birthday language"
          />
        </div>
      </section>
      <section className="py-32 h-screen min-h-screen">
        <div className="h-full relative container flex flex-col w-full font-product-sans text-[#424242]">
          <Image
            className="absolute"
            src="/svg/blob_3.svg"
            width={360}
            height={360}
            alt="happy birthday language"
          />
          <Image
            className="absolute bottom-0 right-0"
            src="/svg/blob_4.svg"
            width={360}
            height={360}
            alt="happy birthday language"
          />
          <h2 className="text-3xl font-bold bg-gradient-to-br from-[#3E5151] to-[#DECBA4] inline-block text-transparent bg-clip-text">Oiya Hampir Lupa!</h2>
          <h2 className="my-auto text-4xl font-bold text-center bg-gradient-to-br from-[#3E5151] to-[#DECBA4] inline-block text-transparent bg-clip-text">Selamat Tahun Baru! <br /> Tiffany</h2>
          <p className="text-right text-xl font-bold leading-5 bg-gradient-to-bl from-[#3E5151] to-[#DECBA4] inline-block text-transparent bg-clip-text">
            See You
            <br />
            2025
          </p>
        </div>
      </section>
    </main >
  )
}