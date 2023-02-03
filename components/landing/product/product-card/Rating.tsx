import React from 'react';
import Image from 'next/image';
import FilledPawIcon from '../../../../assets/icons/dog-paw-filled-icon.svg';
import OutlinedPawIcon from '../../../../assets/icons/dog-paw-icon.svg';

const Rating = ({ rate = 0 }: { rate: number }) => {
  const ratingGenerator = () => {
    const rows = [];
    for (let i = 1; i <= 5; i += 1) {
      rows.push(
        <Image
          key={i}
          src={i <= rate ? FilledPawIcon : OutlinedPawIcon}
          alt="Icono de calificación"
          width={12}
          height={12}
          className="aspect-1"
        />
      );
    }
    return rows;
  };

  return <div className="flex gap-1">{ratingGenerator()}</div>;
};

export default Rating;
