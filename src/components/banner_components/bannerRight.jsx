import { LanguageContext } from "../../context/languajeProvider";
import { useContext } from "react";
import { Chip, Avatar, Card, CardBody, Image, CardFooter } from "@nextui-org/react";
import { FaHeart } from "react-icons/fa6";
import img1 from "../../img/bmalandscaping.webp";
import img2 from "../../img/Mask-group2.webp";
import Card1 from "./card1";
import logo from "../../img/white_logo.png";
import photCards from "../../img/FOTO-5.webp";
import { motion } from 'framer-motion';
import img3 from "../../img/18-Promotion.webp";

function BannerRight() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="section_banner_div_container banner_container_right relative">
      <motion.div
            className="card1"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            style={{ display: 'inline-block' }}
      >
        <Card1 img={img1} text1={"Bmalandscaping"} text2={language?"See":"Ver"} />
      </motion.div>

      <motion.div
            className="card2"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            style={{ display: 'inline-block' }}
      >
        <Card1 img={img2} text1={"Greenmanlands..."} text2={language?"See":"Ver"}/>
      </motion.div>

      <motion.div
                className="chip1"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -25, 0] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  }}
                  style={{ display: 'inline-block' }}>
        <Chip  endContent={<FaHeart size={18} />} variant="flat" color="primary">
          {language ? "We love what we do" : "Amamos lo que hacemos"}
        </Chip>
      </motion.div>

      <motion.div
        className="card3"
        initial={{ y: 0 }}
        animate={{ y: [0, -25, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        style={{ display: 'inline-block' }}
        >
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none w-40"
        >
          <Image
            alt="Woman listing to music"
            className="object-cover"
            height={200}
            src={photCards}
            width={200}
          />
          <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80 text-center">Printing Services</p>
          </CardFooter>
        </Card>
      </motion.div>
      
      <motion.div
      className="icon1_container"
      initial={{ y: 0 }}
      animate={{ y: [0, -25, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      style={{ display: 'inline-block' }}>
        <img src={img3} alt="" />
      </motion.div>

      <Avatar className="logo_banner" radius="md" size="lg" src={logo} />
    </div>
  );
}
export default BannerRight;
