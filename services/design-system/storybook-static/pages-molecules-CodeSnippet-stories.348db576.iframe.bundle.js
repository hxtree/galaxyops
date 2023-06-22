'use strict';
(self.webpackChunk_cats_cradle_design_system =
  self.webpackChunk_cats_cradle_design_system || []).push([
  [930],
  {
    './stories/pages/molecules/CodeSnippet.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Css: () => Css,
          Html: () => Html,
          Javascript: () => Javascript,
          Json: () => Json,
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
          title: 'Molecules/CodeSnippet',
          component: _src__WEBPACK_IMPORTED_MODULE_1__.Oi,
        },
        Html = args =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _src__WEBPACK_IMPORTED_MODULE_1__.Oi,
            { ...args },
          );
      (Html.displayName = 'Html'),
        (Html.args = {
          language: _src__WEBPACK_IMPORTED_MODULE_1__.Pw.HTML,
          data: '<div>\n  <p>Hello, world!</p>\n</div>',
        });
      const Json = args =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _src__WEBPACK_IMPORTED_MODULE_1__.Oi,
          { ...args },
        );
      (Json.displayName = 'Json'),
        (Json.args = {
          language: _src__WEBPACK_IMPORTED_MODULE_1__.Pw.JSON,
          data: '{\n    "success": true,\n    "error": null,\n    "response" : [\n      {\n        "type": "Feature",\n        "id": "44.96,-93.37",\n        "geometry": {\n          "type": "Point",\n          "coordinates": [\n            -93.27,\n            44.96\n          ]\n        }\n      }\n    ]\n  }',
        });
      const Css = args =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _src__WEBPACK_IMPORTED_MODULE_1__.Oi,
          { ...args },
        );
      (Css.displayName = 'Css'),
        (Css.args = {
          language: _src__WEBPACK_IMPORTED_MODULE_1__.Pw.CSS,
          data: 'a {\n    color: "red"\n}',
        });
      const Javascript = args =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _src__WEBPACK_IMPORTED_MODULE_1__.Oi,
          { ...args },
        );
      (Javascript.displayName = 'Javascript'),
        (Javascript.args = {
          language: _src__WEBPACK_IMPORTED_MODULE_1__.Pw.JAVASCRIPT,
          data: "console.log('Hello, World');",
        }),
        (Html.parameters = {
          ...Html.parameters,
          docs: {
            ...Html.parameters?.docs,
            source: {
              originalSource: 'args => <CodeSnippet {...args} />',
              ...Html.parameters?.docs?.source,
            },
          },
        }),
        (Json.parameters = {
          ...Json.parameters,
          docs: {
            ...Json.parameters?.docs,
            source: {
              originalSource: 'args => <CodeSnippet {...args} />',
              ...Json.parameters?.docs?.source,
            },
          },
        }),
        (Css.parameters = {
          ...Css.parameters,
          docs: {
            ...Css.parameters?.docs,
            source: {
              originalSource: 'args => <CodeSnippet {...args} />',
              ...Css.parameters?.docs?.source,
            },
          },
        }),
        (Javascript.parameters = {
          ...Javascript.parameters,
          docs: {
            ...Javascript.parameters?.docs,
            source: {
              originalSource: 'args => <CodeSnippet {...args} />',
              ...Javascript.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ['Html', 'Json', 'Css', 'Javascript'];
      try {
        (Html.displayName = 'Html'),
          (Html.__docgenInfo = {
            description: '',
            displayName: 'Html',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/pages/molecules/CodeSnippet.stories.tsx#Html'
            ] = {
              docgenInfo: Html.__docgenInfo,
              name: 'Html',
              path: 'stories/pages/molecules/CodeSnippet.stories.tsx#Html',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Json.displayName = 'Json'),
          (Json.__docgenInfo = {
            description: '',
            displayName: 'Json',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/pages/molecules/CodeSnippet.stories.tsx#Json'
            ] = {
              docgenInfo: Json.__docgenInfo,
              name: 'Json',
              path: 'stories/pages/molecules/CodeSnippet.stories.tsx#Json',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Css.displayName = 'Css'),
          (Css.__docgenInfo = {
            description: '',
            displayName: 'Css',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/pages/molecules/CodeSnippet.stories.tsx#Css'
            ] = {
              docgenInfo: Css.__docgenInfo,
              name: 'Css',
              path: 'stories/pages/molecules/CodeSnippet.stories.tsx#Css',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Javascript.displayName = 'Javascript'),
          (Javascript.__docgenInfo = {
            description: '',
            displayName: 'Javascript',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/pages/molecules/CodeSnippet.stories.tsx#Javascript'
            ] = {
              docgenInfo: Javascript.__docgenInfo,
              name: 'Javascript',
              path: 'stories/pages/molecules/CodeSnippet.stories.tsx#Javascript',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
