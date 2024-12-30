import "@/styles/globals.css";
import { useEffect, type ReactElement, type ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Lenis from "lenis";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/router";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()
  // Use the layout defined at the page level, if available
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      autoResize: true,
      touchMultiplier: 2,
      infinite: false,
      smoothWheel: true
    });


    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page)

  // return getLayout(
  //   <AnimatePresence mode="wait">
  //     <motion.div key={router.pathname}>
  //       <Component {...pageProps} />

  //       <motion.div

  //         className="slide-in absolute top-0 left-0 w-full h-screen bg-black origin-bottom"
  //         initial={{ scaleY: 0 }}
  //         animate={{ scaleY: 0 }}
  //         exit={{ scaleY: 1 }}
  //         transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
  //       />
  //       <motion.div
  //         className="slide-out absolute top-0 left-0 w-full h-screen bg-black origin-top"
  //         initial={{ scaleY: 1 }}
  //         animate={{ scaleY: 0 }}
  //         exit={{ scaleY: 0 }}
  //         transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
  //       />
  //     </motion.div>
  //   </AnimatePresence>
  // )
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Component {...pageProps} />

        <motion.div

          className="slide-in absolute top-0 left-0 w-full h-screen bg-black origin-bottom z-50"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="slide-out absolute top-0 left-0 w-full h-screen bg-black origin-top z-50"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  )
}