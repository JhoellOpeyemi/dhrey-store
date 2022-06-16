import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
import {
  HeroButtonVariants,
  HeroWordVariants,
  MainVariants,
} from "./HeroAnimation";

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
    <Main as={motion.main} variants={MainVariants}>
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
        <Overlay backgroundImage="linear-gradient(0deg, rgba(0,0,0,.5) 30%, rgba(218,218,218,.3) 100%)" />
      </HeroSlider>

      <HeroText
        as={motion.h1}
        variants={MainVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="word">
          <motion.span variants={HeroWordVariants}>Quality&nbsp;</motion.span>
        </span>
        <span className="word">
          <motion.span variants={HeroWordVariants}>Products&nbsp;</motion.span>
        </span>
        <span className="word">
          <motion.span variants={HeroWordVariants}>Delivered&nbsp;</motion.span>
        </span>
        <span className="word">
          <motion.span variants={HeroWordVariants}>Right&nbsp;</motion.span>
        </span>
        <span className="word">
          <motion.span variants={HeroWordVariants}>To&nbsp;</motion.span>
        </span>
        <span className="word">
          <motion.span variants={HeroWordVariants}>Your&nbsp;</motion.span>
        </span>
        <span className="word">
          <motion.span variants={HeroWordVariants}>Door</motion.span>
        </span>
      </HeroText>

      <motion.div variants={HeroButtonVariants}>
        <LinkButton to="/">Shop Now</LinkButton>
      </motion.div>
    </Main>
  );
};

export default Hero;
