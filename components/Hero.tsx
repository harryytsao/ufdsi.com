import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col ga[-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        {/* <div className="hero-map" /> */}
        <div className="relative z-20 flex flex-1 flex-col">
            <Image src="/malachowsky.jpeg" width={0} height={0} sizes="100vw" alt="malachowsky hall" className="w-full h-auto"/>
        </div>
    </section>
  )
}

export default Hero