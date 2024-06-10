import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import "../stylesheets/customers.css";
import customersList from "./customers_components/customes";
import { FaHeart } from "react-icons/fa";
import { LanguageContext } from "../context/languajeProvider";
import { useContext } from "react";
function Customers() {
  const { language } = useContext(LanguageContext);
  const { theme } = useTheme();
  const companies = customersList(theme);

  return (
    <>
      <section className="section_customers">
        {language? (<h4>OUR <span className="section_banner_div_h1_span">CLIENTS</span></h4>):(<h4>NUESTROS <span className="section_banner_div_h1_span">CLIENTES</span></h4>)}
        <div className="section_customers_div">
          {companies.map((company) => company)}
          <a href={language ? "tel:+12405936567" : "tel:+12405218700"}>
            <Button className="button_customers no-underline hover:opacity-80 active:opacity-disabled transition-opacity z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-4 min-w-34 h-10 gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-default data-[hover=true]:opacity-hover group text-sm border-dashed font-normal text-default-600 data-[hover=true]:bg-default-100/50">
              <p>{language? "Your company":"Tu empresa"} <FaHeart/></p>
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Customers;
