import { TemplateService } from '../modules/email-message/template.service';

describe('TemplateService', () => {
  let templateService: TemplateService;

  beforeEach(async () => {
    templateService = new TemplateService();
  });

  describe('toText', () => {
    it('should convert html to text', async () => {
      const result = await templateService.toText('<p>Hello, World</p>');

      expect(result).toBe('Hello, World');
    });
  });

  describe('parse', () => {
    it('should interpolate variables', async () => {
      const result = await templateService.parse('<p>Hello, {{ name }}</p>', {
        name: 'John',
      });

      expect(result).toBe('<p>Hello, John</p>');
    });
  });
});
