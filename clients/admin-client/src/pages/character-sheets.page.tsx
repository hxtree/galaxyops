import { Paper, HeroBanner } from '@cats-cradle/design-system/dist/main';
import { BreadCrumbs } from '../components/Breadcrumbs';

export default function CharacterSheetsPage() {
  return (
    <>
      <HeroBanner
        image='/assets/clouds.jpg'
        breadcrumb={<BreadCrumbs/>}
        heading='Character Sheets'
        lead='Review characters per instance'>
      </HeroBanner>
      <main className="container">
        <Paper elevation="1" className='p-5'>
          Coming soon.
        </Paper>
      </main>
    </>
  );
}
