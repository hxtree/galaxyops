import AerisWeather from '@aerisweather/javascript-sdk';

export default async function handler(req: any, res: any) {
  const { endpoint } = req.query;

  // TODO add support for slashes
  const aerisEndpoints = [
    'airquality',
    'alerts',
    'conditions',
    // 'conditions/summary',
    'forecasts',
    'lightning',
    // 'lightning/flash',
    'tropicalcyclones',
  ];

  if (!aerisEndpoints.includes(endpoint)) {
    return res.status(500).end(`Unsupported Aeris Endpoint ${endpoint}`);
  }

  try {
    const aeris = new AerisWeather(
      process.env.AERIS_CLIENT_ID ?? '',
      process.env.AERIS_CLIENT_SECRET ?? '',
    );

    // TODO ensure support for dynamic place as request ip may be from server
    const { data } = await aeris.api().endpoint(endpoint).place(':auto').get();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ data });
  } catch (err) {
    const error: Error = err as Error;
    res.status(500).end(error.message);
  }
}
