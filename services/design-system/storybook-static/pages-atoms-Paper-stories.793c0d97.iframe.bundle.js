'use strict';
(self.webpackChunk_cats_cradle_design_system =
  self.webpackChunk_cats_cradle_design_system || []).push([
  [733],
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
    './stories/pages/atoms/Paper.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Paper_stories,
        });
      __webpack_require__(
        '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
      );
      var Paper = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/@mui+material@5.12.3_@emotion+react@11.10.8_@emotion+styled@11.10.8_@types+react@18.2.13_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Paper/Paper.js',
        ),
        jsx_runtime = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const Paper_Paper = props => {
        const { children, ...muiProps } = props;
        return (0, jsx_runtime.jsx)(Paper.Z, { ...muiProps, children });
      };
      Paper_Paper.displayName = 'Paper';
      try {
        (Paper_Paper.displayName = 'Paper'),
          (Paper_Paper.__docgenInfo = {
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
            (STORYBOOK_REACT_CLASSES['src/Paper.tsx#Paper'] = {
              docgenInfo: Paper_Paper.__docgenInfo,
              name: 'Paper',
              path: 'src/Paper.tsx#Paper',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Paper_stories = { title: 'Atoms/Paper', component: Paper_Paper },
        Default = args =>
          (0, jsx_runtime.jsx)(Paper_Paper, { ...args, children: 'Text' });
      (Default.displayName = 'Default'),
        (Default.args = { elevation: 3 }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource: 'args => <Paper {...args}>Text</Paper>',
              ...Default.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ['Default'];
      try {
        (Default.displayName = 'Default'),
          (Default.__docgenInfo = {
            description: '',
            displayName: 'Default',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/pages/atoms/Paper.stories.tsx#Default'
            ] = {
              docgenInfo: Default.__docgenInfo,
              name: 'Default',
              path: 'stories/pages/atoms/Paper.stories.tsx#Default',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
