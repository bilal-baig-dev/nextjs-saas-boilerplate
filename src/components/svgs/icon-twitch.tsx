import { SvgIconProps } from "@/interfaces";
import * as React from "react";
const TwitchIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    imageRendering="optimizeQuality"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 439 512.17"
    {...props}
  >
    <g fillRule="nonzero">
      <path fill="#FEFEFE" d="m402.42 237.79-73.17 73.17h-73.17l-64.02 64.02v-64.02h-82.31V36.59h292.67z" />
      <path
        fill="#7E5AA1"
        d="m402.42 237.79-73.17 73.17h-73.17l-64.02 64.02v-64.02h-82.31V36.59h292.67v201.2zM91.46 0 0 91.46v329.25h109.75v91.46l91.46-91.46h73.16L439 256.08V0H91.46z"
      />
      <path fill="#7E5AA1" d="M310.96 210.35h36.58V100.6h-36.58zm-100.61 0h36.59V100.6h-36.59z" />
    </g>
  </svg>
);
export default TwitchIcon;
