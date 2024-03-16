import { kebabCase } from 'lodash';

type AnalyticProps = {
  [key: string]: string;
};

/**
 * Analytics class for managing analytic properties on HTML elements.
 */
export class Analytics {
  public DATA_ANALYTICS_ATTRIBUTE = 'data-analytics';
  public DEFAULT_DELIMITER = '-';
  private scope?: string;
  private delimiter?: string;

  /**
   * Creates an instance of the Analytics class.
   * @param {string} [scope] - An optional scope to be added to analytic property values.
   * @param {string} [delimiter] - An optional delimiter to be used between scope and id.
   * @example
   * const analytics = new Analytics('component', 'child');
   */
  constructor(scope?: string, delimiter?: string) {
    this.scope = scope;
    this.delimiter = delimiter;
    if (delimiter === undefined) {
      this.delimiter = this.DEFAULT_DELIMITER;
    }
  }

  /**
   * Sets analytic properties on a DOM element's ref.
   * @param {HTMLElement | null} elementRef - The ref of the DOM element.
   * @param {string} id - Should be a unique identifier for the component.
   * @example
   * <Button ref={ref => analytics.set(ref, 'SubmitButton')}>Submit</Button>
   */
  public set = (elementRef: HTMLElement | null, id: string): void => {
    const analyticProps = this.props(id);

    if (elementRef) {
      Object.entries(analyticProps).forEach(([attribute, value]) => {
        elementRef.setAttribute(attribute, value);
      });
    }
  };

  /**
   * Generates analytic DOM element properties based on the provided id.
   * @param {string} id - Should be a unique identifier for the component.
   * @returns {AnalyticProps} - An object containing analytic properties.
   * @example
   * <button {...analytics.props('SubmitButton')}>Submit</button>;
   */
  public props(id: string): AnalyticProps {
    let value: string;
    if (this.scope === undefined) {
      value = `${id}`;
    } else {
      value = `${this.scope}${this.delimiter}${id}`;
    }

    return {
      [this.DATA_ANALYTICS_ATTRIBUTE]: kebabCase(value),
    };
  }
}
