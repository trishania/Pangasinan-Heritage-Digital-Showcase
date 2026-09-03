/**
 * ATOM: LogoImage
 * ---------------
 * Simple wrapper around next/image for the site logo.
 * No GitHub raw URL fallback — logo is served from /public/logo/PHLOGO.webp.
 */

import NextImage, { ImageProps } from "next/image";

export const LogoImage: React.FC<ImageProps> = (props) => {
  return <NextImage {...props} unoptimized />;
};

export default LogoImage;
