import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// styled components import
import { Main, Overlay, Slide } from "../../../styles/Utilities.styled";
import { LinkButton } from "../../../styles/Buttons.styled";
import {
  ButtonWrapper,
  HeroSlider,
  HeroText,
  HeroTextWrapper,
  Image,
  ImageGroup,
  SearchBox,
  SliderAndText,
} from "./Hero.styled";

// images and icons import
import Boots from "../../../assets/boots.jpg";
import PowerBank from "../../../assets/power-bank.jpg";
import Drone from "../../../assets/drone.jpg";
import SearchIcon from "../../icons/SearchIcon";

// animation variants import
import {
  HeroButtonVariants,
  MainVariants,
  ImageVariants,
} from "./HeroAnimation";
import { SlideVariants, TextVariants, WordVariants } from "../../Animation";

const imageArray = [Boots, PowerBank, Drone];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = imageArray.length;

  const heroText = "Quality Products Delivered Right To Your Door";

  let heroTextArray = heroText.split(" ");

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    if (current === length) {
      setCurrent(0);
    }
  }, [setCurrent, current, length]);

  return (
    <Main as={motion.main} variants={MainVariants}>
      <SearchBox>
        <SearchIcon />
        <input type="search" placeholder="Search Products" />
      </SearchBox>

      <SliderAndText>
        <HeroSlider>
          <ImageGroup>
            <Slide as={motion.div} variants={SlideVariants} />
            {imageArray.map((image, index) => {
              return (
                <Image
                  key={index}
                  className={index === current ? "active" : ""}
                >
                  <motion.img src={image} alt="" variants={ImageVariants} />
                </Image>
              );
            })}
          </ImageGroup>
          <Overlay backgroundImage="linear-gradient(0deg, rgba(0,0,0,.5) 30%, rgba(218,218,218,.3) 100%)" />
        </HeroSlider>

        <HeroTextWrapper>
          <HeroText as={motion.h1} variants={TextVariants}>
            {heroTextArray.map((text, index) => {
              return (
                <span className="word" key={index}>
                  <motion.span variants={WordVariants}>
                    {text}&nbsp;
                  </motion.span>
                </span>
              );
            })}
          </HeroText>

          <ButtonWrapper as={motion.div} variants={HeroButtonVariants}>
            <LinkButton to="/shop/all">Shop Now</LinkButton>
          </ButtonWrapper>
        </HeroTextWrapper>
      </SliderAndText>
    </Main>
  );
};

export default Hero;
