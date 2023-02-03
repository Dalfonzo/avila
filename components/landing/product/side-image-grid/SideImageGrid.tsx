import React from 'react';
import Image, { StaticImageData } from 'next/image';

const SideImageGrid = ({
  image,
  children,
  reversed = false,
}: {
  image: string | StaticImageData;
  children: React.ReactNode;
  reversed?: boolean;
}) => (
  <div className={`flex gap-10 ${reversed ? 'flex-row-reverse' : 'flex-row'}`}>
    <div className="relative w-fit">
      <div className="bg-[#413c3820] absolute top-0 left-0 w-full h-full" />
      <Image
        src={image}
        alt="Imagen de publicidad"
        className="aspect-[31/50]"
        width={440}
        height={710}
      />
    </div>
    <div className="grid grid-cols-3 grid-rows-2 gap-y-2 flex-1">
      {children}
    </div>
  </div>
);

export default SideImageGrid;
