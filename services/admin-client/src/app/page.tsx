'use client';
import styles from './page.module.css';
import { ApiClient } from '../../components/ApiClient';
import { Container, Link } from '@cats-cradle/design-system';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href="https://github.com">Github Repository</Link>
        <Container>
          <h1>Demo Page</h1>
          <ApiClient
            title="Try out the route action"
            description="Select an endpoint and run query to see an API response using a sample route request."
            options={[
              {
                label: 'Conditions',
                displayUrl:
                  'https://api.aerisapi.com/conditions/:auto?format=json&filter=day&limit=7&client_id=[CLIENT_ID]&client_secret=[CLIENT_SECRET]',
                endpoint: '/api/aeris/conditions',
              },
              {
                label: 'Forecast',
                displayUrl:
                  'https://api.aerisapi.com/forecasts/:auto?format=json&filter=day&limit=7&client_id=[CLIENT_ID]&client_secret=[CLIENT_SECRET]',
                endpoint: '/api/aeris/forecasts',
              },
              {
                label: 'Alerts',
                displayUrl:
                  'https://api.aerisapi.com/alerts/:auto?format=json&filter=day&limit=7&client_id=[CLIENT_ID]&client_secret=[CLIENT_SECRET]',
                endpoint: '/api/aeris/alerts',
              },
            ]}
            submitLabel="Run Query"
          />

          <ApiClient
            title="My Storm Center"
            description="Select an endpoint and run query to see an API response using a sample route request."
            options={[
              {
                label: 'Tropical Cyclones',
                displayUrl:
                  'https://api.aerisapi.com/conditions/:auto?format=json&filter=day&limit=7&client_id=[CLIENT_ID]&client_secret=[CLIENT_SECRET]',
                endpoint: '/api/aeris/tropicalcyclones',
              },
              {
                label: 'Lightning',
                displayUrl:
                  'https://api.aerisapi.com/lightning/:auto?format=json&filter=day&limit=7&client_id=[CLIENT_ID]&client_secret=[CLIENT_SECRET]',
                endpoint: '/api/aeris/lightning',
              },
            ]}
            submitLabel="Check for Storms"
          />
        </Container>
      </div>
    </main>
  );
}
