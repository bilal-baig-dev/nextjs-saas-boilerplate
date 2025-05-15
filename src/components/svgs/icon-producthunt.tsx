import { SvgIconProps } from "@/interfaces";
import * as React from "react";
const ProductHuntIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    imageRendering="optimizeQuality"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 512 512"
    {...props}
  >
    <path fill="#FF6154" d="M512 256c0 141.39-114.61 256-256 256S0 397.39 0 256 114.61 0 256 0s256 114.61 256 256z" />
    <path
      fill="#fff"
      d="M290.14 256H217.6v-76.8h72.54c21.2 0 38.4 17.19 38.4 38.4 0 20.93-16.76 37.96-37.58 38.39-.27.01-.55.01-.82.01zm0-128H166.4v256h51.2v-76.8h72.54c49.47-.01 89.6-40.13 89.6-89.6 0-49.48-40.13-89.6-89.6-89.6z"
    />
  </svg>
);
export default ProductHuntIcon;
