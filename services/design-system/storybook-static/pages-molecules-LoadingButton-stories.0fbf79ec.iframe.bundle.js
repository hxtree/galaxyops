'use strict';
(self.webpackChunk_cats_cradle_design_system =
  self.webpackChunk_cats_cradle_design_system || []).push([
  [83],
  {
    './stories/pages/molecules/LoadingButton.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          IsLoading: () => IsLoading,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var _src_LoadingButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/LoadingButton.tsx',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Molecules/LoadingButton',
          component: _src_LoadingButton__WEBPACK_IMPORTED_MODULE_1__.f,
        },
        Default = args =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _src_LoadingButton__WEBPACK_IMPORTED_MODULE_1__.f,
            { ...args, children: 'Run Query' },
          );
      (Default.displayName = 'Default'),
        (Default.args = {
          variant: 'contained',
          color: 'primary',
          loading: !1,
        });
      const IsLoading = args =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _src_LoadingButton__WEBPACK_IMPORTED_MODULE_1__.f,
          { ...args, children: 'Run Query' },
        );
      (IsLoading.displayName = 'IsLoading'),
        (IsLoading.args = {
          variant: 'contained',
          color: 'primary',
          loading: !0,
        }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource:
                'args => <LoadingButton {...args}>Run Query</LoadingButton>',
              ...Default.parameters?.docs?.source,
            },
          },
        }),
        (IsLoading.parameters = {
          ...IsLoading.parameters,
          docs: {
            ...IsLoading.parameters?.docs,
            source: {
              originalSource:
                'args => <LoadingButton {...args}>Run Query</LoadingButton>',
              ...IsLoading.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ['Default', 'IsLoading'];
      try {
        (Default.displayName = 'Default'),
          (Default.__docgenInfo = {
            description: '',
            displayName: 'Default',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/pages/molecules/LoadingButton.stories.tsx#Default'
            ] = {
              docgenInfo: Default.__docgenInfo,
              name: 'Default',
              path: 'stories/pages/molecules/LoadingButton.stories.tsx#Default',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (IsLoading.displayName = 'IsLoading'),
          (IsLoading.__docgenInfo = {
            description: '',
            displayName: 'IsLoading',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/pages/molecules/LoadingButton.stories.tsx#IsLoading'
            ] = {
              docgenInfo: IsLoading.__docgenInfo,
              name: 'IsLoading',
              path: 'stories/pages/molecules/LoadingButton.stories.tsx#IsLoading',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/LoadingButton.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { f: () => LoadingButton });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+lab@5.0.0-alpha.134_@emotion+react@11.10.8_@emotion+styled@11.10.8_@mui+material@5.12.3__tqnykp2v4mnjq5nzaodb6pqo64/node_modules/@mui/lab/LoadingButton/LoadingButton.js',
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const LoadingButton = props => {
        const { children, ...muiProps } = props;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            ...muiProps,
            style: {
              fontFamily: 'Helvetica, arial, sans-serif',
              fontWeight: 'bold',
            },
            children,
          },
        );
      };
      LoadingButton.displayName = 'LoadingButton';
      try {
        (LoadingButton.displayName = 'LoadingButton'),
          (LoadingButton.__docgenInfo = {
            description: '',
            displayName: 'LoadingButton',
            props: {
              classes: {
                defaultValue: null,
                description:
                  'Override or extend the styles applied to the component.',
                name: 'classes',
                required: !1,
                type: {
                  name: '(Partial<ButtonClasses> & { root?: string; loading?: string; loadingIndicator?: string | undefined; loadingIndicatorCenter?: string | undefined; loadingIndicatorStart?: string | undefined; loadingIndicatorEnd?: string | undefined; endIconLoadingEnd?: string | undefined; startIconLoadingStart?...',
                },
              },
              loading: {
                defaultValue: { value: 'false' },
                description: 'If `true`, the loading indicator is shown.',
                name: 'loading',
                required: !1,
                type: { name: 'boolean' },
              },
              loadingIndicator: {
                defaultValue: {
                  value: '<CircularProgress color="inherit" size={16} />',
                },
                description:
                  'Element placed before the children if the button is in loading state.\nThe node should contain an element with `role="progressbar"` with an accessible name.\nBy default we render a `CircularProgress` that is labelled by the button itself.',
                name: 'loadingIndicator',
                required: !1,
                type: { name: 'ReactNode' },
              },
              loadingPosition: {
                defaultValue: { value: "'center'" },
                description:
                  'The loading indicator can be positioned on the start, end, or the center of the button.',
                name: 'loadingPosition',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"center"' },
                    { value: '"end"' },
                    { value: '"start"' },
                  ],
                },
              },
              sx: {
                defaultValue: null,
                description:
                  'The system prop that allows defining system overrides as well as additional CSS styles.',
                name: 'sx',
                required: !1,
                type: {
                  name: '((SystemCssProperties<Theme> | CSSPseudoSelectorProps<Theme> | CSSSelectorObjectOrCssVariables<Theme> | ((theme: Theme) => SystemStyleObject<...>) | readonly (boolean | ... 1 more ... | ((theme: Theme) => SystemStyleObject<...>))[]) & (SystemCssProperties<...> | ... 3 more ... | readonly (boolean | ... 1 more ... | ...',
                },
              },
              color: {
                defaultValue: { value: "'primary'" },
                description:
                  'The color of the component.\nIt supports both default and custom theme colors, which can be added as shown in the\n[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).',
                name: 'color',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"error"' },
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"info"' },
                    { value: '"success"' },
                    { value: '"warning"' },
                    { value: '"inherit"' },
                  ],
                },
              },
              children: {
                defaultValue: null,
                description: 'The content of the component.',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              disabled: {
                defaultValue: { value: 'false\nfalse' },
                description: 'If `true`, the component is disabled.',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              fullWidth: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the button will take up the full width of its container.',
                name: 'fullWidth',
                required: !1,
                type: { name: 'boolean' },
              },
              size: {
                defaultValue: { value: "'medium'" },
                description:
                  'The size of the component.\n`small` is equivalent to the dense button styling.',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"small"' },
                    { value: '"medium"' },
                    { value: '"large"' },
                  ],
                },
              },
              variant: {
                defaultValue: { value: "'text'" },
                description: 'The variant to use.',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"outlined"' },
                    { value: '"text"' },
                    { value: '"contained"' },
                  ],
                },
              },
              tabIndex: {
                defaultValue: { value: '0' },
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' },
              },
              action: {
                defaultValue: null,
                description:
                  'A ref for imperative actions.\nIt currently only supports `focusVisible()` action.',
                name: 'action',
                required: !1,
                type: { name: 'Ref<ButtonBaseActions>' },
              },
              centerRipple: {
                defaultValue: { value: 'false' },
                description:
                  "If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",
                name: 'centerRipple',
                required: !1,
                type: { name: 'boolean' },
              },
              disableRipple: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the ripple effect is disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusVisible` class.',
                name: 'disableRipple',
                required: !1,
                type: { name: 'boolean' },
              },
              disableTouchRipple: {
                defaultValue: { value: 'false' },
                description: 'If `true`, the touch ripple effect is disabled.',
                name: 'disableTouchRipple',
                required: !1,
                type: { name: 'boolean' },
              },
              focusRipple: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the base button will have a keyboard focus ripple.',
                name: 'focusRipple',
                required: !1,
                type: { name: 'boolean' },
              },
              focusVisibleClassName: {
                defaultValue: null,
                description:
                  "This prop can help identify which element has keyboard focus.\nThe class name will be applied when the element gains the focus through keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.",
                name: 'focusVisibleClassName',
                required: !1,
                type: { name: 'string' },
              },
              LinkComponent: {
                defaultValue: { value: "'a'" },
                description:
                  'The component used to render a link when the `href` prop is provided.',
                name: 'LinkComponent',
                required: !1,
                type: { name: 'ElementType<any>' },
              },
              onFocusVisible: {
                defaultValue: null,
                description:
                  'Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.',
                name: 'onFocusVisible',
                required: !1,
                type: { name: 'FocusEventHandler<any>' },
              },
              TouchRippleProps: {
                defaultValue: null,
                description: 'Props applied to the `TouchRipple` element.',
                name: 'TouchRippleProps',
                required: !1,
                type: { name: 'Partial<TouchRippleProps>' },
              },
              touchRippleRef: {
                defaultValue: null,
                description: 'A ref that points to the `TouchRipple` element.',
                name: 'touchRippleRef',
                required: !1,
                type: { name: 'Ref<TouchRippleActions>' },
              },
              disableElevation: {
                defaultValue: { value: 'false' },
                description: 'If `true`, no elevation is used.',
                name: 'disableElevation',
                required: !1,
                type: { name: 'boolean' },
              },
              disableFocusRipple: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the  keyboard focus ripple is disabled.',
                name: 'disableFocusRipple',
                required: !1,
                type: { name: 'boolean' },
              },
              endIcon: {
                defaultValue: null,
                description: 'Element placed after the children.',
                name: 'endIcon',
                required: !1,
                type: { name: 'ReactNode' },
              },
              href: {
                defaultValue: null,
                description:
                  'The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.',
                name: 'href',
                required: !1,
                type: { name: 'string' },
              },
              startIcon: {
                defaultValue: null,
                description: 'Element placed before the children.',
                name: 'startIcon',
                required: !1,
                type: { name: 'ReactNode' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/LoadingButton.tsx#LoadingButton'] = {
              docgenInfo: LoadingButton.__docgenInfo,
              name: 'LoadingButton',
              path: 'src/LoadingButton.tsx#LoadingButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
