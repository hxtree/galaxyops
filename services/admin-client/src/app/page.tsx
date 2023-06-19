'use client';
import styles from './page.module.css';
import { ApiClient } from './ApiClient';
import { Container } from '@cats-cradle/design-system';

export default function Home() {
  const args = {
    loading: false,
    title: 'Try out the route action',
    description:
      'Select an endpoint and run query to see an API response using a sample route request.',
    // duplicate prop
    url: 'https://api.aerisapi.com/forecasts/:auto?format=json&filter=day&limit=7&client_id=[CLIENT_ID]&client_secret=[CLIENT_SECRET]',
    button: [
      { label: 'Conditions', url: '', selected: true },
      { label: 'Forecast', url: '', selected: true },
      { label: 'Alerts', url: '', selected: true },
    ],
    submitLabel: 'Run Query',
    response: `{
      "success": true,
      "error": null,
      "response" : [
        {
          "type": "Feature",
          "id": "44.96,-93.37",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -93.27,
              44.96
            ]
          }
        }
      ]
    }`,
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Container>
          <h1>Demo Page</h1>
          <ApiClient {...args} />
        </Container>
      </div>
    </main>
  );
}
