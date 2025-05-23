import ButtonWaitlist from "./ButtonWaitlist";
import NotificationBar from "./NotificationBar";
import HeaderLogo from "./common/HeaderLogo";
import ScrollableHeader from "./common/ScrollableHeader";
import { siteConfig } from "@/config";
import ButtonLightDarkMode from "./common/ButtonLightDarkMode";
import NavMenu from "./NavMenu";
import { navMenu, waitListNavMenu } from "@/lib/constants";
import MobileDrawer from "./common/MobileDrawer";
import React from "react";
import UserLogin from "./UserLogin";

function Header() {
  const isWaitlist = siteConfig.waitlistMode;
  return (
    <React.Fragment>
      <ScrollableHeader>
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <HeaderLogo />
          <div className="hidden md:flex gap-2 md:gap-5">{isWaitlist ? <NavMenu menu={waitListNavMenu} /> : <NavMenu menu={navMenu} />}</div>
          <div className="hidden md:flex gap-5">
            {isWaitlist ? <ButtonWaitlist /> : <UserLogin />}
            <ButtonLightDarkMode />
          </div>

          {/* Mobile Menu Start */}
          <MobileDrawer isWaitlist={isWaitlist} navMenu={navMenu} waitListNavMenu={waitListNavMenu} />

          {/* Mobile Menu End */}
        </div>
      </ScrollableHeader>
      {siteConfig.notificationBar && <NotificationBar />}
    </React.Fragment>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default Header;
