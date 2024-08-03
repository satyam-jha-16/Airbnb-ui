import Image from "next/image";
import React from "react";

function FooterCard({ img, title, desc, button }: any) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt={title}
          width={1000}
          height={1000}
          unoptimized
          className="w-full h-full rounded-2xl object-center object-cover"
        />
      </div>
      <div className="absolute top-1/4 sm:top-1/3 left-12">
        <h3 className="text-3xl  lg:text-4xl mb-4 w-64 md:w-full font-semibold">
          {title}
        </h3>
        <p className="mb-5 font-medium shadow-xl ">{desc}</p>
        <button className="bg-gray-500 font-medium hover:bg-gray-600 hover:scale-105 rounded-lg px-4 py-2 text-white">
          {button}
        </button>
      </div>
    </section>
  );
}

export default FooterCard;
