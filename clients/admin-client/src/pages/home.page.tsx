import {
  CardRibbonColor,
  Login,
  Hero,
  BasicCard,
  BlurbPair,
  faCheck,
  faGithub,
  BlurbIconColors,
  DataHighlights,
  Disclaimer,
} from '@galaxyops/design-system/dist/main';

export default function HomePage() {
  return (
    <>
      <Hero
        image="/assets/clouds.jpg"
        heading="Explore the new<br/> GM tools"
        lead="We've got new dev toys."
        imageRight="/assets/shield-sword.png"
        toolbar={<Login />}
        spacing={{ bottom: 5 }}
      />
      <DataHighlights
        data={[
          { number: '40+', description: 'Archetypes' },
          { number: '1M+', description: 'Dice Rolls' },
          { number: '1,000+', description: 'Software Deployments' },
        ]}
      />

      <main className="container-fluid mt-5">
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
                  Dive into the world of character archetypes with ease. Uncover
                  diverse options, check out base stats, and seamlessly explore
                  backstories—all in one place. No-frills, just a
                  straightforward way to look at the data.
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
                url="https://github.com/hxtree/galaxyops/pulls"
                cta="Open A Pull Request"
              >
                Shape the future of development with us! Contribute your
                expertise to help. Join our community today!
              </BasicCard>
            </div>
          </div>
        </div>
        <BlurbPair
          iconLeft={faCheck}
          iconColorLeft={BlurbIconColors.GRAY}
          textLeft="Join us in enhancing our project! We value collaboration and welcome contributions from developers of all backgrounds. Together, let's build something remarkable!"
          linkLeft="https://github.com/hxtree/galaxyops"
          ctaLeft="Open A PR"
          iconRight={faGithub}
          iconColorRight={BlurbIconColors.GRAY}
          textRight="We're excited to announce several innovative new features coming soon, promising significant enhancements and exciting opportunities for our community."
          linkRight="https://github.com/hxtree/galaxyops/issues"
          ctaRight="Learn More"
          spacing={{ top: 5 }}
        />
      </main>

      <Disclaimer spacing={{ top: 5 }}>
        <p>
          Data highlight totals are sourced from third-party resources.
          Archetypes and their totals are managed within the character-sheet
          services. Dice roll requests are processed and managed using AWS
          infrastructure. Deployment totals are overseen by{' '}
          <a href="https://github.com/hxtree/galaxyops/deployments">
            GitHub deployments
          </a>
          .
        </p>
      </Disclaimer>
    </>
  );
}
