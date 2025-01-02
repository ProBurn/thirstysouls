"use client"
import { AuroraBackground } from "@/components/ui/aurora-background";
import { sendGTMEvent } from "@next/third-parties/google";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Thirsty Souls
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Coming soon
        </div>
        <Link href="https://sedo.com/search/details/?partnerid=14460&language=e&domain=thirstysouls.co.uk&origin=parking&utm_medium=Parking&utm_campaign=template&utm_source=3199">
          <button
          onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'buy domain' })}
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Buy this domain
          </button>
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}
