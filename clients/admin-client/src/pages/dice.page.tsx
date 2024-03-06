import { Hero } from '@cats-cradle/design-system/dist/main';
import { DiceAnalyzer } from '../components/DiceAnalyzer';
import { BreadCrumbs } from '../components/Breadcrumbs';

export default function DicePage() {
  return (
    <main className="container">
      <Hero pageTier={2} image='/assets/clouds.jpg'
      breadcrumb={<BreadCrumbs/>}
      heading='Dice Notation Analyzer'
      lead='Determine the appropriate dice notation for skill set rolls.'>
      <p>Visualizes the impact of luck. Gain valuable insights into
          chance&apos;s influence on game play outcomes.</p>
      </Hero>


      <DiceAnalyzer/>
    </main>
  );
}
