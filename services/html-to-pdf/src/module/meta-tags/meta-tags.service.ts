import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class MetaTagsService {
  async getMetaTags(url: string): Promise<{ [key: string]: string }> {
    try {
      const response = await axios.get(url);
      const metaTags = this.extractMetaTags(response.data);
      return metaTags;
    } catch (err) {
      // Handle errors (e.g., network issues, invalid URLs)
      const error = err as Error;
      console.error('Error fetching or parsing the page:', error.message);
      throw new Error('Unable to fetch or parse the page');
    }
  }

  private extractMetaTags(html: string): { [key: string]: string } {
    const $ = cheerio.load(html);
    const metaTags: { [key: string]: string } = {};

    $('meta').each((_, element) => {
      const tag = $(element);
      const name = tag.attr('name') || tag.attr('property');
      const content = tag.attr('content');

      if (name && content) {
        metaTags[name] = content;
      }
    });

    return metaTags;
  }
}
