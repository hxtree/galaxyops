import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { BasicCard } from './BasicCard';
import { CardRibbonColor } from './CardRibbonColor.type';

describe('BasicCard', () => {

  it.each([
    'card-ribbon',
  ])('renders data-testid for %s suffix', (testIdSuffix: string) => {
    render(
      <BasicCard
        title='This is a card title'
        url='https://example.com'
        imageSrc="example.jpg"
        ribbonText= 'Free'
        ribbonColor={CardRibbonColor.PRIMARY}
        testId={'sut'}
      >
        This is a card body
      </BasicCard>
    )

    const ele = screen.getByTestId(`sut-${testIdSuffix}`);
    expect(ele).toBeInTheDocument();
  })

  it('should not set any data-testid when testId null', () => {
    const { container } = render(
      <BasicCard
      title='This is a card title'
      url='https://example.com'
      imageSrc="example.jpg"
      ribbonText='Free'
      ribbonColor={CardRibbonColor.PRIMARY}
    >
      This is a card body
    </BasicCard>
    );
    const traverseDOM = (node: Node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        expect((node as Element).hasAttribute('data-testid')).toBeFalsy();
        node.childNodes.forEach(childNode => traverseDOM(childNode));
      }
    };
    traverseDOM(container);
  })

  it.each([
    CardRibbonColor.PRIMARY,
    CardRibbonColor.SECONDARY,
    CardRibbonColor.TERTIARY
  ])('renders with correct ribbon color %s', (ribbonColor: CardRibbonColor) => {
    render(
      <BasicCard
      title='This is a card title'
      url='https://example.com'
      imageSrc="example.jpg"
      ribbonText='Free'
      ribbonColor={ribbonColor}
      testId={'sut'}
    >
      This is a card body
    </BasicCard>
    );

    const ele = screen.getByTestId('sut-card-ribbon');
    expect(ele).toHaveClass(`card-ribbon-${ribbonColor}`);
  })

})