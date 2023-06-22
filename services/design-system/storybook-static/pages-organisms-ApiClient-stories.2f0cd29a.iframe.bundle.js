'use strict';
(self.webpackChunk_cats_cradle_design_system =
  self.webpackChunk_cats_cradle_design_system || []).push([
  [20],
  {
    './stories/pages/organisms/ApiClient.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Example: () => Example,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var _src_ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/ApiClient.tsx',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Organisms/ApiClient',
          component: _src_ApiClient__WEBPACK_IMPORTED_MODULE_1__.S,
        },
        Example = args =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _src_ApiClient__WEBPACK_IMPORTED_MODULE_1__.S,
            { ...args },
          );
      (Example.displayName = 'Example'),
        (Example.args = {
          title: 'Try out the route action',
          description:
            'Select an endpoint and run query to see an API response using a sample route request.',
          url: 'https://api.aerisapi.com/forecasts/:auto?format=json&filter=day&limit=7&client_id=[CLIENT_ID]&client_secret=[CLIENT_SECRET]',
          button: [
            { label: 'Conditions', url: '', selected: !0 },
            { label: 'Forecast', url: '', selected: !0 },
            { label: 'Alerts', url: '', selected: !0 },
          ],
          submitLabel: 'Run Query',
          response:
            '{\n    "success": true,\n    "error": null,\n    "response" : [\n      {\n        "type": "Feature",\n        "id": "44.96,-93.37",\n        "geometry": {\n          "type": "Point",\n          "coordinates": [\n            -93.27,\n            44.96\n          ]\n        }\n      }\n    ]\n  }',
        }),
        (Example.parameters = {
          ...Example.parameters,
          docs: {
            ...Example.parameters?.docs,
            source: {
              originalSource: 'args => <ApiClient {...args} />',
              ...Example.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ['Example'];
      try {
        (Example.displayName = 'Example'),
          (Example.__docgenInfo = {
            description: '',
            displayName: 'Example',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/pages/organisms/ApiClient.stories.tsx#Example'
            ] = {
              docgenInfo: Example.__docgenInfo,
              name: 'Example',
              path: 'stories/pages/organisms/ApiClient.stories.tsx#Example',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/ApiClient.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { S: () => ApiClient });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Card/Card.js',
        ),
        _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/CardContent/CardContent.js',
        ),
        _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Grid/Grid.js',
        ),
        _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Stack/Stack.js',
        ),
        _Button__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./src/Button.tsx'),
        _NonInteractiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/NonInteractiveLink.tsx',
        ),
        _CodeSnippet_CodeSnippet__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./src/CodeSnippet/CodeSnippet.tsx'),
        _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './src/Typography.tsx',
        ),
        _LoadingButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './src/LoadingButton.tsx',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const ApiClient = props =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(
          _mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,
          {
            elevation: 5,
            sx: { m: 4, px: 4, py: 2, borderRadius: '12px' },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(
                _mui_material__WEBPACK_IMPORTED_MODULE_8__.Z,
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                      _Typography__WEBPACK_IMPORTED_MODULE_4__.Z,
                      {
                        paragraph: !0,
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                          'b',
                          { children: props.title },
                        ),
                      },
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                      _Typography__WEBPACK_IMPORTED_MODULE_4__.Z,
                      { paragraph: !0, children: props.description },
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                      _Typography__WEBPACK_IMPORTED_MODULE_4__.Z,
                      {
                        paragraph: !0,
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                          _NonInteractiveLink__WEBPACK_IMPORTED_MODULE_2__.d,
                          { children: props.url },
                        ),
                      },
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(
                      _mui_material__WEBPACK_IMPORTED_MODULE_9__.ZP,
                      {
                        container: !0,
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                            _mui_material__WEBPACK_IMPORTED_MODULE_9__.ZP,
                            {
                              item: !0,
                              xs: 12,
                              sm: 8,
                              spacing: 2,
                              justifyContent: 'flex-end',
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(
                                _mui_material__WEBPACK_IMPORTED_MODULE_10__.Z,
                                {
                                  sx: {
                                    flexDirection: { xs: 'column', sm: 'row' },
                                  },
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                                      _Button__WEBPACK_IMPORTED_MODULE_1__.z,
                                      {
                                        sx: { mr: { sm: 1 }, mb: 1 },
                                        size: 'small',
                                        selected: !0,
                                        children: 'Conditions',
                                      },
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                                      _Button__WEBPACK_IMPORTED_MODULE_1__.z,
                                      {
                                        sx: { mr: { sm: 1 }, mb: 1 },
                                        size: 'small',
                                        children: 'Forecasts',
                                      },
                                    ),
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                                      _Button__WEBPACK_IMPORTED_MODULE_1__.z,
                                      {
                                        sx: { mr: { sm: 1 }, mb: 1 },
                                        size: 'small',
                                        children: 'Alerts',
                                      },
                                    ),
                                  ],
                                },
                              ),
                            },
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                            _mui_material__WEBPACK_IMPORTED_MODULE_9__.ZP,
                            {
                              item: !0,
                              xs: 12,
                              sm: 4,
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                                _mui_material__WEBPACK_IMPORTED_MODULE_10__.Z,
                                {
                                  sx: {
                                    justifyContent: 'flex-end',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                  },
                                  children: (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                                    _LoadingButton__WEBPACK_IMPORTED_MODULE_5__.f,
                                    {
                                      loading: props.loading,
                                      size: 'small',
                                      color: 'primary',
                                      variant: 'contained',
                                      children: props.submitLabel,
                                    },
                                  ),
                                },
                              ),
                            },
                          ),
                        ],
                      },
                    ),
                  ],
                },
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                _mui_material__WEBPACK_IMPORTED_MODULE_8__.Z,
                {
                  sx: {
                    backgroundColor: '#102b40',
                    ml: -10,
                    mb: -5,
                    mr: -10,
                    mt: 0,
                    p: 10,
                    pt: 0,
                  },
                  children:
                    !props.loading &&
                    props.response.length > 0 &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                      _CodeSnippet_CodeSnippet__WEBPACK_IMPORTED_MODULE_3__.O,
                      {
                        data: JSON.stringify(props.response, null, 2),
                        language:
                          _CodeSnippet_CodeSnippet__WEBPACK_IMPORTED_MODULE_3__
                            .P.JSON,
                      },
                    ),
                },
              ),
            ],
          },
        );
      ApiClient.displayName = 'ApiClient';
      try {
        (ApiClient.displayName = 'ApiClient'),
          (ApiClient.__docgenInfo = {
            description: '',
            displayName: 'ApiClient',
            props: {
              loading: {
                defaultValue: null,
                description: '',
                name: 'loading',
                required: !0,
                type: { name: 'boolean' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !0,
                type: { name: 'string' },
              },
              description: {
                defaultValue: null,
                description: '',
                name: 'description',
                required: !0,
                type: { name: 'string' },
              },
              url: {
                defaultValue: null,
                description: '',
                name: 'url',
                required: !0,
                type: { name: 'string' },
              },
              response: {
                defaultValue: null,
                description: '',
                name: 'response',
                required: !0,
                type: { name: 'string' },
              },
              submitLabel: {
                defaultValue: null,
                description: '',
                name: 'submitLabel',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/ApiClient.tsx#ApiClient'] = {
              docgenInfo: ApiClient.__docgenInfo,
              name: 'ApiClient',
              path: 'src/ApiClient.tsx#ApiClient',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/Button.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { z: () => Button });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Button/Button.js',
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const Button = props => {
        const { children, ...muiProps } = props;
        return (
          (muiProps.variant = muiProps.variant ?? 'contained'),
          (muiProps.color = muiProps.color ?? 'inherit'),
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__.Z,
            {
              ...muiProps,
              style: {
                ...(props.selected && {
                  backgroundColor: '#616366',
                  color: '#FFF',
                }),
                fontFamily: 'Helvetica, arial, sans-serif',
                fontWeight: 'bold',
              },
              children,
            },
          )
        );
      };
      Button.displayName = 'Button';
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              selected: {
                defaultValue: null,
                description: '',
                name: 'selected',
                required: !1,
                type: { name: 'boolean' },
              },
              children: {
                defaultValue: null,
                description: 'The content of the component.',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              classes: {
                defaultValue: null,
                description:
                  'Override or extend the styles applied to the component.',
                name: 'classes',
                required: !1,
                type: {
                  name: '(Partial<ButtonClasses> & Partial<ClassNameMap<never>>)',
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
              disabled: {
                defaultValue: { value: 'false\nfalse' },
                description: 'If `true`, the component is disabled.',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
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
              fullWidth: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the button will take up the full width of its container.',
                name: 'fullWidth',
                required: !1,
                type: { name: 'boolean' },
              },
              href: {
                defaultValue: null,
                description:
                  'The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.',
                name: 'href',
                required: !1,
                type: { name: 'string' },
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
              startIcon: {
                defaultValue: null,
                description: 'Element placed before the children.',
                name: 'startIcon',
                required: !1,
                type: { name: 'ReactNode' },
              },
              sx: {
                defaultValue: null,
                description:
                  'The system prop that allows defining system overrides as well as additional CSS styles.',
                name: 'sx',
                required: !1,
                type: { name: 'SxProps<Theme>' },
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
            (STORYBOOK_REACT_CLASSES['src/Button.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'src/Button.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/CodeSnippet/CodeSnippet.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        O: () => CodeSnippet,
        P: () => CodeSnippetLanguages,
      });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            '../../common/temp/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.2.0/node_modules/react-syntax-highlighter/dist/esm/default-highlight.js',
          ),
        react_syntax_highlighter_dist_esm_styles_hljs_vs2015__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../common/temp/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.2.0/node_modules/react-syntax-highlighter/dist/esm/styles/hljs/vs2015.js',
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      let CodeSnippetLanguages = (function (CodeSnippetLanguages) {
        return (
          (CodeSnippetLanguages.JSON = 'json'),
          (CodeSnippetLanguages.HTML = 'html'),
          (CodeSnippetLanguages.CSS = 'css'),
          (CodeSnippetLanguages.JAVASCRIPT = 'javascript'),
          CodeSnippetLanguages
        );
      })({});
      const CodeSnippet = props => {
        const { data, language } = props;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
          children: data
            ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__.Z,
                {
                  language,
                  style:
                    react_syntax_highlighter_dist_esm_styles_hljs_vs2015__WEBPACK_IMPORTED_MODULE_3__.Z,
                  children: data,
                },
              )
            : 'Loading...',
        });
      };
      CodeSnippet.displayName = 'CodeSnippet';
      try {
        (CodeSnippet.displayName = 'CodeSnippet'),
          (CodeSnippet.__docgenInfo = {
            description: '',
            displayName: 'CodeSnippet',
            props: {
              data: {
                defaultValue: null,
                description: '',
                name: 'data',
                required: !0,
                type: { name: 'string' },
              },
              language: {
                defaultValue: null,
                description: '',
                name: 'language',
                required: !0,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"json"' },
                    { value: '"html"' },
                    { value: '"css"' },
                    { value: '"javascript"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/CodeSnippet/CodeSnippet.tsx#CodeSnippet'
            ] = {
              docgenInfo: CodeSnippet.__docgenInfo,
              name: 'CodeSnippet',
              path: 'src/CodeSnippet/CodeSnippet.tsx#CodeSnippet',
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
    './src/NonInteractiveLink.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        d: () => NonInteractiveLink,
      });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var _mui_material_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Link/Link.js',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const NonInteractiveLink = props => {
        const { children, ...muiProps } = props;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
          style: { position: 'relative', overflow: 'hidden' },
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
              style: {
                width: '40px',
                height: '100%',
                position: 'absolute',
                top: 0,
                right: 0,
                display: 'inline-block',
                overflow: 'hidden',
                background:
                  'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
              },
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _mui_material_Link__WEBPACK_IMPORTED_MODULE_2__.Z,
              {
                sx: {
                  '&:hover': { cursor: 'not-allowed' },
                  color: '#C7274E',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  fontFamily: 'Helvetica, arial, sans-serif',
                },
                ...muiProps,
                children,
              },
            ),
          ],
        });
      };
      NonInteractiveLink.displayName = 'NonInteractiveLink';
      try {
        (NonInteractiveLink.displayName = 'NonInteractiveLink'),
          (NonInteractiveLink.__docgenInfo = {
            description: '',
            displayName: 'NonInteractiveLink',
            props: {
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Width<string | number> | NonNullable<Width<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Height<string | number> | NonNullable<Height<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              margin: {
                defaultValue: null,
                description: '',
                name: 'margin',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              sx: {
                defaultValue: null,
                description:
                  'The system prop that allows defining system overrides as well as additional CSS styles.',
                name: 'sx',
                required: !1,
                type: { name: 'SxProps<Theme>' },
              },
              p: {
                defaultValue: null,
                description: '',
                name: 'p',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              border: {
                defaultValue: null,
                description: '',
                name: 'border',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<number | "red" | "hidden" | "medium" | (string & {}) | "inset" | "none" | "inherit" | "-moz-initial" | "initial" | "revert" | "revert-layer" | "unset" | "aliceblue" | "antiquewhite" | ... 184 more ...> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              boxShadow: {
                defaultValue: null,
                description: '',
                name: 'boxShadow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)',
                },
              },
              fontWeight: {
                defaultValue: null,
                description: '',
                name: 'fontWeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)',
                },
              },
              zIndex: {
                defaultValue: null,
                description: '',
                name: 'zIndex',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)',
                },
              },
              alignContent: {
                defaultValue: null,
                description: '',
                name: 'alignContent',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | AlignContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignContent>)',
                },
              },
              alignItems: {
                defaultValue: null,
                description: '',
                name: 'alignItems',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignItems>)',
                },
              },
              alignSelf: {
                defaultValue: null,
                description: '',
                name: 'alignSelf',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | AlignSelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignSelf>)',
                },
              },
              bottom: {
                defaultValue: null,
                description: '',
                name: 'bottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Bottom<string | number> | NonNullable<Bottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              boxSizing: {
                defaultValue: null,
                description: '',
                name: 'boxSizing',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BoxSizing | NonNullable<BoxSizing>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              columnGap: {
                defaultValue: null,
                description: '',
                name: 'columnGap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<ColumnGap<string | number> | NonNullable<ColumnGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              display: {
                defaultValue: null,
                description: '',
                name: 'display',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)',
                },
              },
              flexBasis: {
                defaultValue: null,
                description: '',
                name: 'flexBasis',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexBasis<string | number> | NonNullable<FlexBasis<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flexDirection: {
                defaultValue: null,
                description: '',
                name: 'flexDirection',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexDirection | NonNullable<FlexDirection>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flexGrow: {
                defaultValue: null,
                description: '',
                name: 'flexGrow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexGrow | NonNullable<FlexGrow>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flexShrink: {
                defaultValue: null,
                description: '',
                name: 'flexShrink',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexShrink | NonNullable<FlexShrink>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flexWrap: {
                defaultValue: null,
                description: '',
                name: 'flexWrap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexWrap | NonNullable<FlexWrap>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              fontFamily: {
                defaultValue: null,
                description: '',
                name: 'fontFamily',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | FontFamily> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontFamily>)',
                },
              },
              fontSize: {
                defaultValue: null,
                description: '',
                name: 'fontSize',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FontSize<string | number> | NonNullable<FontSize<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              fontStyle: {
                defaultValue: null,
                description: '',
                name: 'fontStyle',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | FontStyle> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontStyle>)',
                },
              },
              gridAutoColumns: {
                defaultValue: null,
                description: '',
                name: 'gridAutoColumns',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridAutoColumns<string | number> | NonNullable<GridAutoColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridAutoFlow: {
                defaultValue: null,
                description: '',
                name: 'gridAutoFlow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | GridAutoFlow> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridAutoFlow>)',
                },
              },
              gridAutoRows: {
                defaultValue: null,
                description: '',
                name: 'gridAutoRows',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridAutoRows<string | number> | NonNullable<GridAutoRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridTemplateAreas: {
                defaultValue: null,
                description: '',
                name: 'gridTemplateAreas',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | GridTemplateAreas> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridTemplateAreas>)',
                },
              },
              gridTemplateColumns: {
                defaultValue: null,
                description: '',
                name: 'gridTemplateColumns',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridTemplateColumns<string | number> | NonNullable<GridTemplateColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridTemplateRows: {
                defaultValue: null,
                description: '',
                name: 'gridTemplateRows',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridTemplateRows<string | number> | NonNullable<GridTemplateRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              justifyContent: {
                defaultValue: null,
                description: '',
                name: 'justifyContent',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | JustifyContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyContent>)',
                },
              },
              justifyItems: {
                defaultValue: null,
                description: '',
                name: 'justifyItems',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | JustifyItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyItems>)',
                },
              },
              justifySelf: {
                defaultValue: null,
                description: '',
                name: 'justifySelf',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | JustifySelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifySelf>)',
                },
              },
              left: {
                defaultValue: null,
                description: '',
                name: 'left',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Left<string | number> | NonNullable<Left<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              letterSpacing: {
                defaultValue: null,
                description: '',
                name: 'letterSpacing',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<LetterSpacing<string | number> | NonNullable<LetterSpacing<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              lineHeight: {
                defaultValue: null,
                description: '',
                name: 'lineHeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<LineHeight<string | number> | NonNullable<LineHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginBottom: {
                defaultValue: null,
                description: '',
                name: 'marginBottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginLeft: {
                defaultValue: null,
                description: '',
                name: 'marginLeft',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginRight: {
                defaultValue: null,
                description: '',
                name: 'marginRight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginTop: {
                defaultValue: null,
                description: '',
                name: 'marginTop',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              maxHeight: {
                defaultValue: null,
                description: '',
                name: 'maxHeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MaxHeight<string | number> | NonNullable<MaxHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              maxWidth: {
                defaultValue: null,
                description: '',
                name: 'maxWidth',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MaxWidth<string | number> | NonNullable<MaxWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              minHeight: {
                defaultValue: null,
                description: '',
                name: 'minHeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MinHeight<string | number> | NonNullable<MinHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              minWidth: {
                defaultValue: null,
                description: '',
                name: 'minWidth',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MinWidth<string | number> | NonNullable<MinWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              order: {
                defaultValue: null,
                description: '',
                name: 'order',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Order | NonNullable<Order>[]> | ((theme: Theme) => ResponsiveStyleValue<Order | NonNullable<...>[] | undefined>)',
                },
              },
              paddingBottom: {
                defaultValue: null,
                description: '',
                name: 'paddingBottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingLeft: {
                defaultValue: null,
                description: '',
                name: 'paddingLeft',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingRight: {
                defaultValue: null,
                description: '',
                name: 'paddingRight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingTop: {
                defaultValue: null,
                description: '',
                name: 'paddingTop',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              position: {
                defaultValue: null,
                description: '',
                name: 'position',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Position | NonNullable<Position>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              right: {
                defaultValue: null,
                description: '',
                name: 'right',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Right<string | number> | NonNullable<Right<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              rowGap: {
                defaultValue: null,
                description: '',
                name: 'rowGap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<RowGap<string | number> | NonNullable<RowGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              textAlign: {
                defaultValue: null,
                description: '',
                name: 'textAlign',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<TextAlign | NonNullable<TextAlign>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              textOverflow: {
                defaultValue: null,
                description: '',
                name: 'textOverflow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | TextOverflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | TextOverflow>)',
                },
              },
              textTransform: {
                defaultValue: null,
                description: '',
                name: 'textTransform',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<TextTransform | NonNullable<TextTransform>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              top: {
                defaultValue: null,
                description: '',
                name: 'top',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Top<string | number> | NonNullable<Top<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              visibility: {
                defaultValue: null,
                description: '',
                name: 'visibility',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Visibility | NonNullable<Visibility>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              whiteSpace: {
                defaultValue: null,
                description: '',
                name: 'whiteSpace',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<WhiteSpace | NonNullable<WhiteSpace>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderBottom: {
                defaultValue: null,
                description: '',
                name: 'borderBottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderBottom<string | number> | NonNullable<BorderBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderColor: {
                defaultValue: null,
                description: '',
                name: 'borderColor',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | BorderColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BorderColor>)',
                },
              },
              borderLeft: {
                defaultValue: null,
                description: '',
                name: 'borderLeft',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderLeft<string | number> | NonNullable<BorderLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderRadius: {
                defaultValue: null,
                description: '',
                name: 'borderRadius',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderRadius<string | number> | NonNullable<BorderRadius<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderRight: {
                defaultValue: null,
                description: '',
                name: 'borderRight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderRight<string | number> | NonNullable<BorderRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderTop: {
                defaultValue: null,
                description: '',
                name: 'borderTop',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderTop<string | number> | NonNullable<BorderTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flex: {
                defaultValue: null,
                description: '',
                name: 'flex',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Flex<string | number> | NonNullable<Flex<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gap: {
                defaultValue: null,
                description: '',
                name: 'gap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Gap<string | number> | NonNullable<Gap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridArea: {
                defaultValue: null,
                description: '',
                name: 'gridArea',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridArea | NonNullable<GridArea>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridColumn: {
                defaultValue: null,
                description: '',
                name: 'gridColumn',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridColumn | NonNullable<GridColumn>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridRow: {
                defaultValue: null,
                description: '',
                name: 'gridRow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | NonNullable<...>[] | undefined>)',
                },
              },
              overflow: {
                defaultValue: null,
                description: '',
                name: 'overflow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | Overflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | Overflow>)',
                },
              },
              padding: {
                defaultValue: null,
                description: '',
                name: 'padding',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              bgcolor: {
                defaultValue: null,
                description: '',
                name: 'bgcolor',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | BackgroundColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BackgroundColor>)',
                },
              },
              m: {
                defaultValue: null,
                description: '',
                name: 'm',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              mt: {
                defaultValue: null,
                description: '',
                name: 'mt',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              mr: {
                defaultValue: null,
                description: '',
                name: 'mr',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              mb: {
                defaultValue: null,
                description: '',
                name: 'mb',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              ml: {
                defaultValue: null,
                description: '',
                name: 'ml',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              mx: {
                defaultValue: null,
                description: '',
                name: 'mx',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginX: {
                defaultValue: null,
                description: '',
                name: 'marginX',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              my: {
                defaultValue: null,
                description: '',
                name: 'my',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginY: {
                defaultValue: null,
                description: '',
                name: 'marginY',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pt: {
                defaultValue: null,
                description: '',
                name: 'pt',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pr: {
                defaultValue: null,
                description: '',
                name: 'pr',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pb: {
                defaultValue: null,
                description: '',
                name: 'pb',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pl: {
                defaultValue: null,
                description: '',
                name: 'pl',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              px: {
                defaultValue: null,
                description: '',
                name: 'px',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingX: {
                defaultValue: null,
                description: '',
                name: 'paddingX',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              py: {
                defaultValue: null,
                description: '',
                name: 'py',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingY: {
                defaultValue: null,
                description: '',
                name: 'paddingY',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              typography: {
                defaultValue: null,
                description: '',
                name: 'typography',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)',
                },
              },
              displayPrint: {
                defaultValue: null,
                description: '',
                name: 'displayPrint',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)',
                },
              },
              align: {
                defaultValue: { value: "'inherit'" },
                description: 'Set the text-align on the component.',
                name: 'align',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"center"' },
                    { value: '"left"' },
                    { value: '"right"' },
                    { value: '"inherit"' },
                    { value: '"justify"' },
                  ],
                },
              },
              gutterBottom: {
                defaultValue: { value: 'false' },
                description: 'If `true`, the text will have a bottom margin.',
                name: 'gutterBottom',
                required: !1,
                type: { name: 'boolean' },
              },
              noWrap: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.\n\nNote that text overflow can only happen with block or inline-block level elements\n(the element needs to have a width in order to overflow).',
                name: 'noWrap',
                required: !1,
                type: { name: 'boolean' },
              },
              paragraph: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the element will be a paragraph element.',
                name: 'paragraph',
                required: !1,
                type: { name: 'boolean' },
              },
              variantMapping: {
                defaultValue: {
                  value:
                    "{\nh1: 'h1',\nh2: 'h2',\nh3: 'h3',\nh4: 'h4',\nh5: 'h5',\nh6: 'h6',\nsubtitle1: 'h6',\nsubtitle2: 'h6',\nbody1: 'p',\nbody2: 'p',\ninherit: 'p',\n}",
                },
                description:
                  'The component maps the variant prop to a range of different HTML element types.\nFor instance, subtitle1 to `<h6>`.\nIf you wish to change that mapping, you can provide your own.\nAlternatively, you can use the `component` prop.',
                name: 'variantMapping',
                required: !1,
                type: {
                  name: 'Partial<Record<OverridableStringUnion<"inherit" | Variant, TypographyPropsVariantOverrides>, string>>',
                },
              },
              classes: {
                defaultValue: null,
                description:
                  'Override or extend the styles applied to the component.',
                name: 'classes',
                required: !1,
                type: {
                  name: '(Partial<LinkClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              color: {
                defaultValue: { value: "'primary'" },
                description: 'The color of the link.',
                name: 'color',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | Color> | ((theme: Theme) => ResponsiveStyleValue<string[] | Color>)',
                },
              },
              TypographyClasses: {
                defaultValue: null,
                description:
                  '`classes` prop applied to the [`Typography`](/material-ui/api/typography/) element.',
                name: 'TypographyClasses',
                required: !1,
                type: {
                  name: '(Partial<TypographyClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              underline: {
                defaultValue: { value: "'always'" },
                description: 'Controls when the link should have an underline.',
                name: 'underline',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"none"' },
                    { value: '"always"' },
                    { value: '"hover"' },
                  ],
                },
              },
              variant: {
                defaultValue: { value: "'inherit'" },
                description: 'Applies the theme typography styles.',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"button"' },
                    { value: '"caption"' },
                    { value: '"h1"' },
                    { value: '"h2"' },
                    { value: '"h3"' },
                    { value: '"h4"' },
                    { value: '"h5"' },
                    { value: '"h6"' },
                    { value: '"inherit"' },
                    { value: '"overline"' },
                    { value: '"subtitle1"' },
                    { value: '"subtitle2"' },
                    { value: '"body1"' },
                    { value: '"body2"' },
                  ],
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLAnchorElement | null) => void) | RefObject<HTMLAnchorElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/NonInteractiveLink.tsx#NonInteractiveLink'
            ] = {
              docgenInfo: NonInteractiveLink.__docgenInfo,
              name: 'NonInteractiveLink',
              path: 'src/NonInteractiveLink.tsx#NonInteractiveLink',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/Typography.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => Typography });
      var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Typography/Typography.js',
      );
      const Typography = (0,
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/@mui+system@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react@18.2.0/node_modules/@mui/system/esm/styled.js',
      ).Z)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Z)(() => ({
        '&.center': { textAlign: 'center' },
        '&.MuiTypography-h1': {
          fontFamily: '"Eczar", serif',
          fontWeight: '800',
          fontSize: '2rem',
          color: 'var(--primary)',
          padding: '12px 0',
          '&.fill': {
            borderRadius: '5px',
            padding: '13px',
            color: 'var(--primary)',
          },
          '&.border': {
            fontSize: '4rem',
            width: '100%',
            position: 'relative',
            padding: { xs: '5px 0', sm: '10px 0' },
            paddingLeft: '15px',
            fontWeight: '600',
            verticalAlign: 'center',
            borderBottom: 'none',
            '&:before': {
              content: '""',
              position: 'absolute',
              width: '2px',
              height: '100%',
              top: 0,
              bottom: 0,
              left: '0',
              margin: 'auto',
              background: 'linear-gradient(180deg, #31aaff  0%, #2cd0ff 100%)',
              borderRadius: '3px',
            },
          },
        },
        '&.MuiTypography-h2': {
          fontSize: '2rem',
          color: 'var(--primary)',
          fontWeight: 'bold',
          padding: '12px 0',
          '&.border': {
            fontSize: '1.4rem',
            width: '100%',
            position: 'relative',
            padding: { xs: '5px 0', sm: '10px 0' },
            paddingLeft: '15px',
            fontWeight: '600',
            verticalAlign: 'center',
            borderBottom: 'none',
            '&:before': {
              content: '""',
              position: 'absolute',
              width: '2px',
              height: '100%',
              top: 0,
              bottom: 0,
              left: '0',
              margin: 'auto',
              background: 'linear-gradient(180deg, #31aaff  0%, #2cd0ff 100%)',
              borderRadius: '3px',
            },
          },
          '&.fill': {
            borderRadius: '5px',
            padding: '20px 13px',
            color: 'var(--primary)',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            borderBottom: 'none',
          },
        },
        '&.MuiTypography-h3': {
          fontFamily: 'Helvetica,Arial,sans-serif',
          fontWeight: '400',
          fontSize: '1.05rem',
        },
        '&.MuiTypography-h4': {
          fontFamily: 'Helvetica,Arial,sans-serif',
          fontWeight: '400',
          fontSize: '1rem',
        },
        '&.MuiTypography-h5': {
          fontFamily: 'Helvetica,Arial,sans-serif',
          fontWeight: '400',
          fontSize: '1rem',
        },
        '&.MuiTypography-h6': {
          fontFamily: 'Helvetica,Arial,sans-serif',
          fontWeight: '400',
          fontSize: '1rem',
        },
        '&.MuiTypography-body1': {
          fontFamily: 'Helvetica,Arial,sans-serif',
          fontWeight: '400',
          fontSize: '1rem',
        },
      }));
      try {
        (Typography.displayName = 'Typography'),
          (Typography.__docgenInfo = {
            description: '',
            displayName: 'Typography',
            props: {
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Width<string | number> | NonNullable<Width<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Height<string | number> | NonNullable<Height<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | Color> | ((theme: Theme) => ResponsiveStyleValue<string[] | Color>)',
                },
              },
              margin: {
                defaultValue: null,
                description: '',
                name: 'margin',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              p: {
                defaultValue: null,
                description: '',
                name: 'p',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              border: {
                defaultValue: null,
                description: '',
                name: 'border',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<number | "red" | "hidden" | "medium" | (string & {}) | "inset" | "none" | "inherit" | "-moz-initial" | "initial" | "revert" | "revert-layer" | "unset" | "aliceblue" | "antiquewhite" | ... 184 more ...> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              boxShadow: {
                defaultValue: null,
                description: '',
                name: 'boxShadow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)',
                },
              },
              fontWeight: {
                defaultValue: null,
                description: '',
                name: 'fontWeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)',
                },
              },
              zIndex: {
                defaultValue: null,
                description: '',
                name: 'zIndex',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)',
                },
              },
              alignContent: {
                defaultValue: null,
                description: '',
                name: 'alignContent',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | AlignContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignContent>)',
                },
              },
              alignItems: {
                defaultValue: null,
                description: '',
                name: 'alignItems',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignItems>)',
                },
              },
              alignSelf: {
                defaultValue: null,
                description: '',
                name: 'alignSelf',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | AlignSelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignSelf>)',
                },
              },
              bottom: {
                defaultValue: null,
                description: '',
                name: 'bottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Bottom<string | number> | NonNullable<Bottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              boxSizing: {
                defaultValue: null,
                description: '',
                name: 'boxSizing',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BoxSizing | NonNullable<BoxSizing>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              columnGap: {
                defaultValue: null,
                description: '',
                name: 'columnGap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<ColumnGap<string | number> | NonNullable<ColumnGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              display: {
                defaultValue: null,
                description: '',
                name: 'display',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)',
                },
              },
              flexBasis: {
                defaultValue: null,
                description: '',
                name: 'flexBasis',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexBasis<string | number> | NonNullable<FlexBasis<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flexDirection: {
                defaultValue: null,
                description: '',
                name: 'flexDirection',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexDirection | NonNullable<FlexDirection>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flexGrow: {
                defaultValue: null,
                description: '',
                name: 'flexGrow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexGrow | NonNullable<FlexGrow>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flexShrink: {
                defaultValue: null,
                description: '',
                name: 'flexShrink',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexShrink | NonNullable<FlexShrink>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flexWrap: {
                defaultValue: null,
                description: '',
                name: 'flexWrap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexWrap | NonNullable<FlexWrap>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              fontFamily: {
                defaultValue: null,
                description: '',
                name: 'fontFamily',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | FontFamily> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontFamily>)',
                },
              },
              fontSize: {
                defaultValue: null,
                description: '',
                name: 'fontSize',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FontSize<string | number> | NonNullable<FontSize<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              fontStyle: {
                defaultValue: null,
                description: '',
                name: 'fontStyle',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | FontStyle> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontStyle>)',
                },
              },
              gridAutoColumns: {
                defaultValue: null,
                description: '',
                name: 'gridAutoColumns',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridAutoColumns<string | number> | NonNullable<GridAutoColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridAutoFlow: {
                defaultValue: null,
                description: '',
                name: 'gridAutoFlow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | GridAutoFlow> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridAutoFlow>)',
                },
              },
              gridAutoRows: {
                defaultValue: null,
                description: '',
                name: 'gridAutoRows',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridAutoRows<string | number> | NonNullable<GridAutoRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridTemplateAreas: {
                defaultValue: null,
                description: '',
                name: 'gridTemplateAreas',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | GridTemplateAreas> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridTemplateAreas>)',
                },
              },
              gridTemplateColumns: {
                defaultValue: null,
                description: '',
                name: 'gridTemplateColumns',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridTemplateColumns<string | number> | NonNullable<GridTemplateColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridTemplateRows: {
                defaultValue: null,
                description: '',
                name: 'gridTemplateRows',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridTemplateRows<string | number> | NonNullable<GridTemplateRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              justifyContent: {
                defaultValue: null,
                description: '',
                name: 'justifyContent',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | JustifyContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyContent>)',
                },
              },
              justifyItems: {
                defaultValue: null,
                description: '',
                name: 'justifyItems',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | JustifyItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyItems>)',
                },
              },
              justifySelf: {
                defaultValue: null,
                description: '',
                name: 'justifySelf',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | JustifySelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifySelf>)',
                },
              },
              left: {
                defaultValue: null,
                description: '',
                name: 'left',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Left<string | number> | NonNullable<Left<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              letterSpacing: {
                defaultValue: null,
                description: '',
                name: 'letterSpacing',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<LetterSpacing<string | number> | NonNullable<LetterSpacing<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              lineHeight: {
                defaultValue: null,
                description: '',
                name: 'lineHeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<LineHeight<string | number> | NonNullable<LineHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginBottom: {
                defaultValue: null,
                description: '',
                name: 'marginBottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginLeft: {
                defaultValue: null,
                description: '',
                name: 'marginLeft',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginRight: {
                defaultValue: null,
                description: '',
                name: 'marginRight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginTop: {
                defaultValue: null,
                description: '',
                name: 'marginTop',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              maxHeight: {
                defaultValue: null,
                description: '',
                name: 'maxHeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MaxHeight<string | number> | NonNullable<MaxHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              maxWidth: {
                defaultValue: null,
                description: '',
                name: 'maxWidth',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MaxWidth<string | number> | NonNullable<MaxWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              minHeight: {
                defaultValue: null,
                description: '',
                name: 'minHeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MinHeight<string | number> | NonNullable<MinHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              minWidth: {
                defaultValue: null,
                description: '',
                name: 'minWidth',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MinWidth<string | number> | NonNullable<MinWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              order: {
                defaultValue: null,
                description: '',
                name: 'order',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Order | NonNullable<Order>[]> | ((theme: Theme) => ResponsiveStyleValue<Order | NonNullable<...>[] | undefined>)',
                },
              },
              paddingBottom: {
                defaultValue: null,
                description: '',
                name: 'paddingBottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingLeft: {
                defaultValue: null,
                description: '',
                name: 'paddingLeft',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingRight: {
                defaultValue: null,
                description: '',
                name: 'paddingRight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingTop: {
                defaultValue: null,
                description: '',
                name: 'paddingTop',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              position: {
                defaultValue: null,
                description: '',
                name: 'position',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Position | NonNullable<Position>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              right: {
                defaultValue: null,
                description: '',
                name: 'right',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Right<string | number> | NonNullable<Right<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              rowGap: {
                defaultValue: null,
                description: '',
                name: 'rowGap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<RowGap<string | number> | NonNullable<RowGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              textAlign: {
                defaultValue: null,
                description: '',
                name: 'textAlign',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<TextAlign | NonNullable<TextAlign>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              textOverflow: {
                defaultValue: null,
                description: '',
                name: 'textOverflow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | TextOverflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | TextOverflow>)',
                },
              },
              textTransform: {
                defaultValue: null,
                description: '',
                name: 'textTransform',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<TextTransform | NonNullable<TextTransform>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              top: {
                defaultValue: null,
                description: '',
                name: 'top',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Top<string | number> | NonNullable<Top<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              visibility: {
                defaultValue: null,
                description: '',
                name: 'visibility',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Visibility | NonNullable<Visibility>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              whiteSpace: {
                defaultValue: null,
                description: '',
                name: 'whiteSpace',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<WhiteSpace | NonNullable<WhiteSpace>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderBottom: {
                defaultValue: null,
                description: '',
                name: 'borderBottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderBottom<string | number> | NonNullable<BorderBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderColor: {
                defaultValue: null,
                description: '',
                name: 'borderColor',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | BorderColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BorderColor>)',
                },
              },
              borderLeft: {
                defaultValue: null,
                description: '',
                name: 'borderLeft',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderLeft<string | number> | NonNullable<BorderLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderRadius: {
                defaultValue: null,
                description: '',
                name: 'borderRadius',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderRadius<string | number> | NonNullable<BorderRadius<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderRight: {
                defaultValue: null,
                description: '',
                name: 'borderRight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderRight<string | number> | NonNullable<BorderRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderTop: {
                defaultValue: null,
                description: '',
                name: 'borderTop',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderTop<string | number> | NonNullable<BorderTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flex: {
                defaultValue: null,
                description: '',
                name: 'flex',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Flex<string | number> | NonNullable<Flex<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gap: {
                defaultValue: null,
                description: '',
                name: 'gap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Gap<string | number> | NonNullable<Gap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridArea: {
                defaultValue: null,
                description: '',
                name: 'gridArea',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridArea | NonNullable<GridArea>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridColumn: {
                defaultValue: null,
                description: '',
                name: 'gridColumn',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridColumn | NonNullable<GridColumn>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridRow: {
                defaultValue: null,
                description: '',
                name: 'gridRow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | NonNullable<...>[] | undefined>)',
                },
              },
              overflow: {
                defaultValue: null,
                description: '',
                name: 'overflow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | Overflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | Overflow>)',
                },
              },
              padding: {
                defaultValue: null,
                description: '',
                name: 'padding',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              bgcolor: {
                defaultValue: null,
                description: '',
                name: 'bgcolor',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | BackgroundColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BackgroundColor>)',
                },
              },
              m: {
                defaultValue: null,
                description: '',
                name: 'm',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              mt: {
                defaultValue: null,
                description: '',
                name: 'mt',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              mr: {
                defaultValue: null,
                description: '',
                name: 'mr',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              mb: {
                defaultValue: null,
                description: '',
                name: 'mb',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              ml: {
                defaultValue: null,
                description: '',
                name: 'ml',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              mx: {
                defaultValue: null,
                description: '',
                name: 'mx',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginX: {
                defaultValue: null,
                description: '',
                name: 'marginX',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              my: {
                defaultValue: null,
                description: '',
                name: 'my',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginY: {
                defaultValue: null,
                description: '',
                name: 'marginY',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pt: {
                defaultValue: null,
                description: '',
                name: 'pt',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pr: {
                defaultValue: null,
                description: '',
                name: 'pr',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pb: {
                defaultValue: null,
                description: '',
                name: 'pb',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pl: {
                defaultValue: null,
                description: '',
                name: 'pl',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              px: {
                defaultValue: null,
                description: '',
                name: 'px',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingX: {
                defaultValue: null,
                description: '',
                name: 'paddingX',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              py: {
                defaultValue: null,
                description: '',
                name: 'py',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingY: {
                defaultValue: null,
                description: '',
                name: 'paddingY',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              typography: {
                defaultValue: null,
                description: '',
                name: 'typography',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)',
                },
              },
              displayPrint: {
                defaultValue: null,
                description: '',
                name: 'displayPrint',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)',
                },
              },
              align: {
                defaultValue: { value: "'inherit'" },
                description: 'Set the text-align on the component.',
                name: 'align',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"center"' },
                    { value: '"left"' },
                    { value: '"right"' },
                    { value: '"inherit"' },
                    { value: '"justify"' },
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
              classes: {
                defaultValue: null,
                description:
                  'Override or extend the styles applied to the component.',
                name: 'classes',
                required: !1,
                type: {
                  name: '(Partial<TypographyClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              gutterBottom: {
                defaultValue: { value: 'false' },
                description: 'If `true`, the text will have a bottom margin.',
                name: 'gutterBottom',
                required: !1,
                type: { name: 'boolean' },
              },
              noWrap: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.\n\nNote that text overflow can only happen with block or inline-block level elements\n(the element needs to have a width in order to overflow).',
                name: 'noWrap',
                required: !1,
                type: { name: 'boolean' },
              },
              paragraph: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the element will be a paragraph element.',
                name: 'paragraph',
                required: !1,
                type: { name: 'boolean' },
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
              variant: {
                defaultValue: { value: "'body1'" },
                description: 'Applies the theme typography styles.',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"button"' },
                    { value: '"caption"' },
                    { value: '"h1"' },
                    { value: '"h2"' },
                    { value: '"h3"' },
                    { value: '"h4"' },
                    { value: '"h5"' },
                    { value: '"h6"' },
                    { value: '"inherit"' },
                    { value: '"overline"' },
                    { value: '"subtitle1"' },
                    { value: '"subtitle2"' },
                    { value: '"body1"' },
                    { value: '"body2"' },
                  ],
                },
              },
              variantMapping: {
                defaultValue: {
                  value:
                    "{\nh1: 'h1',\nh2: 'h2',\nh3: 'h3',\nh4: 'h4',\nh5: 'h5',\nh6: 'h6',\nsubtitle1: 'h6',\nsubtitle2: 'h6',\nbody1: 'p',\nbody2: 'p',\ninherit: 'p',\n}",
                },
                description:
                  'The component maps the variant prop to a range of different HTML element types.\nFor instance, subtitle1 to `<h6>`.\nIf you wish to change that mapping, you can provide your own.\nAlternatively, you can use the `component` prop.',
                name: 'variantMapping',
                required: !1,
                type: {
                  name: 'Partial<Record<OverridableStringUnion<"inherit" | Variant, TypographyPropsVariantOverrides>, string>>',
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Typography.tsx#Typography'] = {
              docgenInfo: Typography.__docgenInfo,
              name: 'Typography',
              path: 'src/Typography.tsx#Typography',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
