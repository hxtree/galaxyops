/*! For license information please see pages-molecules-FileUpload-stories.bacb8a1a.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunk_cats_cradle_design_system =
  self.webpackChunk_cats_cradle_design_system || []).push([
  [988],
  {
    './stories/pages/molecules/FileUpload.stories.tsx': (
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
      var _src_FileUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/FileUpload.tsx',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Molecules/FileUpload',
          component: _src_FileUpload__WEBPACK_IMPORTED_MODULE_1__.p,
        },
        Default = () =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _src_FileUpload__WEBPACK_IMPORTED_MODULE_1__.p,
            {},
          );
      (Default.displayName = 'Default'),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource: '() => <FileUpload />',
              ...Default.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ['Default'];
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
    '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js':
      (__unused_webpack_module, exports, __webpack_require__) => {
        var f = __webpack_require__(
            '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
          ),
          k = Symbol.for('react.element'),
          l = Symbol.for('react.fragment'),
          m = Object.prototype.hasOwnProperty,
          n =
            f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          p = { key: !0, ref: !0, __self: !0, __source: !0 };
        function q(c, a, g) {
          var b,
            d = {},
            e = null,
            h = null;
          for (b in (void 0 !== g && (e = '' + g),
          void 0 !== a.key && (e = '' + a.key),
          void 0 !== a.ref && (h = a.ref),
          a))
            m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
          if (c && c.defaultProps)
            for (b in (a = c.defaultProps)) void 0 === d[b] && (d[b] = a[b]);
          return {
            $$typeof: k,
            type: c,
            key: e,
            ref: h,
            props: d,
            _owner: n.current,
          };
        }
        (exports.Fragment = l), (exports.jsx = q), (exports.jsxs = q);
      },
    '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__(
          '../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js',
        );
      },
  },
]);
