import LogoSvgIcon from "../svgs/icon-gift";

type LogoProps = {
  className?: string;
};
function Logo({ className }: LogoProps) {
  return (
    <div className={`w-48 justify-center items-center flex ${className}`}>
      <LogoSvgIcon className="w-full" />
    </div>
  );
}

export default Logo;
