import { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
import { logo } from "../data";
import Link from "next/link";
import { useStateContext } from "../context/settingContext";
import { useRouter } from "next/router";

const Header = () => {
  const { navMobile, setNavMobile } = useStateContext();

  const router = useRouter();
  useEffect(() => {
    setNavMobile(false);
  }, [router.asPath]);

  return (
    <header className="h-[120px] lg:h-[150px] bg-white fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300">
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
        {/* logo */}
        <Link href="/">
          <a>
            <Image width={75} height={75} src={logo} alt="Logo" />
          </a>
        </Link>
        {/* nav - initially is hidden - show on desktop*/}
        <div className="hidden xl:flex">
          <Nav />
        </div>
        {/* nav menu btn - is showing by default - hidden on desktop mode */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden absolute right-[5%] bg-dark p-2 rounded-md cursor-pointer"
        >
          <div
            className={`${
              navMobile ? "is-active " : ""
            }hamburger hamburger--collapse js-hamburger`}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </div>
        {/* nav mobile - is showing by default - hidden on desktop mode */}
        <div
          className={`${
            navMobile ? "max-h-full" : "max-h-0 overflow-hidden"
          } top-[120px] lg:top-[150px] cursor fixed left-0 -z-10 w-full h-full bg-white transition-all duration-300`}
        >
          <NavMobile />
        </div>
        {/* social icons - initially hidden - is showing on desktop mode */}
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
