import { HeroBanner } from '@cats-cradle/design-system/dist/main';
import { DiceAnalyzer } from '../components/DiceAnalyzer';
import { BreadCrumbs } from '../components/Breadcrumbs';

export default function DicePage() {
  return (
    <>
    <HeroBanner
    image='/assets/dice.jpg'
    background='/assets/background/gray.jpg'
    breadcrumb={<BreadCrumbs/>}
    heading='Dice Notation Analyzer'
    lead='Determine the appropriate dice notation for skill set rolls.'
    >
  <p>Visualizes the impact of luck. Gain valuable insights into
      chance&apos;s influence on game play outcomes.</p>
  </HeroBanner>
      <main className="container">


      <DiceAnalyzer/>
    </main>
    </>
  );
}
