import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { BasicCard, CardRibbonColor } from './BasicCard';

describe('BasicCard', () => {

  it.each([
    'card-ribbon',
  ])('renders data-testid for %s suffix', (testIdSuffix: string) => {
    render(
      <BasicCard
        title='This is a card title'
        body='This is a card body'
        url='https://example.com'
        imageSrc="example.jpg"
        ribbonText= 'Free'
        ribbonColor={CardRibbonColor.PRIMARY}
        testId={'sut'}
      ></BasicCard>
    )

    const ele = screen.getByTestId(`sut-${testIdSuffix}`);
    expect(ele).toBeInTheDocument();
  })

  it('should not set any data-testid when testId null', () => {
    const { container } = render(
      <BasicCard
      title='This is a card title'
      body='This is a card body'
      url='https://example.com'
      imageSrc="example.jpg"
      ribbonText='Free'
      ribbonColor={CardRibbonColor.PRIMARY}
    ></BasicCard>
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
    CardRibbonColor.TERIARY
  ])('renders with correct ribbon color %s', (ribbonColor: CardRibbonColor) => {
    render(
      <BasicCard
      title='This is a card title'
      body='This is a card body'
      url='https://example.com'
      imageSrc="example.jpg"
      ribbonText='Free'
      ribbonColor={ribbonColor}
      testId={'sut'}
    ></BasicCard>
    );

    const ele = screen.getByTestId('sut-card-ribbon');
    expect(ele).toHaveClass(`card-ribbon-${ribbonColor}`);
  })

})