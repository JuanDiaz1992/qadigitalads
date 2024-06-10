import "../stylesheets/services.css";
import Card1 from "./services_components/card1";
import { BsFillMouseFill } from "react-icons/bs"
import { ImPrinter } from "react-icons/im";
import { TbSeo } from "react-icons/tb";
import { FaGoogle } from "react-icons/fa";
function Service() {

  return (
    <>
      <section className="section_services">
        <div className="section_services_div">
          <Card1
          Icon={BsFillMouseFill}
          titleEng={"WEBSITE SERVICES"}
          titleEsp={"PAGINAS WEB"}
          textEng={"We design and develop all types of websites for any business. From informational sites, landing pages to online courses and Ecommerces."}
          textSpa={"Diseñamos y desarrollamos todo tipo de sitios web para cualquier negocio. Desde sitios informativos, landing pages hasta cursos online y Ecommerces."}
        />
          <Card1
          Icon={FaGoogle}
          titleEng={"GOOGLE AND FACEBOOK ADS"}
          titleEsp={"GOOGLE Y FACEBOOK ADS"}
          textEng={"Reach the clients looking for your services on the top two platforms with our proven online advertising campaigns."}
          textSpa={"Llegue a los clientes que buscan sus servicios en las dos plataformas principales con nuestras campañas de publicidad en línea probadas."}
        />
        <Card1
          Icon={ImPrinter}
          titleEng={"PRINTING"}
          titleEsp={"PRINTING"}
          textEng={"From business cards to shirts, QA Digital Ads offers more than just digital marketing services. See all of the items we can print for your business."}
          textSpa={"Desde tarjetas de presentación hasta camisetas, QA Digital Ads ofrece más que solo servicios de marketing digital."}
        />
        <Card1
          Icon={TbSeo}
          titleEng={"SEO"}
          titleEsp={"SEO"}
          textEng={"Position your business as a top result with our SEO services, from detailed keyword analysis for efficient campaigns to content creation for organic website growth."}
          textSpa={"Posicione su negocio como un resultado superior con nuestros servicios de SEO, desde el análisis detallado de palabras clave para campañas eficientes hasta la creación de contenido para el crecimiento orgánico del sitio web."}
        />
        </div>

      </section>
    </>
  );
}
export default Service;
