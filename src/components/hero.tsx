import { PropsWithChildren } from "react";

type Props = {
  backgroundImg?: string;
} & PropsWithChildren;

const Hero = ({ backgroundImg, children }: Props) => {
  return (
    <div className="hero" >
      <div className="hero__gradient"></div>
      {backgroundImg && <>
        <img className="hero__bg" src={backgroundImg} />
        <div className="hero__bg-overlay" />
      </>}
      {children}
    </div >
  )
}

export default Hero;