'use strict';
(self.webpackChunk_cats_cradle_design_system =
  self.webpackChunk_cats_cradle_design_system || []).push([
  [752],
  {
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
    './src/Checkbox.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        X: () => src_Checkbox_Checkbox,
      });
      var react = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
        ),
        objectWithoutPropertiesLoose = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js',
        ),
        esm_extends = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/extends.js',
        ),
        clsx_m = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js',
        ),
        composeClasses = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js',
        ),
        colorManipulator = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+system@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react@18.2.0/node_modules/@mui/system/esm/colorManipulator.js',
        ),
        capitalize = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/capitalize.js',
        ),
        styled = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js',
        ),
        useControlled = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/useControlled.js',
        ),
        useFormControl = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormControl/useFormControl.js',
        ),
        ButtonBase = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ButtonBase/ButtonBase.js',
        ),
        generateUtilityClasses = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js',
        ),
        generateUtilityClass = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js',
        );
      function getSwitchBaseUtilityClass(slot) {
        return (0, generateUtilityClass.Z)('PrivateSwitchBase', slot);
      }
      (0, generateUtilityClasses.Z)('PrivateSwitchBase', [
        'root',
        'checked',
        'disabled',
        'input',
        'edgeStart',
        'edgeEnd',
      ]);
      var jsx_runtime = __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
      );
      const _excluded = [
          'autoFocus',
          'checked',
          'checkedIcon',
          'className',
          'defaultChecked',
          'disabled',
          'disableFocusRipple',
          'edge',
          'icon',
          'id',
          'inputProps',
          'inputRef',
          'name',
          'onBlur',
          'onChange',
          'onFocus',
          'readOnly',
          'required',
          'tabIndex',
          'type',
          'value',
        ],
        SwitchBaseRoot = (0, styled.ZP)(ButtonBase.Z)(({ ownerState }) =>
          (0, esm_extends.Z)(
            { padding: 9, borderRadius: '50%' },
            'start' === ownerState.edge && {
              marginLeft: 'small' === ownerState.size ? -3 : -12,
            },
            'end' === ownerState.edge && {
              marginRight: 'small' === ownerState.size ? -3 : -12,
            },
          ),
        ),
        SwitchBaseInput = (0, styled.ZP)('input')({
          cursor: 'inherit',
          position: 'absolute',
          opacity: 0,
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: 1,
        }),
        internal_SwitchBase = react.forwardRef(function SwitchBase(props, ref) {
          const {
              autoFocus,
              checked: checkedProp,
              checkedIcon,
              className,
              defaultChecked,
              disabled: disabledProp,
              disableFocusRipple = !1,
              edge = !1,
              icon,
              id,
              inputProps,
              inputRef,
              name,
              onBlur,
              onChange,
              onFocus,
              readOnly,
              required = !1,
              tabIndex,
              type,
              value,
            } = props,
            other = (0, objectWithoutPropertiesLoose.Z)(props, _excluded),
            [checked, setCheckedState] = (0, useControlled.Z)({
              controlled: checkedProp,
              default: Boolean(defaultChecked),
              name: 'SwitchBase',
              state: 'checked',
            }),
            muiFormControl = (0, useFormControl.Z)();
          let disabled = disabledProp;
          muiFormControl &&
            void 0 === disabled &&
            (disabled = muiFormControl.disabled);
          const hasLabelFor = 'checkbox' === type || 'radio' === type,
            ownerState = (0, esm_extends.Z)({}, props, {
              checked,
              disabled,
              disableFocusRipple,
              edge,
            }),
            classes = (ownerState => {
              const { classes, checked, disabled, edge } = ownerState,
                slots = {
                  root: [
                    'root',
                    checked && 'checked',
                    disabled && 'disabled',
                    edge && `edge${(0, capitalize.Z)(edge)}`,
                  ],
                  input: ['input'],
                };
              return (0, composeClasses.Z)(
                slots,
                getSwitchBaseUtilityClass,
                classes,
              );
            })(ownerState);
          return (0, jsx_runtime.jsxs)(
            SwitchBaseRoot,
            (0, esm_extends.Z)(
              {
                component: 'span',
                className: (0, clsx_m.Z)(classes.root, className),
                centerRipple: !0,
                focusRipple: !disableFocusRipple,
                disabled,
                tabIndex: null,
                role: void 0,
                onFocus: event => {
                  onFocus && onFocus(event),
                    muiFormControl &&
                      muiFormControl.onFocus &&
                      muiFormControl.onFocus(event);
                },
                onBlur: event => {
                  onBlur && onBlur(event),
                    muiFormControl &&
                      muiFormControl.onBlur &&
                      muiFormControl.onBlur(event);
                },
                ownerState,
                ref,
              },
              other,
              {
                children: [
                  (0, jsx_runtime.jsx)(
                    SwitchBaseInput,
                    (0, esm_extends.Z)(
                      {
                        autoFocus,
                        checked: checkedProp,
                        defaultChecked,
                        className: classes.input,
                        disabled,
                        id: hasLabelFor ? id : void 0,
                        name,
                        onChange: event => {
                          if (event.nativeEvent.defaultPrevented) return;
                          const newChecked = event.target.checked;
                          setCheckedState(newChecked),
                            onChange && onChange(event, newChecked);
                        },
                        readOnly,
                        ref: inputRef,
                        required,
                        ownerState,
                        tabIndex,
                        type,
                      },
                      'checkbox' === type && void 0 === value ? {} : { value },
                      inputProps,
                    ),
                  ),
                  checked ? checkedIcon : icon,
                ],
              },
            ),
          );
        });
      var createSvgIcon = __webpack_require__(
        '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/createSvgIcon.js',
      );
      const CheckBoxOutlineBlank = (0, createSvgIcon.Z)(
          (0, jsx_runtime.jsx)('path', {
            d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
          }),
          'CheckBoxOutlineBlank',
        ),
        CheckBox = (0, createSvgIcon.Z)(
          (0, jsx_runtime.jsx)('path', {
            d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
          }),
          'CheckBox',
        ),
        IndeterminateCheckBox = (0, createSvgIcon.Z)(
          (0, jsx_runtime.jsx)('path', {
            d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z',
          }),
          'IndeterminateCheckBox',
        );
      var useThemeProps = __webpack_require__(
        '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useThemeProps.js',
      );
      function getCheckboxUtilityClass(slot) {
        return (0, generateUtilityClass.Z)('MuiCheckbox', slot);
      }
      const Checkbox_checkboxClasses = (0, generateUtilityClasses.Z)(
          'MuiCheckbox',
          [
            'root',
            'checked',
            'disabled',
            'indeterminate',
            'colorPrimary',
            'colorSecondary',
          ],
        ),
        Checkbox_excluded = [
          'checkedIcon',
          'color',
          'icon',
          'indeterminate',
          'indeterminateIcon',
          'inputProps',
          'size',
          'className',
        ],
        CheckboxRoot = (0, styled.ZP)(internal_SwitchBase, {
          shouldForwardProp: prop => (0, styled.FO)(prop) || 'classes' === prop,
          name: 'MuiCheckbox',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const { ownerState } = props;
            return [
              styles.root,
              ownerState.indeterminate && styles.indeterminate,
              'default' !== ownerState.color &&
                styles[`color${(0, capitalize.Z)(ownerState.color)}`],
            ];
          },
        })(({ theme, ownerState }) =>
          (0, esm_extends.Z)(
            { color: (theme.vars || theme).palette.text.secondary },
            !ownerState.disableRipple && {
              '&:hover': {
                backgroundColor: theme.vars
                  ? `rgba(${
                      'default' === ownerState.color
                        ? theme.vars.palette.action.activeChannel
                        : theme.vars.palette.primary.mainChannel
                    } / ${theme.vars.palette.action.hoverOpacity})`
                  : (0, colorManipulator.Fq)(
                      'default' === ownerState.color
                        ? theme.palette.action.active
                        : theme.palette[ownerState.color].main,
                      theme.palette.action.hoverOpacity,
                    ),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            },
            'default' !== ownerState.color && {
              [`&.${Checkbox_checkboxClasses.checked}, &.${Checkbox_checkboxClasses.indeterminate}`]:
                { color: (theme.vars || theme).palette[ownerState.color].main },
              [`&.${Checkbox_checkboxClasses.disabled}`]: {
                color: (theme.vars || theme).palette.action.disabled,
              },
            },
          ),
        ),
        defaultCheckedIcon = (0, jsx_runtime.jsx)(CheckBox, {}),
        defaultIcon = (0, jsx_runtime.jsx)(CheckBoxOutlineBlank, {}),
        defaultIndeterminateIcon = (0, jsx_runtime.jsx)(
          IndeterminateCheckBox,
          {},
        ),
        Checkbox_Checkbox = react.forwardRef(function Checkbox(inProps, ref) {
          var _icon$props$fontSize, _indeterminateIcon$pr;
          const props = (0, useThemeProps.Z)({
              props: inProps,
              name: 'MuiCheckbox',
            }),
            {
              checkedIcon = defaultCheckedIcon,
              color = 'primary',
              icon: iconProp = defaultIcon,
              indeterminate = !1,
              indeterminateIcon:
                indeterminateIconProp = defaultIndeterminateIcon,
              inputProps,
              size = 'medium',
              className,
            } = props,
            other = (0, objectWithoutPropertiesLoose.Z)(
              props,
              Checkbox_excluded,
            ),
            icon = indeterminate ? indeterminateIconProp : iconProp,
            indeterminateIcon = indeterminate
              ? indeterminateIconProp
              : checkedIcon,
            ownerState = (0, esm_extends.Z)({}, props, {
              color,
              indeterminate,
              size,
            }),
            classes = (ownerState => {
              const { classes, indeterminate, color } = ownerState,
                slots = {
                  root: [
                    'root',
                    indeterminate && 'indeterminate',
                    `color${(0, capitalize.Z)(color)}`,
                  ],
                },
                composedClasses = (0, composeClasses.Z)(
                  slots,
                  getCheckboxUtilityClass,
                  classes,
                );
              return (0, esm_extends.Z)({}, classes, composedClasses);
            })(ownerState);
          return (0,
          jsx_runtime.jsx)(CheckboxRoot, (0, esm_extends.Z)({ type: 'checkbox', inputProps: (0, esm_extends.Z)({ 'data-indeterminate': indeterminate }, inputProps), icon: react.cloneElement(icon, { fontSize: null != (_icon$props$fontSize = icon.props.fontSize) ? _icon$props$fontSize : size }), checkedIcon: react.cloneElement(indeterminateIcon, { fontSize: null != (_indeterminateIcon$pr = indeterminateIcon.props.fontSize) ? _indeterminateIcon$pr : size }), ownerState, ref, className: (0, clsx_m.Z)(classes.root, className) }, other, { classes }));
        }),
        src_Checkbox_Checkbox = props => {
          const { ...muiProps } = props;
          return (0, jsx_runtime.jsx)(Checkbox_Checkbox, { ...muiProps });
        };
      src_Checkbox_Checkbox.displayName = 'Checkbox';
      try {
        (src_Checkbox_Checkbox.displayName = 'Checkbox'),
          (src_Checkbox_Checkbox.__docgenInfo = {
            description: '',
            displayName: 'Checkbox',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null',
                },
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
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Checkbox.tsx#Checkbox'] = {
              docgenInfo: src_Checkbox_Checkbox.__docgenInfo,
              name: 'Checkbox',
              path: 'src/Checkbox.tsx#Checkbox',
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
    './src/FileUpload.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { p: () => FileUpload });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
      );
      const FileUpload = ({ setFile }) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('input', {
          name: 'file',
          type: 'file',
          onChange: e => {},
        });
      FileUpload.displayName = 'FileUpload';
      try {
        (FileUpload.displayName = 'FileUpload'),
          (FileUpload.__docgenInfo = {
            description: '',
            displayName: 'FileUpload',
            props: {
              setFile: {
                defaultValue: null,
                description: '',
                name: 'setFile',
                required: !0,
                type: { name: '(file: string) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/FileUpload.tsx#FileUpload'] = {
              docgenInfo: FileUpload.__docgenInfo,
              name: 'FileUpload',
              path: 'src/FileUpload.tsx#FileUpload',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/Layout.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Kq: () => Stack,
        ck: () => Item,
        xu: () => Box,
      });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js',
        ),
        _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Stack/Stack.js',
        ),
        _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Grid/Grid.js',
        ),
        _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Paper/Paper.js',
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/styled-components@5.3.11_react-dom@18.2.0_react-is@18.2.0_react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const Stack = props => {
        const { children, ...muiProps } = props;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...muiProps, children },
        );
      };
      Stack.displayName = 'Stack';
      const Box = props => {
        const { children, ...muiProps } = props;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.Z,
          { ...muiProps, children },
        );
      };
      Box.displayName = 'Box';
      const Grid = props => {
        const { children, ...muiProps } = props;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__.ZP,
          { ...muiProps, children },
        );
      };
      Grid.displayName = 'Grid';
      const Paper = props => {
        const { children, ...muiProps } = props;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__.Z,
          { ...muiProps, children },
        );
      };
      Paper.displayName = 'Paper';
      const Item = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
        Paper,
      )`
  padding: 0.5rem;
  font-family: 'Eczar', serif;
`;
      try {
        (Stack.displayName = 'Stack'),
          (Stack.__docgenInfo = {
            description: '',
            displayName: 'Stack',
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
              children: {
                defaultValue: null,
                description: 'The content of the component.',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              direction: {
                defaultValue: { value: "'column'" },
                description:
                  'Defines the `flex-direction` style property.\nIt is applied for all screen sizes.',
                name: 'direction',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<"row" | "column" | "column-reverse" | "row-reverse">',
                },
              },
              spacing: {
                defaultValue: { value: '0' },
                description: 'Defines the space between immediate children.',
                name: 'spacing',
                required: !1,
                type: { name: 'ResponsiveStyleValue<string | number>' },
              },
              divider: {
                defaultValue: null,
                description: 'Add an element between each child.',
                name: 'divider',
                required: !1,
                type: { name: 'ReactNode' },
              },
              useFlexGap: {
                defaultValue: { value: 'false' },
                description:
                  "If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.\n\nWhile CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),\nit is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.\n\nTo enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.",
                name: 'useFlexGap',
                required: !1,
                type: { name: 'boolean' },
              },
              sx: {
                defaultValue: null,
                description:
                  'The system prop, which allows defining system overrides as well as additional CSS styles.',
                name: 'sx',
                required: !1,
                type: { name: 'SxProps<Theme>' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Layout.tsx#Stack'] = {
              docgenInfo: Stack.__docgenInfo,
              name: 'Stack',
              path: 'src/Layout.tsx#Stack',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Box.displayName = 'Box'),
          (Box.__docgenInfo = {
            description: '',
            displayName: 'Box',
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
              component: {
                defaultValue: null,
                description:
                  'The component used for the root node.\nEither a string to use a HTML element or a component.',
                name: 'component',
                required: !1,
                type: { name: 'ElementType<any>' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: { name: 'Ref<unknown>' },
              },
              sx: {
                defaultValue: null,
                description:
                  'The system prop that allows defining system overrides as well as additional CSS styles.',
                name: 'sx',
                required: !1,
                type: { name: 'SxProps<Theme>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Layout.tsx#Box'] = {
              docgenInfo: Box.__docgenInfo,
              name: 'Box',
              path: 'src/Layout.tsx#Box',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Grid.displayName = 'Grid'),
          (Grid.__docgenInfo = {
            description: '',
            displayName: 'Grid',
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
                  name: '(Partial<GridClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              columns: {
                defaultValue: { value: '12' },
                description: 'The number of columns.',
                name: 'columns',
                required: !1,
                type: { name: 'ResponsiveStyleValue<number>' },
              },
              columnSpacing: {
                defaultValue: null,
                description:
                  'Defines the horizontal space between the type `item` components.\nIt overrides the value of the `spacing` prop.',
                name: 'columnSpacing',
                required: !1,
                type: { name: 'ResponsiveStyleValue<GridSpacing>' },
              },
              container: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the component will have the flex *container* behavior.\nYou should be wrapping *items* with a *container*.',
                name: 'container',
                required: !1,
                type: { name: 'boolean' },
              },
              direction: {
                defaultValue: { value: "'row'" },
                description:
                  'Defines the `flex-direction` style property.\nIt is applied for all screen sizes.',
                name: 'direction',
                required: !1,
                type: { name: 'ResponsiveStyleValue<GridDirection>' },
              },
              item: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the component will have the flex *item* behavior.\nYou should be wrapping *items* with a *container*.',
                name: 'item',
                required: !1,
                type: { name: 'boolean' },
              },
              rowSpacing: {
                defaultValue: null,
                description:
                  'Defines the vertical space between the type `item` components.\nIt overrides the value of the `spacing` prop.',
                name: 'rowSpacing',
                required: !1,
                type: { name: 'ResponsiveStyleValue<GridSpacing>' },
              },
              spacing: {
                defaultValue: { value: '0' },
                description:
                  'Defines the space between the type `item` components.\nIt can only be used on a type `container` component.',
                name: 'spacing',
                required: !1,
                type: { name: 'ResponsiveStyleValue<GridSpacing>' },
              },
              sx: {
                defaultValue: null,
                description:
                  'The system prop that allows defining system overrides as well as additional CSS styles.',
                name: 'sx',
                required: !1,
                type: { name: 'SxProps<Theme>' },
              },
              wrap: {
                defaultValue: { value: "'wrap'" },
                description:
                  "Defines the `flex-wrap` style property.\nIt's applied for all screen sizes.",
                name: 'wrap',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"nowrap"' },
                    { value: '"wrap"' },
                    { value: '"wrap-reverse"' },
                  ],
                },
              },
              zeroMinWidth: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, it sets `min-width: 0` on the item.\nRefer to the limitations section of the documentation to better understand the use case.',
                name: 'zeroMinWidth',
                required: !1,
                type: { name: 'boolean' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Layout.tsx#Grid'] = {
              docgenInfo: Grid.__docgenInfo,
              name: 'Grid',
              path: 'src/Layout.tsx#Grid',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Paper.displayName = 'Paper'),
          (Paper.__docgenInfo = {
            description: '',
            displayName: 'Paper',
            props: {
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
                  name: '(Partial<PaperClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              elevation: {
                defaultValue: { value: '1' },
                description:
                  'Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 24 inclusive.',
                name: 'elevation',
                required: !1,
                type: { name: 'number' },
              },
              square: {
                defaultValue: { value: 'false' },
                description: 'If `true`, rounded corners are disabled.',
                name: 'square',
                required: !1,
                type: { name: 'boolean' },
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
                defaultValue: { value: "'elevation'" },
                description: 'The variant to use.',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"outlined"' }, { value: '"elevation"' }],
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Layout.tsx#Paper'] = {
              docgenInfo: Paper.__docgenInfo,
              name: 'Paper',
              path: 'src/Layout.tsx#Paper',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Item.displayName = 'Item'),
          (Item.__docgenInfo = {
            description: '',
            displayName: 'Item',
            props: {
              classes: {
                defaultValue: null,
                description:
                  'Override or extend the styles applied to the component.',
                name: 'classes',
                required: !1,
                type: {
                  name: '(Partial<PaperClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              children: {
                defaultValue: null,
                description: 'The content of the component.',
                name: 'children',
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
                defaultValue: { value: "'elevation'" },
                description: 'The variant to use.',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"outlined"' }, { value: '"elevation"' }],
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
              square: {
                defaultValue: { value: 'false' },
                description: 'If `true`, rounded corners are disabled.',
                name: 'square',
                required: !1,
                type: { name: 'boolean' },
              },
              elevation: {
                defaultValue: { value: '1' },
                description:
                  'Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 24 inclusive.',
                name: 'elevation',
                required: !1,
                type: { name: 'number' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'any' },
              },
              as: {
                defaultValue: null,
                description: '',
                name: 'as',
                required: !1,
                type: { name: 'undefined' },
              },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Layout.tsx#Item'] = {
              docgenInfo: Item.__docgenInfo,
              name: 'Item',
              path: 'src/Layout.tsx#Item',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/Link.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { r: () => Link });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var _mui_material_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Link/Link.js',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const Link = props => {
        const { children, ...muiProps } = props;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _mui_material_Link__WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...muiProps, children },
        );
      };
      Link.displayName = 'Link';
      try {
        (Link.displayName = 'Link'),
          (Link.__docgenInfo = {
            description: '',
            displayName: 'Link',
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
            (STORYBOOK_REACT_CLASSES['src/Link.tsx#Link'] = {
              docgenInfo: Link.__docgenInfo,
              name: 'Link',
              path: 'src/Link.tsx#Link',
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
    './src/Spinner.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { $: () => Spinner });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/CircularProgress/CircularProgress.js',
          ),
        _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const Spinner = () =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
          _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            sx: {
              display: 'flex',
              height: '100vh',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('h2', {
                children: 'Loading ...',
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3__.Z,
                { size: 80, thickness: 4, sx: { mt: 4 } },
              ),
            ],
          },
        );
      Spinner.displayName = 'Spinner';
    },
    './src/TextField.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { n: () => TextField });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TextField/TextField.js',
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const TextField = props => {
        const { ...muiProps } = props;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__.Z,
          { ...muiProps },
        );
      };
      TextField.displayName = 'TextField';
      try {
        (TextField.displayName = 'TextField'),
          (TextField.__docgenInfo = {
            description: '',
            displayName: 'TextField',
            props: {
              focused: {
                defaultValue: null,
                description:
                  'If `true`, the component is displayed in focused state.',
                name: 'focused',
                required: !1,
                type: { name: 'boolean' },
              },
              hiddenLabel: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.',
                name: 'hiddenLabel',
                required: !1,
                type: { name: 'boolean' },
              },
              margin: {
                defaultValue: { value: "'none'" },
                description:
                  'If `dense` or `normal`, will adjust vertical spacing of this and contained components.',
                name: 'margin',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"dense"' },
                    { value: '"normal"' },
                    { value: '"none"' },
                  ],
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/TextField.tsx#TextField'] = {
              docgenInfo: TextField.__docgenInfo,
              name: 'TextField',
              path: 'src/TextField.tsx#TextField',
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
    './src/index.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Oi: () => CodeSnippet_CodeSnippet.O,
        Pw: () => CodeSnippet_CodeSnippet.P,
        aC: () => Gauge_Gauge,
        Yu: () => Meter_Meter,
        F7: () => OrientationType,
      });
      var CodeSnippet_CodeSnippet = __webpack_require__(
          './src/CodeSnippet/CodeSnippet.tsx',
        ),
        jsx_runtime =
          (__webpack_require__('./src/Layout.tsx'),
          __webpack_require__('./src/Button.tsx'),
          __webpack_require__('./src/Checkbox.tsx'),
          __webpack_require__('./src/Spinner.tsx'),
          __webpack_require__('./src/TextField.tsx'),
          __webpack_require__('./src/FileUpload.tsx'),
          __webpack_require__('./src/Typography.tsx'),
          __webpack_require__(
            '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
          ),
          __webpack_require__(
            '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
          ));
      let OrientationType = (function (OrientationType) {
        return (
          (OrientationType.RIGHT = 'RIGHT'),
          (OrientationType.LEFT = 'LEFT'),
          OrientationType
        );
      })({});
      const Gauge_Gauge = props => {
        const width = props.width ?? 150,
          height = props.height ?? 50,
          strokeWidth = props.strokeWidth ?? 7,
          color = props.color ?? 'green',
          isLeft = props.orientation === OrientationType.LEFT,
          isRight = props.orientation !== OrientationType.LEFT,
          radius = (height - strokeWidth) / 2,
          leftPaths = `M${2 * radius + strokeWidth / 2},${
            radius + strokeWidth / 2
          }\n    a${radius},${radius} 0 1,0 -${radius},${radius}\n    m 0, 0 h ${width}\n    `,
          rightPaths = `M${width - radius - strokeWidth / 2},${
            2 * radius + strokeWidth / 2
          }\n    a${radius},${radius} 0 1,0 -${radius},-${radius}\n    m ${radius}, ${radius} h -${
            width - radius
          }\n    `;
        return (0, jsx_runtime.jsxs)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          version: '1.1',
          children: [
            props.boundingBox &&
              (0, jsx_runtime.jsx)('rect', { width, height }),
            isLeft &&
              (0, jsx_runtime.jsx)('path', {
                fill: 'pink',
                stroke: color,
                'stroke-width': strokeWidth,
                d: leftPaths,
              }),
            isRight &&
              (0, jsx_runtime.jsx)('path', {
                fill: 'pink',
                stroke: color,
                'stroke-width': strokeWidth,
                d: rightPaths,
              }),
          ],
        });
      };
      Gauge_Gauge.displayName = 'Gauge';
      try {
        (Gauge_Gauge.displayName = 'Gauge'),
          (Gauge_Gauge.__docgenInfo = {
            description: '',
            displayName: 'Gauge',
            props: {
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !0,
                type: { name: 'number' },
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !0,
                type: { name: 'number' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              strokeWidth: {
                defaultValue: null,
                description: '',
                name: 'strokeWidth',
                required: !1,
                type: { name: 'number' },
              },
              orientation: {
                defaultValue: null,
                description: '',
                name: 'orientation',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"RIGHT"' }, { value: '"LEFT"' }],
                },
              },
              current: {
                defaultValue: null,
                description: '',
                name: 'current',
                required: !1,
                type: { name: 'number' },
              },
              max: {
                defaultValue: null,
                description: '',
                name: 'max',
                required: !1,
                type: { name: 'number' },
              },
              boundingBox: {
                defaultValue: null,
                description: '',
                name: 'boundingBox',
                required: !0,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Gauge/Gauge.tsx#Gauge'] = {
              docgenInfo: Gauge_Gauge.__docgenInfo,
              name: 'Gauge',
              path: 'src/Gauge/Gauge.tsx#Gauge',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Meter_Meter = props => {
        const percent = props.percent ?? 0.5,
          width = props.width ?? 100,
          height = props.height ?? 10,
          strokeWidth = props.strokeWidth ?? 1,
          color = props.color ?? 'lime',
          xPos = 0 + strokeWidth / 2,
          yPos = 0 + strokeWidth / 2,
          fillWidth = width * percent;
        return (0, jsx_runtime.jsxs)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          version: '1.1',
          children: [
            (0, jsx_runtime.jsx)('rect', {
              x: xPos,
              y: yPos,
              width,
              height,
              fill: 'grey',
              stroke: 'black',
              'stroke-width': strokeWidth,
              opacity: '0.2',
            }),
            (0, jsx_runtime.jsx)('rect', {
              x: xPos,
              y: yPos,
              width: fillWidth,
              height,
              fill: color,
              stroke: color,
              'stroke-width': strokeWidth,
            }),
          ],
        });
      };
      Meter_Meter.displayName = 'Meter';
      try {
        (Meter_Meter.displayName = 'Meter'),
          (Meter_Meter.__docgenInfo = {
            description: '',
            displayName: 'Meter',
            props: {
              percent: {
                defaultValue: null,
                description: '',
                name: 'percent',
                required: !0,
                type: { name: 'number' },
              },
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !0,
                type: { name: 'number' },
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !0,
                type: { name: 'number' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              strokeWidth: {
                defaultValue: null,
                description: '',
                name: 'strokeWidth',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Meter.tsx#Meter'] = {
              docgenInfo: Meter_Meter.__docgenInfo,
              name: 'Meter',
              path: 'src/Meter.tsx#Meter',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__('./src/LoadingButton.tsx'),
        __webpack_require__('./src/Link.tsx'),
        __webpack_require__('./src/NonInteractiveLink.tsx'),
        __webpack_require__('./src/ApiClient.tsx');
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
            (STORYBOOK_REACT_CLASSES['src/index.tsx#CodeSnippet'] = {
              docgenInfo: CodeSnippet.__docgenInfo,
              name: 'CodeSnippet',
              path: 'src/index.tsx#CodeSnippet',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Paper.displayName = 'Paper'),
          (Paper.__docgenInfo = {
            description: '',
            displayName: 'Paper',
            props: {
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
                  name: '(Partial<PaperClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              elevation: {
                defaultValue: { value: '1' },
                description:
                  'Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 24 inclusive.',
                name: 'elevation',
                required: !1,
                type: { name: 'number' },
              },
              square: {
                defaultValue: { value: 'false' },
                description: 'If `true`, rounded corners are disabled.',
                name: 'square',
                required: !1,
                type: { name: 'boolean' },
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
                defaultValue: { value: "'elevation'" },
                description: 'The variant to use.',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"outlined"' }, { value: '"elevation"' }],
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/index.tsx#Paper'] = {
              docgenInfo: Paper.__docgenInfo,
              name: 'Paper',
              path: 'src/index.tsx#Paper',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Item.displayName = 'Item'),
          (Item.__docgenInfo = {
            description: '',
            displayName: 'Item',
            props: {
              classes: {
                defaultValue: null,
                description:
                  'Override or extend the styles applied to the component.',
                name: 'classes',
                required: !1,
                type: {
                  name: '(Partial<PaperClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              children: {
                defaultValue: null,
                description: 'The content of the component.',
                name: 'children',
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
                defaultValue: { value: "'elevation'" },
                description: 'The variant to use.',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"outlined"' }, { value: '"elevation"' }],
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
              square: {
                defaultValue: { value: 'false' },
                description: 'If `true`, rounded corners are disabled.',
                name: 'square',
                required: !1,
                type: { name: 'boolean' },
              },
              elevation: {
                defaultValue: { value: '1' },
                description:
                  'Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 24 inclusive.',
                name: 'elevation',
                required: !1,
                type: { name: 'number' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'any' },
              },
              as: {
                defaultValue: null,
                description: '',
                name: 'as',
                required: !1,
                type: { name: 'undefined' },
              },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/index.tsx#Item'] = {
              docgenInfo: Item.__docgenInfo,
              name: 'Item',
              path: 'src/index.tsx#Item',
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
            (STORYBOOK_REACT_CLASSES['src/index.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'src/index.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Checkbox.displayName = 'Checkbox'),
          (Checkbox.__docgenInfo = {
            description: '',
            displayName: 'Checkbox',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null',
                },
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
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/index.tsx#Checkbox'] = {
              docgenInfo: Checkbox.__docgenInfo,
              name: 'Checkbox',
              path: 'src/index.tsx#Checkbox',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (TextField.displayName = 'TextField'),
          (TextField.__docgenInfo = {
            description: '',
            displayName: 'TextField',
            props: {
              focused: {
                defaultValue: null,
                description:
                  'If `true`, the component is displayed in focused state.',
                name: 'focused',
                required: !1,
                type: { name: 'boolean' },
              },
              hiddenLabel: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.',
                name: 'hiddenLabel',
                required: !1,
                type: { name: 'boolean' },
              },
              margin: {
                defaultValue: { value: "'none'" },
                description:
                  'If `dense` or `normal`, will adjust vertical spacing of this and contained components.',
                name: 'margin',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"dense"' },
                    { value: '"normal"' },
                    { value: '"none"' },
                  ],
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/index.tsx#TextField'] = {
              docgenInfo: TextField.__docgenInfo,
              name: 'TextField',
              path: 'src/index.tsx#TextField',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (FileUpload.displayName = 'FileUpload'),
          (FileUpload.__docgenInfo = {
            description: '',
            displayName: 'FileUpload',
            props: {
              setFile: {
                defaultValue: null,
                description: '',
                name: 'setFile',
                required: !0,
                type: { name: '(file: string) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/index.tsx#FileUpload'] = {
              docgenInfo: FileUpload.__docgenInfo,
              name: 'FileUpload',
              path: 'src/index.tsx#FileUpload',
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
            (STORYBOOK_REACT_CLASSES['src/index.tsx#Typography'] = {
              docgenInfo: Typography.__docgenInfo,
              name: 'Typography',
              path: 'src/index.tsx#Typography',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Gauge.displayName = 'Gauge'),
          (Gauge.__docgenInfo = {
            description: '',
            displayName: 'Gauge',
            props: {
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !0,
                type: { name: 'number' },
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !0,
                type: { name: 'number' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              strokeWidth: {
                defaultValue: null,
                description: '',
                name: 'strokeWidth',
                required: !1,
                type: { name: 'number' },
              },
              orientation: {
                defaultValue: null,
                description: '',
                name: 'orientation',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"RIGHT"' }, { value: '"LEFT"' }],
                },
              },
              current: {
                defaultValue: null,
                description: '',
                name: 'current',
                required: !1,
                type: { name: 'number' },
              },
              max: {
                defaultValue: null,
                description: '',
                name: 'max',
                required: !1,
                type: { name: 'number' },
              },
              boundingBox: {
                defaultValue: null,
                description: '',
                name: 'boundingBox',
                required: !0,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/index.tsx#Gauge'] = {
              docgenInfo: Gauge.__docgenInfo,
              name: 'Gauge',
              path: 'src/index.tsx#Gauge',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Meter.displayName = 'Meter'),
          (Meter.__docgenInfo = {
            description: '',
            displayName: 'Meter',
            props: {
              percent: {
                defaultValue: null,
                description: '',
                name: 'percent',
                required: !0,
                type: { name: 'number' },
              },
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !0,
                type: { name: 'number' },
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !0,
                type: { name: 'number' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              strokeWidth: {
                defaultValue: null,
                description: '',
                name: 'strokeWidth',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/index.tsx#Meter'] = {
              docgenInfo: Meter.__docgenInfo,
              name: 'Meter',
              path: 'src/index.tsx#Meter',
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
            (STORYBOOK_REACT_CLASSES['src/index.tsx#LoadingButton'] = {
              docgenInfo: LoadingButton.__docgenInfo,
              name: 'LoadingButton',
              path: 'src/index.tsx#LoadingButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Link.displayName = 'Link'),
          (Link.__docgenInfo = {
            description: '',
            displayName: 'Link',
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
            (STORYBOOK_REACT_CLASSES['src/index.tsx#Link'] = {
              docgenInfo: Link.__docgenInfo,
              name: 'Link',
              path: 'src/index.tsx#Link',
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
            (STORYBOOK_REACT_CLASSES['src/index.tsx#NonInteractiveLink'] = {
              docgenInfo: NonInteractiveLink.__docgenInfo,
              name: 'NonInteractiveLink',
              path: 'src/index.tsx#NonInteractiveLink',
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
            (STORYBOOK_REACT_CLASSES['src/index.tsx#ApiClient'] = {
              docgenInfo: ApiClient.__docgenInfo,
              name: 'ApiClient',
              path: 'src/index.tsx#ApiClient',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
