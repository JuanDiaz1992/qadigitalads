import {
  Card,
  CardHeader,
  Image,
  CardBody,
  Button,
  CardFooter
} from "@nextui-org/react";
import { LanguageContext } from "../../context/languajeProvider";
import { useContext } from "react";

function Card1({Icon, textEng, textSpa, titleEng, titleEsp, linkTo }) {
  const { language } = useContext(LanguageContext);
  return (
    <Card
      className="max-w-[250px] bg-background/60 dark:bg-default-100/50 card_body"
      isBlurred
    >
      <CardHeader className="flex gap-3">
        <div className="div_container_img_card_service">
          <Icon/>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">{language ? titleEng : titleEsp}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p>{language ? textEng : textSpa}</p>
      </CardBody>
      <CardFooter>
        <a href={linkTo}>
          <Button className="button_card1" variant="shadow" color="secondary" radius="full" size="sm">{language ? "SEE MORE" : "VER MÁS"}</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
export default Card1;
