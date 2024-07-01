import {
  Paper,
  HeroBanner,
  Spacer,
} from '@cats-cradle/design-system/dist/main';
import { BreadCrumbs } from '../components/Breadcrumbs';

export default function CharacterSheetsPage() {
  return (
    <>
      <HeroBanner
        image="/assets/data-center.jpg"
        background="/assets/topic-hero/malace-tsia.jpg"
        breadcrumb={<BreadCrumbs />}
        heading="Character Sheets"
        lead="Review characters per instance"
      ></HeroBanner>
      <main className="container">
        <Spacer bottom={5}>
          <Paper elevation="1" className="p-5">
            Coming soon.
          </Paper>
        </Spacer>
      </main>
    </>
  );
}
