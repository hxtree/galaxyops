'use strict';
(self.webpackChunk_cats_cradle_design_system =
  self.webpackChunk_cats_cradle_design_system || []).push([
  [404],
  {
    '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Button/Button.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Z: () => Button_Button });
        var objectWithoutPropertiesLoose = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js',
          ),
          esm_extends = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/extends.js',
          ),
          react = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
          ),
          clsx_m = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js',
          ),
          resolveProps = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/resolveProps.js',
          ),
          composeClasses = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js',
          ),
          colorManipulator = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+system@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react@18.2.0/node_modules/@mui/system/esm/colorManipulator.js',
          ),
          styled = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js',
          ),
          useThemeProps = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useThemeProps.js',
          ),
          ButtonBase = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ButtonBase/ButtonBase.js',
          ),
          capitalize = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/capitalize.js',
          ),
          generateUtilityClasses = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js',
          ),
          generateUtilityClass = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js',
          );
        function getButtonUtilityClass(slot) {
          return (0, generateUtilityClass.Z)('MuiButton', slot);
        }
        const Button_buttonClasses = (0, generateUtilityClasses.Z)(
          'MuiButton',
          [
            'root',
            'text',
            'textInherit',
            'textPrimary',
            'textSecondary',
            'textSuccess',
            'textError',
            'textInfo',
            'textWarning',
            'outlined',
            'outlinedInherit',
            'outlinedPrimary',
            'outlinedSecondary',
            'outlinedSuccess',
            'outlinedError',
            'outlinedInfo',
            'outlinedWarning',
            'contained',
            'containedInherit',
            'containedPrimary',
            'containedSecondary',
            'containedSuccess',
            'containedError',
            'containedInfo',
            'containedWarning',
            'disableElevation',
            'focusVisible',
            'disabled',
            'colorInherit',
            'textSizeSmall',
            'textSizeMedium',
            'textSizeLarge',
            'outlinedSizeSmall',
            'outlinedSizeMedium',
            'outlinedSizeLarge',
            'containedSizeSmall',
            'containedSizeMedium',
            'containedSizeLarge',
            'sizeMedium',
            'sizeSmall',
            'sizeLarge',
            'fullWidth',
            'startIcon',
            'endIcon',
            'iconSizeSmall',
            'iconSizeMedium',
            'iconSizeLarge',
          ],
        );
        const ButtonGroup_ButtonGroupContext = react.createContext({});
        var jsx_runtime = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
        const _excluded = [
            'children',
            'color',
            'component',
            'className',
            'disabled',
            'disableElevation',
            'disableFocusRipple',
            'endIcon',
            'focusVisibleClassName',
            'fullWidth',
            'size',
            'startIcon',
            'type',
            'variant',
          ],
          commonIconStyles = ownerState =>
            (0, esm_extends.Z)(
              {},
              'small' === ownerState.size && {
                '& > *:nth-of-type(1)': { fontSize: 18 },
              },
              'medium' === ownerState.size && {
                '& > *:nth-of-type(1)': { fontSize: 20 },
              },
              'large' === ownerState.size && {
                '& > *:nth-of-type(1)': { fontSize: 22 },
              },
            ),
          ButtonRoot = (0, styled.ZP)(ButtonBase.Z, {
            shouldForwardProp: prop =>
              (0, styled.FO)(prop) || 'classes' === prop,
            name: 'MuiButton',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props;
              return [
                styles.root,
                styles[ownerState.variant],
                styles[
                  `${ownerState.variant}${(0, capitalize.Z)(ownerState.color)}`
                ],
                styles[`size${(0, capitalize.Z)(ownerState.size)}`],
                styles[
                  `${ownerState.variant}Size${(0, capitalize.Z)(
                    ownerState.size,
                  )}`
                ],
                'inherit' === ownerState.color && styles.colorInherit,
                ownerState.disableElevation && styles.disableElevation,
                ownerState.fullWidth && styles.fullWidth,
              ];
            },
          })(
            ({ theme, ownerState }) => {
              var _theme$palette$getCon, _theme$palette;
              const inheritContainedBackgroundColor =
                  'light' === theme.palette.mode
                    ? theme.palette.grey[300]
                    : theme.palette.grey[800],
                inheritContainedHoverBackgroundColor =
                  'light' === theme.palette.mode
                    ? theme.palette.grey.A100
                    : theme.palette.grey[700];
              return (0, esm_extends.Z)(
                {},
                theme.typography.button,
                {
                  minWidth: 64,
                  padding: '6px 16px',
                  borderRadius: (theme.vars || theme).shape.borderRadius,
                  transition: theme.transitions.create(
                    ['background-color', 'box-shadow', 'border-color', 'color'],
                    { duration: theme.transitions.duration.short },
                  ),
                  '&:hover': (0, esm_extends.Z)(
                    {
                      textDecoration: 'none',
                      backgroundColor: theme.vars
                        ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})`
                        : (0, colorManipulator.Fq)(
                            theme.palette.text.primary,
                            theme.palette.action.hoverOpacity,
                          ),
                      '@media (hover: none)': {
                        backgroundColor: 'transparent',
                      },
                    },
                    'text' === ownerState.variant &&
                      'inherit' !== ownerState.color && {
                        backgroundColor: theme.vars
                          ? `rgba(${
                              theme.vars.palette[ownerState.color].mainChannel
                            } / ${theme.vars.palette.action.hoverOpacity})`
                          : (0, colorManipulator.Fq)(
                              theme.palette[ownerState.color].main,
                              theme.palette.action.hoverOpacity,
                            ),
                        '@media (hover: none)': {
                          backgroundColor: 'transparent',
                        },
                      },
                    'outlined' === ownerState.variant &&
                      'inherit' !== ownerState.color && {
                        border: `1px solid ${
                          (theme.vars || theme).palette[ownerState.color].main
                        }`,
                        backgroundColor: theme.vars
                          ? `rgba(${
                              theme.vars.palette[ownerState.color].mainChannel
                            } / ${theme.vars.palette.action.hoverOpacity})`
                          : (0, colorManipulator.Fq)(
                              theme.palette[ownerState.color].main,
                              theme.palette.action.hoverOpacity,
                            ),
                        '@media (hover: none)': {
                          backgroundColor: 'transparent',
                        },
                      },
                    'contained' === ownerState.variant && {
                      backgroundColor: theme.vars
                        ? theme.vars.palette.Button.inheritContainedHoverBg
                        : inheritContainedHoverBackgroundColor,
                      boxShadow: (theme.vars || theme).shadows[4],
                      '@media (hover: none)': {
                        boxShadow: (theme.vars || theme).shadows[2],
                        backgroundColor: (theme.vars || theme).palette
                          .grey[300],
                      },
                    },
                    'contained' === ownerState.variant &&
                      'inherit' !== ownerState.color && {
                        backgroundColor: (theme.vars || theme).palette[
                          ownerState.color
                        ].dark,
                        '@media (hover: none)': {
                          backgroundColor: (theme.vars || theme).palette[
                            ownerState.color
                          ].main,
                        },
                      },
                  ),
                  '&:active': (0, esm_extends.Z)(
                    {},
                    'contained' === ownerState.variant && {
                      boxShadow: (theme.vars || theme).shadows[8],
                    },
                  ),
                  [`&.${Button_buttonClasses.focusVisible}`]: (0,
                  esm_extends.Z)(
                    {},
                    'contained' === ownerState.variant && {
                      boxShadow: (theme.vars || theme).shadows[6],
                    },
                  ),
                  [`&.${Button_buttonClasses.disabled}`]: (0, esm_extends.Z)(
                    { color: (theme.vars || theme).palette.action.disabled },
                    'outlined' === ownerState.variant && {
                      border: `1px solid ${
                        (theme.vars || theme).palette.action.disabledBackground
                      }`,
                    },
                    'contained' === ownerState.variant && {
                      color: (theme.vars || theme).palette.action.disabled,
                      boxShadow: (theme.vars || theme).shadows[0],
                      backgroundColor: (theme.vars || theme).palette.action
                        .disabledBackground,
                    },
                  ),
                },
                'text' === ownerState.variant && { padding: '6px 8px' },
                'text' === ownerState.variant &&
                  'inherit' !== ownerState.color && {
                    color: (theme.vars || theme).palette[ownerState.color].main,
                  },
                'outlined' === ownerState.variant && {
                  padding: '5px 15px',
                  border: '1px solid currentColor',
                },
                'outlined' === ownerState.variant &&
                  'inherit' !== ownerState.color && {
                    color: (theme.vars || theme).palette[ownerState.color].main,
                    border: theme.vars
                      ? `1px solid rgba(${
                          theme.vars.palette[ownerState.color].mainChannel
                        } / 0.5)`
                      : `1px solid ${(0, colorManipulator.Fq)(
                          theme.palette[ownerState.color].main,
                          0.5,
                        )}`,
                  },
                'contained' === ownerState.variant && {
                  color: theme.vars
                    ? theme.vars.palette.text.primary
                    : null ==
                      (_theme$palette$getCon = (_theme$palette = theme.palette)
                        .getContrastText)
                    ? void 0
                    : _theme$palette$getCon.call(
                        _theme$palette,
                        theme.palette.grey[300],
                      ),
                  backgroundColor: theme.vars
                    ? theme.vars.palette.Button.inheritContainedBg
                    : inheritContainedBackgroundColor,
                  boxShadow: (theme.vars || theme).shadows[2],
                },
                'contained' === ownerState.variant &&
                  'inherit' !== ownerState.color && {
                    color: (theme.vars || theme).palette[ownerState.color]
                      .contrastText,
                    backgroundColor: (theme.vars || theme).palette[
                      ownerState.color
                    ].main,
                  },
                'inherit' === ownerState.color && {
                  color: 'inherit',
                  borderColor: 'currentColor',
                },
                'small' === ownerState.size &&
                  'text' === ownerState.variant && {
                    padding: '4px 5px',
                    fontSize: theme.typography.pxToRem(13),
                  },
                'large' === ownerState.size &&
                  'text' === ownerState.variant && {
                    padding: '8px 11px',
                    fontSize: theme.typography.pxToRem(15),
                  },
                'small' === ownerState.size &&
                  'outlined' === ownerState.variant && {
                    padding: '3px 9px',
                    fontSize: theme.typography.pxToRem(13),
                  },
                'large' === ownerState.size &&
                  'outlined' === ownerState.variant && {
                    padding: '7px 21px',
                    fontSize: theme.typography.pxToRem(15),
                  },
                'small' === ownerState.size &&
                  'contained' === ownerState.variant && {
                    padding: '4px 10px',
                    fontSize: theme.typography.pxToRem(13),
                  },
                'large' === ownerState.size &&
                  'contained' === ownerState.variant && {
                    padding: '8px 22px',
                    fontSize: theme.typography.pxToRem(15),
                  },
                ownerState.fullWidth && { width: '100%' },
              );
            },
            ({ ownerState }) =>
              ownerState.disableElevation && {
                boxShadow: 'none',
                '&:hover': { boxShadow: 'none' },
                [`&.${Button_buttonClasses.focusVisible}`]: {
                  boxShadow: 'none',
                },
                '&:active': { boxShadow: 'none' },
                [`&.${Button_buttonClasses.disabled}`]: { boxShadow: 'none' },
              },
          ),
          ButtonStartIcon = (0, styled.ZP)('span', {
            name: 'MuiButton',
            slot: 'StartIcon',
            overridesResolver: (props, styles) => {
              const { ownerState } = props;
              return [
                styles.startIcon,
                styles[`iconSize${(0, capitalize.Z)(ownerState.size)}`],
              ];
            },
          })(({ ownerState }) =>
            (0, esm_extends.Z)(
              { display: 'inherit', marginRight: 8, marginLeft: -4 },
              'small' === ownerState.size && { marginLeft: -2 },
              commonIconStyles(ownerState),
            ),
          ),
          ButtonEndIcon = (0, styled.ZP)('span', {
            name: 'MuiButton',
            slot: 'EndIcon',
            overridesResolver: (props, styles) => {
              const { ownerState } = props;
              return [
                styles.endIcon,
                styles[`iconSize${(0, capitalize.Z)(ownerState.size)}`],
              ];
            },
          })(({ ownerState }) =>
            (0, esm_extends.Z)(
              { display: 'inherit', marginRight: -4, marginLeft: 8 },
              'small' === ownerState.size && { marginRight: -2 },
              commonIconStyles(ownerState),
            ),
          ),
          Button_Button = react.forwardRef(function Button(inProps, ref) {
            const contextProps = react.useContext(
                ButtonGroup_ButtonGroupContext,
              ),
              resolvedProps = (0, resolveProps.Z)(contextProps, inProps),
              props = (0, useThemeProps.Z)({
                props: resolvedProps,
                name: 'MuiButton',
              }),
              {
                children,
                color = 'primary',
                component = 'button',
                className,
                disabled = !1,
                disableElevation = !1,
                disableFocusRipple = !1,
                endIcon: endIconProp,
                focusVisibleClassName,
                fullWidth = !1,
                size = 'medium',
                startIcon: startIconProp,
                type,
                variant = 'text',
              } = props,
              other = (0, objectWithoutPropertiesLoose.Z)(props, _excluded),
              ownerState = (0, esm_extends.Z)({}, props, {
                color,
                component,
                disabled,
                disableElevation,
                disableFocusRipple,
                fullWidth,
                size,
                type,
                variant,
              }),
              classes = (ownerState => {
                const {
                    color,
                    disableElevation,
                    fullWidth,
                    size,
                    variant,
                    classes,
                  } = ownerState,
                  slots = {
                    root: [
                      'root',
                      variant,
                      `${variant}${(0, capitalize.Z)(color)}`,
                      `size${(0, capitalize.Z)(size)}`,
                      `${variant}Size${(0, capitalize.Z)(size)}`,
                      'inherit' === color && 'colorInherit',
                      disableElevation && 'disableElevation',
                      fullWidth && 'fullWidth',
                    ],
                    label: ['label'],
                    startIcon: [
                      'startIcon',
                      `iconSize${(0, capitalize.Z)(size)}`,
                    ],
                    endIcon: ['endIcon', `iconSize${(0, capitalize.Z)(size)}`],
                  },
                  composedClasses = (0, composeClasses.Z)(
                    slots,
                    getButtonUtilityClass,
                    classes,
                  );
                return (0, esm_extends.Z)({}, classes, composedClasses);
              })(ownerState),
              startIcon =
                startIconProp &&
                (0, jsx_runtime.jsx)(ButtonStartIcon, {
                  className: classes.startIcon,
                  ownerState,
                  children: startIconProp,
                }),
              endIcon =
                endIconProp &&
                (0, jsx_runtime.jsx)(ButtonEndIcon, {
                  className: classes.endIcon,
                  ownerState,
                  children: endIconProp,
                });
            return (0,
            jsx_runtime.jsxs)(ButtonRoot, (0, esm_extends.Z)({ ownerState, className: (0, clsx_m.Z)(contextProps.className, classes.root, className), component, disabled, focusRipple: !disableFocusRipple, focusVisibleClassName: (0, clsx_m.Z)(classes.focusVisible, focusVisibleClassName), ref, type }, other, { classes, children: [startIcon, children, endIcon] }));
          });
      },
    './stories/pages/molecules/Button.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Inherit: () => Inherit,
          Primary: () => Primary,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var _src_Button__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./src/Button.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Molecules/Button',
          component: _src_Button__WEBPACK_IMPORTED_MODULE_1__.z,
        },
        Primary = args =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _src_Button__WEBPACK_IMPORTED_MODULE_1__.z,
            { ...args, children: 'Run Query' },
          );
      (Primary.displayName = 'Primary'),
        (Primary.args = { color: 'primary', variant: 'contained' });
      const Inherit = args =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _src_Button__WEBPACK_IMPORTED_MODULE_1__.z,
          { ...args, children: 'Run Query' },
        );
      (Inherit.displayName = 'Inherit'),
        (Inherit.args = { color: 'inherit', variant: 'contained' }),
        (Primary.parameters = {
          ...Primary.parameters,
          docs: {
            ...Primary.parameters?.docs,
            source: {
              originalSource: 'args => <Button {...args}>Run Query</Button>',
              ...Primary.parameters?.docs?.source,
            },
          },
        }),
        (Inherit.parameters = {
          ...Inherit.parameters,
          docs: {
            ...Inherit.parameters?.docs,
            source: {
              originalSource: 'args => <Button {...args}>Run Query</Button>',
              ...Inherit.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ['Primary', 'Inherit'];
      try {
        (Primary.displayName = 'Primary'),
          (Primary.__docgenInfo = {
            description: '',
            displayName: 'Primary',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/pages/molecules/Button.stories.tsx#Primary'
            ] = {
              docgenInfo: Primary.__docgenInfo,
              name: 'Primary',
              path: 'stories/pages/molecules/Button.stories.tsx#Primary',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Inherit.displayName = 'Inherit'),
          (Inherit.__docgenInfo = {
            description: '',
            displayName: 'Inherit',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/pages/molecules/Button.stories.tsx#Inherit'
            ] = {
              docgenInfo: Inherit.__docgenInfo,
              name: 'Inherit',
              path: 'stories/pages/molecules/Button.stories.tsx#Inherit',
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
  },
]);
