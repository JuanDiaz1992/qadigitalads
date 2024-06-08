import BannerLeft from "./banner_components/bannerLeft";
import BannerRight from "./banner_components/bannerRight";

export function Banner() {


  return (
    <>
      <section className="section_banner">
        <div className="section_banner_div">
          <BannerLeft/>
        </div>
        <div className="section_banner_div section_banner_div--2">
          <BannerRight/>
        </div>
      </section>
    </>
  );
}
