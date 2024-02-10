/* eslint-disable no-useless-escape, no-case-declarations */
import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RouterService {
  private readonly routes: { path: string; endpoint: string }[] = [
    {
      path: '/character-sheet',
      endpoint: process.env.CHARACTER_SVC_DOMAIN_NAME || '',
    },
    {
      path: '/email-message',
      endpoint: process.env.EMAIL_MESSAGE_SVC_DOMAIN_NAME || '',
    },
    {
      path: '/html-to-pdf',
      endpoint: process.env.HTML_TO_PDF_SVC_DOMAIN_NAME || '',
    },
    {
      path: '/instances',
      endpoint: process.env.INSTANCES_SVC_DOMAIN_NAME || '',
    },
    { path: '/dice', endpoint: process.env.LUCK_BY_DICE_SVC_DOMAIN_NAME || '' },
    {
      path: '/player-achievements',
      endpoint: process.env.PLAYER_ACHIEVEMENTS_SVC_DOMAIN_NAME || '',
    },
    // Add more routes as needed
  ];

  async routeRequest(path: string, body: any, method: string): Promise<any> {
    const route = this.getRouteForPath(path); // Find the route for the provided path
    if (!route) {
      throw new Error(`No route configured for path: ${path}`);
    }

    const [basePath, queryString] = path.split('?');
    const decodedBasePath = decodeURIComponent(basePath);
    if (!this.isValidPath(decodedBasePath)) {
      throw new Error(`Invalid path: ${decodedBasePath}`);
    }

    const requestId = uuidv4();
    const headers = { 'X-Request-Id': requestId }; // Add requestId as a header

    let response: AxiosResponse<any>;

    switch (method.toUpperCase()) {
      case 'POST':
        response = await axios.post(
          this.constructUrl(route.endpoint, decodedBasePath),
          body,
          { headers },
        );
        break;
      case 'PUT':
        response = await axios.put(
          this.constructUrl(route.endpoint, decodedBasePath),
          body,
          { headers },
        );
        break;
      case 'DELETE':
        response = await axios.delete(
          this.constructUrl(route.endpoint, decodedBasePath),
          { headers },
        );
        break;
      case 'PATCH':
        response = await axios.patch(
          this.constructUrl(route.endpoint, decodedBasePath),
          body,
          { headers },
        );
        break;
      case 'GET':
        const fullPath = queryString
          ? `${decodedBasePath}?${queryString}`
          : decodedBasePath;
        response = await axios.get(
          this.constructUrl(route.endpoint, fullPath),
          { headers },
        );
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }

    return response.data;
  }

  getRoutes(): { path: string; endpoint: string }[] {
    return this.routes;
  }

  private getRouteForPath(
    path: string,
  ): { path: string; endpoint: string } | undefined {
    return this.routes.find((route) => path.startsWith(route.path));
  }

  private constructUrl(endpoint: string, path: string): string {
    const protocol = 'https://';
    const formattedEndpoint = endpoint.startsWith(protocol)
      ? endpoint
      : protocol + endpoint;
    return formattedEndpoint + path.substring(path.indexOf('/', 1)); // Retain slashes in path
  }

  private isValidPath(path: string): boolean {
    // Implement your path validation logic here
    // Example: Whitelist allowed characters and patterns, reject special characters
    const allowedCharsRegex = /^[a-zA-Z0-9\-_\/]+$/;
    return allowedCharsRegex.test(path);
  }
}
