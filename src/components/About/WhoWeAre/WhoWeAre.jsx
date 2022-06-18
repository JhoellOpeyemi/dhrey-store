import React from "react";

// styled components import
import { PageHeader, Text } from "../../../styles/Headings.styled";
import { Main } from "../../../styles/Utilities.styled";

const WhoWeAre = () => {
  return (
    <Main moreTop>
      <PageHeader>About us</PageHeader>
      <Text>
        Dhreylyte store launched its very first collection catalog in 2021.
        Since then we have grown into one of the nation’s leading and fastest
        growing store, direct-to-consumer companies.
      </Text>
      <Text>
        We have been recognized by the industry as a Top Cataloger and Top
        Internet Retailer. Our growth has been built on a simple philosophy of
        providing customers with unique and appealing products at an exceptional
        value. We offer a wide range of affordably-priced, hard-to-find and
        exclusive products including items for home and garden, health and
        beauty as well as apparel and accessories. You’ll find the most fun and
        festive decor for every holiday.
      </Text>
    </Main>
  );
};

export default WhoWeAre;
