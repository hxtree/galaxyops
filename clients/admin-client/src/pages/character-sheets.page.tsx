import { Paper } from '@cats-cradle/design-system/dist/main';
import { BreadCrumbs } from '../components/Breadcrumbs';

export default function CharacterSheetsPage() {
  return (
    <main className="container">
      <BreadCrumbs/>
      <Paper elevation="1" className='p-5'>
        <h1>Character Sheets</h1>
      </Paper>
    </main>
  );
}
