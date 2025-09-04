'use client'
import Image from "next/image";
import background from '../assets/images/muncks.jpeg'

export default function Hero() {
    return(
        <section id="hero" className="relative w-full min-h-[78vh] md:min-h-[86vh]" >
            <Image
            src={background}
            fill
            priority
            alt=""
            className="absolute inset-0 -z-10 object-cover"
            sizes="100vw"
            style={{ objectPosition: 'center 40%' }}
            />
            <div className="absolute inset-0 -z-10 bg-slate-900/45 backdrop-blur-[0.5px]" />
        </section>
    )
}