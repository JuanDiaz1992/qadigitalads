import { LanguageContext } from "../../context/languajeProvider";
import { useContext } from "react";
import { Button,  Divider } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa6";
function BannerLeft(){
    const { language } = useContext(LanguageContext);
    return(
        <div className="section_banner_div_container">
        <div>
          {language ? (
            <>
              <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
                WE ARE{" "}
                <span className="section_banner_div_h1_span">THE BEST</span>{" "}
                <br />
                WEB DESIGN COMPANY
                <br /> IN MARYLAND!
              </h1>
            </>
          ) : (
            <>
              <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
                SOMOS{" "}
                <span className="section_banner_div_h1_span">LA MEJOR</span>
                <br />
                COMPAÑÍA DE DISEÑO
                <br />
                WEB EN MARYLAND!
              </h1>
            </>
          )}
        </div>
        <div className="section_banner_div_div flex h-5 items-center space-x-4 text-small">
          <div>
            <h3>60+</h3>
            <p>Google Reviews</p>
          </div>
          <Divider orientation="vertical" />
          <div>
            <h3>200+</h3>
            <p>{language ? "Customers" : "Clientes"}</p>
          </div>
          <Divider orientation="vertical" />
          <div>
            <h3>PLAN SEO</h3>
            <p>{language ? "Personalized" : "Personalizado"}</p>
          </div>
        </div>
        <a href={language ? "tel:+12405936567" : "tel:+12405218700"}>
            <Button
            className="w-40 mt-4"
            color="success"
            endContent={<FaArrowRight />}
            >
                {language ? "Contact us" : "Contáctanos"}
            </Button>
        </a>

      </div>
    )
}

export default BannerLeft;