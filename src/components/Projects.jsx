import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 mt-0`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between mt-10 ml-2`;
const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl text-center`;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col max-w-sm`;

const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-contain bg-no-repeat rounded`,
]);


const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center mt-0`;
const Title = tw.h5`text-xl mt-4 font-bold`;



const Description = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto mt-20`}
`;
const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4 text-gray-100`;

const Text = tw.div`ml-2 text-sm font-semibold text-gray-500`;

const PrimaryButton = tw(PrimaryButtonBase)`w-full mt-6`;

export default function Projects() {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // these are just placeholders for now will fetch this from github api 
  const cards =  [{"owner":"AvishkaSooriyapperuma","repo":"Portfolio","link":"https://github.com/AvishkaSooriyapperuma/Portfolio","image":"https://opengraph.githubassets.com/1/AvishkaSooriyapperuma/Portfolio","language":"HTML","languageColor":"#e34c26","stars":"1","forks":0},{"owner":"AvishkaSooriyapperuma","repo":"GitOnlineSession","link":"https://github.com/AvishkaSooriyapperuma/GitOnlineSession","description":"FOSS NSBM","image":"https://opengraph.githubassets.com/1/AvishkaSooriyapperuma/GitOnlineSession","language":"HTML","languageColor":"#e34c26","stars":0,"forks":0},{"owner":"AvishkaSooriyapperuma","repo":"css-Button","link":"https://github.com/AvishkaSooriyapperuma/css-Button","description":"nice 5 button in css","image":"https://opengraph.githubassets.com/1/AvishkaSooriyapperuma/css-Button","language":"CSS","languageColor":"#563d7c","stars":0,"forks":"1"},{"owner":"AvishkaSooriyapperuma","repo":"GitHub-Workshop-2","link":"https://github.com/AvishkaSooriyapperuma/GitHub-Workshop-2","description":"This repo for the Github Workshop 2019 (Winter)","image":"https://opengraph.githubassets.com/1/AvishkaSooriyapperuma/GitHub-Workshop-2","language":"HTML","languageColor":"#e34c26","stars":0,"forks":0},{"owner":"AvishkaSooriyapperuma","repo":"CV-in-html","link":"https://github.com/AvishkaSooriyapperuma/CV-in-html","description":"if you want to write in your cv in html code please use this","image":"https://opengraph.githubassets.com/1/AvishkaSooriyapperuma/CV-in-html","language":"HTML","languageColor":"#e34c26","stars":0,"forks":"2"},{"owner":"AvishkaSooriyapperuma","repo":"Simple-Todo-List","link":"https://github.com/AvishkaSooriyapperuma/Simple-Todo-List","description":"Simple HTML CSS JS Todo list","image":"https://opengraph.githubassets.com/1/AvishkaSooriyapperuma/Simple-Todo-List","language":"HTML","languageColor":"#e34c26","stars":0,"forks":0}]

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Pinned Projects</Heading>
      </ThreeColumnContainer>

      <Content>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((repo, index) => (
            <Card key={index}>
              <CardImage imageSrc={repo.image} />

              <TitleReviewContainer>
                <Title>{repo.repo}</Title>
              </TitleReviewContainer>

              <SecondaryInfoContainer>
                <Text>
                  <code>{repo.owner}</code> |{" "}
                </Text>
                <Text>
                  <code>language : {repo.language}</code>
                </Text>
              </SecondaryInfoContainer>
              <Description>{repo.description}</Description>

              <PrimaryButton>
                <a href={repo.link}>View Project on Github</a>
              </PrimaryButton>
            </Card>
          ))}
        </CardSlider>

        <HeadingWithControl>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}>
              <ChevronLeftIcon />
            </PrevButton>
            <NextButton onClick={sliderRef?.slickNext}>
              <ChevronRightIcon />
            </NextButton>
          </Controls>
        </HeadingWithControl>
      </Content>
    </Container>
  );
}
