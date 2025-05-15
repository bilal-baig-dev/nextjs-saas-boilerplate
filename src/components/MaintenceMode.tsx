import Link from "next/link";
import Logo from "./common/logo";
import MaintenanceModeArt from "./svgs/illustration-maintenance-mode";
import { appConfig } from "@/config/appConfig";

function MaintenanceMode() {
  return (
    <div className="h-screen w-full flex flex-col">
      <Logo className="w-full flex items-center justify-center py-10" />
      <section className="h-screen flex items-center justify-center flex-col lg:flex-row px-8  gap-12 w-full md:max-w-7xl mx-auto">
        <div className="flex flex-col w-full items-center gap-5">
          <div className="flex flex-col items-center gap-6">
            <h1 className="tracking-wide font-bold text-3xl text-center sm:text-5xl flex flex-col">
              The site is currently <br /> down for maintenance.
            </h1>

            <p className="font-light w-full xl:max-w-3xl text-lg text-center">The page is undergoing maintenance and will be back soon.</p>
          </div>
          <div className="w-full flex justify-center h-72">
            <MaintenanceModeArt color="hsl(var(--primary))" className="h-full w-full" />
          </div>
        </div>
      </section>
      <footer className="mt-auto text-center md:text-left py-4 border-t border">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="text-sm">
            <span>We apologize for inconvenience. You can email us at</span>
            <span className="block md:inline md:ml-1">
              <Link href={`mailto:${appConfig.supportEmail}`} className="text-primary hover:underline">
                {appConfig.supportEmail}
              </Link>
            </span>
          </div>
          {/* <div className="mt-2 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <facebook size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <SiOdnoklassniki size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <SiVk size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <FaTelegramPlane size={20} />
            </a>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default MaintenanceMode;
