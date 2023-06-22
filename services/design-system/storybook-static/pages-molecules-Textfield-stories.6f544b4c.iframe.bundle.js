'use strict';
(self.webpackChunk_cats_cradle_design_system =
  self.webpackChunk_cats_cradle_design_system || []).push([
  [556],
  {
    '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Paper/Paper.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Z: () => Paper_Paper });
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
          composeClasses = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js',
          ),
          colorManipulator = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+system@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react@18.2.0/node_modules/@mui/system/esm/colorManipulator.js',
          ),
          styled = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js',
          );
        const styles_getOverlayAlpha = elevation => {
          let alphaValue;
          return (
            (alphaValue =
              elevation < 1
                ? 5.11916 * elevation ** 2
                : 4.5 * Math.log(elevation + 1) + 2),
            (alphaValue / 100).toFixed(2)
          );
        };
        var useThemeProps = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useThemeProps.js',
          ),
          generateUtilityClasses = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js',
          ),
          generateUtilityClass = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js',
          );
        function getPaperUtilityClass(slot) {
          return (0, generateUtilityClass.Z)('MuiPaper', slot);
        }
        (0, generateUtilityClasses.Z)('MuiPaper', [
          'root',
          'rounded',
          'outlined',
          'elevation',
          'elevation0',
          'elevation1',
          'elevation2',
          'elevation3',
          'elevation4',
          'elevation5',
          'elevation6',
          'elevation7',
          'elevation8',
          'elevation9',
          'elevation10',
          'elevation11',
          'elevation12',
          'elevation13',
          'elevation14',
          'elevation15',
          'elevation16',
          'elevation17',
          'elevation18',
          'elevation19',
          'elevation20',
          'elevation21',
          'elevation22',
          'elevation23',
          'elevation24',
        ]);
        var jsx_runtime = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
        const _excluded = [
            'className',
            'component',
            'elevation',
            'square',
            'variant',
          ],
          PaperRoot = (0, styled.ZP)('div', {
            name: 'MuiPaper',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props;
              return [
                styles.root,
                styles[ownerState.variant],
                !ownerState.square && styles.rounded,
                'elevation' === ownerState.variant &&
                  styles[`elevation${ownerState.elevation}`],
              ];
            },
          })(({ theme, ownerState }) => {
            var _theme$vars$overlays;
            return (0, esm_extends.Z)(
              {
                backgroundColor: (theme.vars || theme).palette.background.paper,
                color: (theme.vars || theme).palette.text.primary,
                transition: theme.transitions.create('box-shadow'),
              },
              !ownerState.square && { borderRadius: theme.shape.borderRadius },
              'outlined' === ownerState.variant && {
                border: `1px solid ${(theme.vars || theme).palette.divider}`,
              },
              'elevation' === ownerState.variant &&
                (0, esm_extends.Z)(
                  {
                    boxShadow: (theme.vars || theme).shadows[
                      ownerState.elevation
                    ],
                  },
                  !theme.vars &&
                    'dark' === theme.palette.mode && {
                      backgroundImage: `linear-gradient(${(0,
                      colorManipulator.Fq)(
                        '#fff',
                        styles_getOverlayAlpha(ownerState.elevation),
                      )}, ${(0, colorManipulator.Fq)(
                        '#fff',
                        styles_getOverlayAlpha(ownerState.elevation),
                      )})`,
                    },
                  theme.vars && {
                    backgroundImage:
                      null == (_theme$vars$overlays = theme.vars.overlays)
                        ? void 0
                        : _theme$vars$overlays[ownerState.elevation],
                  },
                ),
            );
          }),
          Paper_Paper = react.forwardRef(function Paper(inProps, ref) {
            const props = (0, useThemeProps.Z)({
                props: inProps,
                name: 'MuiPaper',
              }),
              {
                className,
                component = 'div',
                elevation = 1,
                square = !1,
                variant = 'elevation',
              } = props,
              other = (0, objectWithoutPropertiesLoose.Z)(props, _excluded),
              ownerState = (0, esm_extends.Z)({}, props, {
                component,
                elevation,
                square,
                variant,
              }),
              classes = (ownerState => {
                const { square, elevation, variant, classes } = ownerState,
                  slots = {
                    root: [
                      'root',
                      variant,
                      !square && 'rounded',
                      'elevation' === variant && `elevation${elevation}`,
                    ],
                  };
                return (0, composeClasses.Z)(
                  slots,
                  getPaperUtilityClass,
                  classes,
                );
              })(ownerState);
            return (0,
            jsx_runtime.jsx)(PaperRoot, (0, esm_extends.Z)({ as: component, ownerState, className: (0, clsx_m.Z)(classes.root, className), ref }, other));
          });
      },
    '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useTheme.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Z: () => useTheme });
        __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
        );
        var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+system@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react@18.2.0/node_modules/@mui/system/esm/useTheme.js',
          ),
          _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/defaultTheme.js',
          ),
          _identifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/identifier.js',
          );
        function useTheme() {
          const theme = (0, _mui_system__WEBPACK_IMPORTED_MODULE_1__.Z)(
            _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.Z,
          );
          return theme[_identifier__WEBPACK_IMPORTED_MODULE_3__.Z] || theme;
        }
      },
    '../../common/temp/node_modules/.pnpm/@mui+utils@5.13.1_react@18.2.0/node_modules/@mui/utils/esm/useId.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
        __webpack_require__.d(__webpack_exports__, { Z: () => useId });
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
        );
        let globalId = 0;
        const maybeReactUseId =
          (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache ||
            (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache =
              __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))[
            'useId'.toString()
          ];
        function useId(idOverride) {
          if (void 0 !== maybeReactUseId) {
            const reactId = maybeReactUseId();
            return null != idOverride ? idOverride : reactId;
          }
          return (function useGlobalId(idOverride) {
            const [defaultId, setDefaultId] =
                react__WEBPACK_IMPORTED_MODULE_0__.useState(idOverride),
              id = idOverride || defaultId;
            return (
              react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                null == defaultId &&
                  ((globalId += 1), setDefaultId(`mui-${globalId}`));
              }, [defaultId]),
              id
            );
          })(idOverride);
        }
      },
    './stories/pages/molecules/Textfield.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var _src_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/TextField.tsx',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Molecules/TextField',
        component: _src_TextField__WEBPACK_IMPORTED_MODULE_1__.n,
        argTypes: {},
      };
      function StoryTemplate() {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _src_TextField__WEBPACK_IMPORTED_MODULE_1__.n,
          {},
        );
      }
      StoryTemplate.displayName = 'StoryTemplate';
      const Default = StoryTemplate.bind({});
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: 'StoryTemplate.bind({}) as StoryTemplateType',
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ['Default'];
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
  },
]);
