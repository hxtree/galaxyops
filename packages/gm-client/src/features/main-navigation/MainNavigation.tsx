import {Stack, Item} from '@org-package/design-system';

export function MainNavigation() {
  return (
    <Stack spacing={2}>
      <Item>
        <a href="/luck-by-dice-monitor.html">Luck By Dice</a>
      </Item>
      <Item>
        <a href="/weather">Weather</a>
      </Item>
      <Item>
        <a href="/character-sheets">Character Sheets</a>
      </Item>
    </Stack>
  );
}
