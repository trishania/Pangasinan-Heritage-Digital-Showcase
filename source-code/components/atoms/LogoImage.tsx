"use client";

import React, { useState, useEffect } from "react";
import NextImage, { ImageProps } from "next/image";

const GITHUB_RAW_BASE =
  "https://github.com/trishania/Pangasinan-Heritage-Digital-Showcase/blob/main/source-code/public";

export const LogoImage: React.FC<ImageProps> = (props) => {
  const originalSrc = props.src as string;
  const [currentSrc, setCurrentSrc] = useState<string>(originalSrc);

  useEffect(() => {
    setCurrentSrc(originalSrc);
  }, [originalSrc]);

  const handleError = () => {
    if (currentSrc === originalSrc) {
      setCurrentSrc(`${GITHUB_RAW_BASE}${originalSrc}?raw=true`);
    }
  };

  return (
    <NextImage
      {...props}
      key={currentSrc}
      src={currentSrc}
      onError={handleError}
      unoptimized
    />
  );
};

export default LogoImage;
