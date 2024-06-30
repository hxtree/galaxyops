import { CardRibbonColor } from '@cats-cradle/design-system';
import {
  Login,
  Hero,
  Paper,
  BasicCard,
  BlurbPair,
  faCheck,
  faGithub,
  BlurbIconColors,
} from '@cats-cradle/design-system/dist/main';

export default function HomePage() {
  return (
    <>
      <Hero
        image="/assets/clouds.jpg"
        heading="Explore the new<br/> GM tools"
        lead="We've made new toys for us."
        imageRight="/assets/shield-sword.png"
        toolbar={<Login />}
      ></Hero>
      <div className="m-5">
        <BlurbPair
          iconLeft={faCheck}
          iconColorLeft={BlurbIconColors.GRAY}
          textLeft="Join us in enhancing our project! We value collaboration and welcome contributions from developers of all backgrounds. Together, let's build something remarkable!"
          linkLeft="https://github.com/hxtree/cats-cradle"
          ctaLeft="Open A PR"
          iconRight={faGithub}
          iconColorRight={BlurbIconColors.GRAY}
          textRight="We're excited to announce several innovative new features coming soon, promising significant enhancements and exciting opportunities for our community."
          linkRight="https://github.com/hxtree/cats-cradle/issues"
          ctaRight="Learn More"
        />
      </div>
      <main className="container-fluid mt-5">
        <Paper elevation="1" className="p-5">
          <div className="container">
            <h2>Latest</h2>
            <div className="row row-cols-1 row-cols-md-3">
              <div className="col mb-3">
                <BasicCard
                  title="Archetypes"
                  imageSrc="/assets/cards/deep-thinker.jpg"
                  url="/archetypes"
                  cta="Try It"
                >
                  <p>
                    Dive into the world of character archetypes with ease.
                    Uncover diverse options, check out base stats, and
                    seamlessly explore backstories—all in one place. No-frills,
                    just a straightforward way to look at the data.
                  </p>
                </BasicCard>
              </div>
              <div className="col mb-3">
                <BasicCard
                  title="Dice Notation Analyzer"
                  ribbonText="Roll with it!"
                  ribbonColor={CardRibbonColor.PRIMARY}
                  imageSrc="/assets/cards/meeku-oni.png"
                  url="/dice-analyzer"
                  cta="Roll The Dice"
                >
                  NekosGate Dice Notation Analyzer allows engineers to decide
                  appropriate values for skills.
                </BasicCard>
              </div>
              <div className="col mb-3">
                <BasicCard
                  title="Open Source Software"
                  imageSrc="/assets/cards/stand-still.png"
                  url="https://github.com/hxtree/cats-cradle/pulls"
                  cta="Open A Pull Request"
                >
                  Shape the future of development with us! Contribute your
                  expertise to help. Join our community today!
                </BasicCard>
              </div>
            </div>
          </div>
        </Paper>
      </main>
    </>
  );
}
