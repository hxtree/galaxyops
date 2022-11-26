# @org-package/design-system

[Design system](https://storybook.js.org/tutorials/design-systems-for-developers/)
containing common components for other front end applications.

This should only contain pure and presentational components. These components
deal with how UI appears, respond exclusively to props, do not contain
app-specific business logic, and are agnostic to how data loads. These
properties are essential in allowing the component to be reusable. It is not
superset of every component library in an organization. That would be a headache
to keep track of.

## Guidelines:

- Use Component Story Format(CSF) https://storybook.js.org/docs/react/api/csf

## References

- [Architecture](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/architecture/)
