import Link from "next/link";
import Logo from "./common/logo";
import { Separator } from "./ui/separator";
import NavMenu from "./NavMenu";
import { navMenu } from "@/lib/constants";
import XIcon from "./svgs/icon-social-x";
import { NavItem } from "@/interfaces";
import { appConfig } from "@/config/appConfig";
import ProductHuntIcon from "./svgs/icon-producthunt";

type FooterMenuProps = {
  menu: NavItem[];
  text: string;
};
const FooterMenu = ({ menu, text }: FooterMenuProps) => {
  return (
    <div className="flex flex-col gap-3 lg:w-1/3 md:w-1/2 w-full ">
      <div className="font-bold text-xs uppercase">{text}</div>
      <div className="text-sm flex flex-col gap-2">
        <NavMenu menu={menu} />
      </div>
    </div>
  );
};

function Footer() {
  return (
    <footer className="w-full flex flex-col">
      <Separator />
      <div className="flex flex-col md:flex-row w-full items-start justify-start max-w-7xl mx-auto px-12 pt-20 pb-40">
        <div className="flex flex-col gap-5 justify-between max-w-64">
          <div className="flex">
            <Logo />
          </div>
          <span className="text-sm font-medium opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod ex eget nisi euismod, ut facilisis quam tristique.
          </span>
          <span className="text-black/60 dark:text-white/60 text-xs">
            &copy; Copyright {new Date().getFullYear()} {appConfig.appName}. All rights reserved.
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-0 w-full pl-0 md:pl-20  text-start mt-10 md:mt-0 -mb-10">
          <FooterMenu menu={[...navMenu]} text="Links" />

          <FooterMenu
            menu={[
              {
                id: "faq",
                text: "FAQ",
                url: "",
              },
              {
                text: "Contact Us",
                url: `mailto:${appConfig.supportEmail}`,
              },
            ]}
            text="Support"
          />
          <FooterMenu
            menu={[
              {
                text: "Licenses",
                url: "/legal/license",
              },
              {
                text: "Terms of Service",
                url: "/legal/terms-of-services",
              },
              {
                text: "Privacy Policy",
                url: "/legal/privacy-policy",
              },
            ]}
            text="Legal"
          />

          <div className="flex flex-col gap-3 lg:w-1/3 md:w-1/2 w-full">
            <div className="font-bold text-xs uppercase ml-1">Socials</div>
            <div className="flex items-center gap-2">
              <Link className="text-sm flex flex-col cursor-pointer" href={"https://x.com/"} target="_blank">
                <XIcon className="w-8 h-8" />
              </Link>
              <Link className="text-sm flex flex-col cursor-pointer" href={"https://www.producthunt.com/posts/saaspack"} target="_blank">
                <ProductHuntIcon className="w-7 h-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
