'use strict';
(self.webpackChunk_cats_cradle_design_system =
  self.webpackChunk_cats_cradle_design_system || []).push([
  [189],
  {
    './stories/hud/Gauge.stories.tsx': (
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
      var _src__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./src/index.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'HUD/Gauge',
          component: _src__WEBPACK_IMPORTED_MODULE_1__.aC,
        },
        Default = args =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _src__WEBPACK_IMPORTED_MODULE_1__.aC,
            { ...args },
          );
      (Default.displayName = 'Default'),
        (Default.args = {
          color: 'red',
          orientation: _src__WEBPACK_IMPORTED_MODULE_1__.F7.RIGHT,
        }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource: 'args => <Gauge {...args} />',
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
            (STORYBOOK_REACT_CLASSES['stories/hud/Gauge.stories.tsx#Default'] =
              {
                docgenInfo: Default.__docgenInfo,
                name: 'Default',
                path: 'stories/hud/Gauge.stories.tsx#Default',
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
