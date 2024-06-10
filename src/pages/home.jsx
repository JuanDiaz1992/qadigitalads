import { Banner } from "../components/banner";
import NavBar from "../components/navBar";
import Services from "../components/services";
import Customers from "../components/customers";
function Home(){
    return(
        <>
        <div aria-hidden="true" className="background_left fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0">
        </div>
        <div aria-hidden="true" className="background_rigth fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-270">
        </div>
            <NavBar/>
            <Banner/>
            <Services/>
            <Customers/>
        </>
    );

}
export default Home;