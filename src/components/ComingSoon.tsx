import CountDownTimer from "./common/CountDownTimer";
import PackIcon from "./svgs/icon-pack";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function ComingSoon() {
  return (
    <div style={{ background: "url(/images/waitlist-bg-image.webp)" }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <section className="flex min-h-screen items-center flex-col lg:flex-row px-4 py-14 gap-12 lg:py-20 w-full xl:max-w-7xl mx-auto">
        <div className="z-40 flex flex-col basis-full items-center lg:items-center gap-8">
          <PackIcon className="w-24 h-24" />
          <h1 className="tracking-wide uppercase font-bold text-4xl text-center md:text-7xl flex flex-col text-primary">Coming Soon</h1>

          <p className="font-light w-full xl:max-w-3xl text-lg text-center">
            Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <CountDownTimer launchingDate="2025-08-20" />
          <div className="font-bold text-lg text-center md:text-xl">Sign Up and we&apos;ll notify you of our launch</div>

          <div className="flex flex-col w-full md:max-w-xl mx-auto gap-3 mt-2">
            <Input name="email" type="email" placeholder="Please enter your email" required={true} />
            <Button>Notify Me</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComingSoon;
