import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "./ThemeSwitcher";
import spanish from "../img/spanish.webp";
import english from "../img/english.webp";
import { LanguageContext } from "../context/languajeProvider";
import { useContext } from "react";


function NavBar() {
  const { language, setLanguage } = useContext(LanguageContext);
  const toggleLanguage = () => {
    setLanguage(prevLanguage => !prevLanguage);
  };
  const { theme } = useTheme();

  return (
    <>
      <header className="header">
        <Navbar className="navbar_customized border-t-1 border-divider">
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle />
          </NavbarContent>
          <NavbarBrand>
            <svg
              className="logo_nav"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 50 50"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill={theme === "dark" ? "#FFFFFF" : "#000000"}
                  d="M30.5,19l1,1.1l-2.3,2.2l-1.2-1.4c-0.9,0.4-2,0.7-3.1,0.7c-4.2,0-7.4-3.5-7.4-7.4S20.6,7,24.8,7
              c4.2,0,7.4,3.4,7.4,7.3C32.3,16.1,31.6,17.7,30.5,19z M24.8,18.5c0.3,0,0.6,0,0.9-0.1l-2-2.2l2.4-2.2l2.2,2.5
              c0.4-0.6,0.6-1.4,0.6-2.2c0-2.3-1.7-4.1-4-4.1c-2.3,0-4,1.8-4,4.1C20.8,16.5,22.6,18.5,24.8,18.5z"
                />
                <path
                  fill={theme === "dark" ? "#FFFFFF" : "#000000"}
                  d="M28.4,40.3h-6.8l-0.9,2.2H17l6-14.2h3.8l6.1,14.2h-3.6L28.4,40.3z M27.2,37.5L25,32.2l-2.2,5.3H27.2z"
                />
                <path
                  fill={theme === "dark" ? "#FFFFFF" : "#000000"}
                  d="M33.3,23.6H16.7v2.9h16.6V23.6z"
                />
                <path
                  fillRule="evenodd"
                  fill={theme === "dark" ? "#FFFFFF" : "#000000"}
                  d="M47.2,2.8H2.8v44.4h44.4V2.8z M0,0v50h50V0H0z"
                />
              </g>
            </svg>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                {language ? "Services" : "Servicios"}
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                {language ? "Portfolio" : "Portafolio"}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                {language ? "Positioning" : "Posicionamiento"}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                {language ? "About Us" : "Nosotros"}
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Button
                onClick={toggleLanguage}
                isIconOnly
                color="warning"
                variant="faded"
                aria-label="Take a photo"
              >
                {language ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="15"
                  >
                    <defs>
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="a"
                      >
                        <stop stopColor="#FFF" offset="0%" />
                        <stop stopColor="#F0F0F0" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="b"
                      >
                        <stop stopColor="#DD172C" offset="0%" />
                        <stop stopColor="#C60B1F" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="c"
                      >
                        <stop stopColor="#FFD133" offset="0%" />
                        <stop stopColor="#FFC500" offset="100%" />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <path fill="url(#a)" d="M0 0h21v15H0z" />
                      <path fill="url(#b)" d="M0 0h21v4H0zm0 11h21v4H0z" />
                      <path fill="url(#c)" d="M0 4h21v7H0z" />
                      <path fill="#FFEDB1" d="M5.5 7h1v.5h-1z" />
                      <path
                        d="M4.915 8.46c.025.295.291.54.585.54s.56-.246.585-.54L6.207 7H4.793l.122 1.46zm-.624-1.465a.456.456 0 01.465-.495h1.488a.45.45 0 01.465.495l-.126 1.506A1.104 1.104 0 015.5 9.5a1.104 1.104 0 01-1.083-.999L4.29 6.995z"
                        fill="#A41517"
                        fillRule="nonzero"
                      />
                      <path
                        fill="#A41517"
                        d="M4.5 7.5h2V8H6l-.5 1L5 8h-.5zM3 6h1v3.5H3zm4 0h1v3.5H7zm-2.5-.5c0-.276.214-.5.505-.5h.99c.279 0 .505.232.505.5v.248A.248.248 0 016.255 6h-1.51a.245.245 0 01-.245-.252V5.5z"
                      />
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="15"
                  >
                    <defs>
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="a"
                      >
                        <stop stopColor="#FFF" offset="0%" />
                        <stop stopColor="#F0F0F0" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="b"
                      >
                        <stop stopColor="#D02F44" offset="0%" />
                        <stop stopColor="#B12537" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="c"
                      >
                        <stop stopColor="#46467F" offset="0%" />
                        <stop stopColor="#3C3C6D" offset="100%" />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <path fill="url(#a)" d="M0 0h21v15H0z" />
                      <path
                        d="M0 0h21v1H0V0zm0 2h21v1H0V2zm0 2h21v1H0V4zm0 2h21v1H0V6zm0 2h21v1H0V8zm0 2h21v1H0v-1zm0 2h21v1H0v-1zm0 2h21v1H0v-1z"
                        fill="url(#b)"
                      />
                      <path fill="url(#c)" d="M0 0h9v7H0z" />
                      <path
                        d="M1.5 2a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm-5 1a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm1 1a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm1 1a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm1 1a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1z"
                        fill="url(#a)"
                      />
                    </g>
                  </svg>
                )}
              </Button>
            </NavbarItem>
            <NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>
          </NavbarContent>

          {/* Menu Responsivo */}
          <NavbarMenu className="response">
            <NavbarItem
              className="w-full"
              href="#"
              color="foreground"
              onClick={toggleLanguage}
            >
              {language ? (
                <Button
                  onClick={toggleLanguage}
                  isIconOnly
                  color="warning"
                  variant="faded"
                  aria-label="Take a photo"
                >
                  <img src={english} alt="" />
                </Button>
              ) : (
                <Button
                  onClick={toggleLanguage}
                  isIconOnly
                  color="warning"
                  variant="faded"
                  aria-label="Take a photo"
                >
                  <img src={spanish} alt="" />
                </Button>
              )}
            </NavbarItem>
            <NavbarItem>
              <Link className="w-full" href="#" color="foreground" size="lg">
                {language ? "Services" : "Servicios"}
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link className="w-full" href="#" color="foreground" size="lg">
                {language ? "Portfolio" : "Portafolio"}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="w-full" href="#" color="foreground" size="lg">
                {language ? "Positioning" : "Posicionamiento"}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="w-full" href="#" color="foreground" size="lg">
                {language ? "About Us" : "Nosotros"}
              </Link>
            </NavbarItem>
          </NavbarMenu>
        </Navbar>
      </header>
    </>
  );
}
export default NavBar;
