import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tiffany's-Journey",
  icons: "/image/ranpo.jpg"
}

export default function Home() {
  return (
    <div className="min-h-screen container flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center text-[#424242]">
        <Image
          src="/image/journey-person.png"
          width={280}
          height={250}
          alt="Tiffany's Journey"
        />
        <div className="flex flex-col items-center gap-4 font-product-sans">
          <div className="font-bold">
            <h1 className="block md:hidden text-xl">Tiffany&apos;s journey</h1>
            <h1 className="hidden md:block text-6xl">Tiffany&apos;s</h1>
            <h4 className="hidden md:block text-4xl">Journey</h4>
          </div>
          <div className="w-full flex gap-2">
            <Button asChild size="sm" variant="outline" className="w-full">
              <Link href="/diary">
                Start Journey
              </Link>
            </Button>
            {/* <Button asChild size="sm" variant="outline">
              <Link href="/birthday-message">
                Birthday Message
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
