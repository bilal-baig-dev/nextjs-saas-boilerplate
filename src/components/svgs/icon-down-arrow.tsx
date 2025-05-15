import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  className?: string;
}
const DownArrowIcon = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={800} height={800} viewBox="0 0 256 256" strokeWidth="8" {...props}>
    <path d="m202.828 178.828-47.997 47.998a4.028 4.028 0 0 1-.613.5c-.098.067-.205.112-.308.168a2.345 2.345 0 0 1-.787.327c-.114.033-.222.077-.34.1a3.92 3.92 0 0 1-1.566 0c-.118-.023-.226-.067-.339-.1a3.889 3.889 0 0 1-.408-.127 3.965 3.965 0 0 1-.379-.2c-.103-.056-.21-.101-.31-.167a4.028 4.028 0 0 1-.612-.501l-47.997-47.998a4 4 0 0 1 5.656-5.656L148 214.342V128a92.105 92.105 0 0 0-92-92 4 4 0 0 1 0-8 100.113 100.113 0 0 1 100 100v86.343l41.172-41.171a4 4 0 0 1 5.656 5.656Z" />
  </svg>
);
export default DownArrowIcon;
