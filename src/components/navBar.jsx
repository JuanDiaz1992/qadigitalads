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
import { ThemeSwitcher } from "./nav_components/ThemeSwitcher";
import spanish from "../img/spanish.webp";
import english from "../img/english.webp";
import { LanguageContext } from "../context/languajeProvider";
import { useContext } from "react";
import SvgLogo from "./nav_components/logo"

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
          <SvgLogo theme={theme}/>
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
