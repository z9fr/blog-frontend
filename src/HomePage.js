import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container } from "components/misc/Layouts";

import HeroPage from "components/hero/HeroPage";
import Projects from "components/Projects";
import FeaturePosts from "components/FeaturePosts";
import ContactMe from "components/ContactMe";
import Footer from "components/Footer";

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Container>
        <HeroPage />
      </Container>


      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8 dark">
        <Projects />
      </Container>

      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8 dark">
        <FeaturePosts />
      </Container>

      <ContactMe />

      <Footer />
    </AnimationRevealPage>
  );
};
