import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { SectionDescription } from "components/misc/Typography.js";

const Container = tw.div`relative`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl text-center tracking-wide whitespace-pre`;

const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;

const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;

export default ({
  description = "I'm a second year cyber security student from plymouth University.and I'm mostly interested in web security and web development",
  primaryButtonText = "View My Blogs",
  primaryButtonUrl = "/blog",
}) => {

  return (
    <>
      <Header />
      <Container>
        <ThreeColumnContainer>
          <Heading>
            Hello! I'm <code>Dasith </code>
          </Heading>
          <Description>{description}</Description>

          <VerticalSpacer />

          <PrimaryButton as="a" href={primaryButtonUrl}>
            {primaryButtonText}
          </PrimaryButton>
        </ThreeColumnContainer>

        <DecoratorBlob1 />
      </Container>
    </>
  );
};
