import React, { useState, useEffect } from "react";

import { Overlay } from "../../../styles/Utilities.styled";

import SearchIcon from "../../icons/SearchIcon";
import {
  HeroSlider,
  HeroText,
  Image,
  ImageGroup,
  Main,
  SearchBox,
} from "./Hero.styled";

import Boots from "../../../assets/boots.jpg";
import PowerBank from "../../../assets/power-bank.jpg";
import Drone from "../../../assets/drone.jpg";
import { LinkButton } from "../../../styles/Buttons.styled";

const imageArray = [Boots, PowerBank, Drone];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = imageArray.length;

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
    <Main>
      <SearchBox>
        <SearchIcon />
        <input type="search" placeholder="Search Products" />
      </SearchBox>

      <HeroSlider>
        <ImageGroup>
          {imageArray.map((image, index) => {
            return (
              <Image key={index} className={index === current ? "active" : ""}>
                <img src={image} alt="" />
              </Image>
            );
          })}
        </ImageGroup>
        <Overlay backgroundImage="linear-gradient(0deg, rgba(0,0,0,.5) 30%, rgba(218,218,218,.8) 100%)" />
      </HeroSlider>

      <HeroText>
        <span>Quality </span>
        <span>Products </span>
        <span>Delivered </span>
        <span>Right </span>
        <span>To </span>
        <span>Your </span>
        <span>Door</span>
      </HeroText>

      <LinkButton to="/">Shop Now</LinkButton>
    </Main>
  );
};

export default Hero;
