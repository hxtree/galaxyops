export function pascalCase(input: string): string {
  // Remove non-alphanumeric characters and replace double hyphens with a single hyphen
  const cleanedInput = input.replace(/[^a-zA-Z0-9-]+/g, ' ');

  // Split the cleaned input string into words based on spaces or hyphens
  const words = cleanedInput.split(/[\s-]+/);

  // Capitalize the first letter of each word and join them together
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}
