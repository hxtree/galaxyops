# @cats-cradle/design-system

This
[design system](https://storybook.js.org/tutorials/design-systems-for-developers/)
contains common components for use in other front end applications. It contains
a Storybook service that is deployed to empower designers. It also builds and
publishes a package of those designs for use in other applications.

This package should only contain pure and presentational components. This is not
superset of every component library in an organization. That would be a headache
to keep track of. These are **reusable** components.

The following properties are essential in allowing the component to be reusable:

- Components MUST deal with how UI appears.
- Components MUST respond exclusively to `props`.
- Components SHOULD NOT contain app-specific business logic.
- Components MUST be agnostic to how data loads.

## Guidelines

- Use Component Story Format [CSF](https://storybook.js.org/docs/react/api/csf)
- Per Palmer Group guidelines,
  [always use named exports.](https://github.com/palmerhq/typescript#exports).
  Code split inside your React app instead of your React library.

## References

- [Material UI](https://mui.com/material-ui/)
- [Design System For Developers Architecture](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/architecture/)
- [TSDX](https://tsdx.io/)
- [TSDX Repo](https://github.com/jaredpalmer/tsdx#optimization)
- [Create Design System](https://www.youtube.com/watch?v=qSkHRVLcj6U)
