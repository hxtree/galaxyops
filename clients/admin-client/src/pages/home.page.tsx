import { Hero, Paper, Button, Link, FontAwesomeIcon, faArrowRight, BasicCard, Blurb, faCheck, faGithub } from '@cats-cradle/design-system/dist/main';

export default function HomePage() {
  return (
    <>
      <Hero
        image="/assets/clouds.jpg"
        heading="Attention,<br/> Game Masters!"
        lead="Introducing our latest tool designed exclusively for you."
      >
      </Hero>
      <div className='m-5'>
      <Blurb
      iconLeft={faCheck} textLeft="Checkout our latest features."
      iconRight={faGithub} textRight="PR Welcome."
        />

      </div>
      <main className="container-fluid mt-5">
        <Paper elevation="1" className='p-5'>
        <div className="container">
          <h2>Latest</h2>
          <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-3">
      <BasicCard title="Archetypes" imageSrc="/assets/clouds.jpg" ribbonText='New Archetypes'>
      <p>
          Dive into the world of character archetypes with ease.
          Uncover diverse options, check out base stats, and seamlessly explore backstories—all in one place.
          No-frills, just a straightforward way to look at the data.
          </p>
          <Button href="/archetypes" color="secondary">Try It <FontAwesomeIcon icon={faArrowRight}/></Button>
      </BasicCard>
    </div>
      <div className="col mb-3">
      <BasicCard title="Game Portal" imageSrc="/assets/clouds.jpg">
        NekosGate admin portal is a powerful tool that allows you to manage your game with ease.
      </BasicCard>
    </div>
    <div className="col mb-3">
      <BasicCard title="Open Source Software" imageSrc="/assets/clouds.jpg">
        Shape the future of development with us!
        Contribute your expertise to help.
        Join our community today!
        Raise a <Link href='https://github.com/hxtree/cats-cradle/pulls'>pull request</Link> to suggest changes.
      </BasicCard>
    </div>
  </div>
  </div>
        </Paper>
      </main>
    </>
  );
}
