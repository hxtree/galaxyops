import { TemplateService } from '../module/template/template.service';

describe('TemplateService', () => {
  describe('toText', () => {
    it('should convert html to text', async () => {
      const templateService = new TemplateService();
      const result = await templateService.toText('<p>Hello, World</p>');

      expect(result).toBe('Hello, World');
    });
  });

  describe('parse', () => {
    it('should interpolate variables', async () => {
      const templateService = new TemplateService();
      const result = await templateService.parse('<p>Hello, {{ name }}</p>', {
        name: 'John',
      });

      expect(result).toBe('<p>Hello, John</p>');
    });
  });
});
