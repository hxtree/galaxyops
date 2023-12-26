import { Paper, Button, Link, FontAwesomeIcon, faArrowRight } from '@cats-cradle/design-system/dist/main';

export default function HomePage() {
  return (
    <main className="container">
      <Paper elevation="1">
        <h1>Cats Cradle</h1>
        <h2>Latest</h2>
        <h3>Archetypes</h3>
        <p>
        Attention, game masters! Introducing our latest tool designed exclusively for you.
        Dive into the world of character archetypes with ease.
        Uncover diverse options, check out base stats, and seamlessly explore backstories—all in one place.
        No-frills, just a straightforward way to look at the data. Raise a <Link href='https://github.com/hxtree/cats-cradle/pulls'>pull request</Link> to suggest changes.
        </p>
        <Button href="/archetypes" color="secondary">Try It <FontAwesomeIcon icon={faArrowRight}/></Button>
      </Paper>
    </main>
  );
}
