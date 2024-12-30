"use client";
import BannerDiary from "@/components/BannerDiary";
import useViewport from "@/hooks/useViewport";
import Link from "next/link";
import { NextPageWithLayout } from "../_app";


const Page: NextPageWithLayout = () => {
  const { width } = useViewport()
  const breakpoint = 768

  return (
    <div className="min-h-screen container flex items-center lg:justify-center">
      {width < breakpoint ? (
        <>
          <div className="flex flex-col gap-2 text-[#424242]">
            <Link href="/diary/page-one">
              <div className="relative  p-4 flex flex-col gap-2 w-[280px] h-[155px] overflow-hidden">
                <h1 className="z-10 font-new-york text-5xl">Page 1</h1>
                <p className="font-new-york text-xl">Philacolist</p>
              </div>
            </Link>
            <div className="relative  p-4 flex flex-col gap-2 w-[280px] h-[155px] overflow-hidden">
              <h1 className="z-10 font-new-york text-5xl">Page 2</h1>
              <p className="font-new-york text-xl">Locked</p>
            </div>

            <div className="relative  p-4 flex flex-col gap-2 w-[280px] h-[155px] overflow-hidden">
              <h1 className="z-10 font-new-york text-5xl">Page 3</h1>
              <p className="font-new-york text-xl">Locked</p>
            </div>
            <div className="relative  p-4 flex flex-col gap-2 w-[280px] h-[155px] overflow-hidden">
              <h1 className="z-10 font-new-york text-5xl">Page 4</h1>
              <p className="font-new-york text-xl">Locked</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-3">
            <BannerDiary href="/diary/page-one" title="Page 1" image="/image/page-one.png" />
            <BannerDiary href="/" title="Locked" image="/image/ranpo.jpg" />
            <BannerDiary href="/" title="Locked" image="/image/piano.jpg" />
            <BannerDiary href="/" title="Locked" image="/image/last.jpg" />
          </div>
        </>
      )
      }
    </div >
  );
}

export default Page