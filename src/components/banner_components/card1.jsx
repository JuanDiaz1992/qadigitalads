import { Button, Card, Image, CardFooter } from "@nextui-org/react";
function Card1(props){
    return(
        <Card isFooterBlurred radius="lg" className="border-none body_card">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src={props.img}
          width={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">{props.text1}</p>
          <a href={props.linkTo} target="_blank">
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            {props.text2}
          </Button>
          </a>
        </CardFooter>
      </Card>
    )
}

export default Card1;