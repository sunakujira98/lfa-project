import React from 'react';

import { VIDEO_EXT } from '@/domain/constants/common.constants';
import {
  AvailableComponents,
  StrapiImageAttributes,
} from '@/domain/types/common.types';

type FullImageProps = {
  data: {
    id: number;
    __component: AvailableComponents;
    image: {
      data: {
        attributes: StrapiImageAttributes;
      } | null;
    };
  };
};

export function FullImage({ data }: FullImageProps) {
  console.log(data)
  if (!data.image || !data.image.data || !data.image.data.attributes) {
    console.error('Image data is missing or incomplete');
    return null; // or return a placeholder/error message component
  }

  const imageUrl = `${process.env.NEXT_PUBLIC_CMS_HOST}${data.image.data.attributes.url}`;
  const isVideo = VIDEO_EXT.includes(data.image.data.attributes.ext);

  console.log(imageUrl);

  return (
    <div
      className="relative container mx-auto py-5 border-t-[1px] border-charcoal-100"
      style={{ maxWidth: '1680px' }}
    >
      <div className="h-full mx-auto flex lg:pt-0 lg:items-center bg-cover bg-right">
        {isVideo ? (
          <video
            src={imageUrl}
            className="w-screen"
            controls
            playsInline
            autoPlay
            loop
            muted
          />
        ) : (
          <img
            src={imageUrl}
            className="w-screen"
            alt={data.image.data.attributes.name || 'Full image'}
          />
        )}
      </div>
    </div>
  );
}