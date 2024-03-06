import { Paper, Hero } from '@cats-cradle/design-system/dist/main';
import { BreadCrumbs } from '../components/Breadcrumbs';

export default function CharacterSheetsPage() {
  return (
    <>
      <Hero
        pageTier={2}
        image='/assets/clouds.jpg'
        breadcrumb={<BreadCrumbs/>}
        heading='Character Sheets'
        lead='Review characters per instance'>
      </Hero>
      <main className="container">
        <Paper elevation="1" className='p-5'>
          Coming soon.
        </Paper>
      </main>
    </>
  );
}
