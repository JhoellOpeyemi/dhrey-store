import { useEffect } from "react";

import { Container, Overlay } from "../../styles/Utilities.styled";
import { PageHeader } from "../../styles/Headings.styled";
import { CtaButton } from "../../styles/Buttons.styled";
import {
  NotFoundWrapper,
  NotFoundMain,
  ImageGroup,
  NotFoundSubText,
  NotFoundText,
} from "./NotFound.styled";

import LostImage from "../../assets/im-now-lost.jpg";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found | Dhrey Store";
  });
  return (
    <NotFoundWrapper>
      <Container>
        <NotFoundMain>
          <PageHeader>Oops!</PageHeader>
          <NotFoundSubText>You went off the grid</NotFoundSubText>
          <NotFoundText>
            But no need to panic, we are here for you!
          </NotFoundText>
          <CtaButton to="/shop/all">Go To Shop</CtaButton>
        </NotFoundMain>

        <ImageGroup>
          <img src={LostImage} alt="" />
          <Overlay backgroundColor="rgba(0,0,0,.65)" />
        </ImageGroup>
      </Container>
    </NotFoundWrapper>
  );
};

export default NotFound;
