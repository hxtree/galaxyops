import { Paper, Hero } from '@cats-cradle/design-system/dist/main';
import { DiceAnalyzer } from '../components/DiceAnalyzer';
import { BreadCrumbs } from '../components/Breadcrumbs';

export default function DicePage() {
  return (
    <main className="container">
      {/** TODO move to prop on breadcrumb */}
      <BreadCrumbs/>
      <Hero pageTier={2} image='/assets/clouds.jpg'
      heading='Dice Notation Analyzer'
      lead='Determine the appropriate dice notation for skill set rolls and
          visualizes the impact of luck. Gain valuable insights into
          chance&apos;s influence on game play outcomes.'>
      </Hero>

      <DiceAnalyzer/>
    </main>
  );
}
