"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_ThumbUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ThumbUp */ \"./node_modules/@mui/icons-material/ThumbUp.js\");\n/* harmony import */ var _mui_icons_material_ThumbDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ThumbDown */ \"./node_modules/@mui/icons-material/ThumbDown.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ \"./node_modules/@mui/icons-material/ArrowBack.js\");\n/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ArrowForward */ \"./node_modules/@mui/icons-material/ArrowForward.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    var data = param.data;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_3___default().useState(0), 2), browsingState = ref[0], setBrowsingState = ref[1];\n    var toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    var currentData = data.data[browsingState];\n    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(function() {\n        if (true) {\n            var authenticated = localStorage.getItem(\"token\");\n        }\n    }, []);\n    var nextPost = function() {\n        if (data.data.length > browsingState + 1) {\n            setTimeout(function() {\n                setBrowsingState(browsingState + 1);\n            }, 500);\n        } else {\n            toast({\n                title: \"There is no more posts!\",\n                status: \"error\",\n                variant: \"left-accent\",\n                duration: 9000,\n                isClosable: true\n            });\n        }\n    };\n    var previousPost = function() {\n        if (browsingState != 0) {\n            setTimeout(function() {\n                setBrowsingState(browsingState - 1);\n            }, 500);\n        } else {\n            toast({\n                title: \"There is no more posts!\",\n                status: \"error\",\n                variant: \"left-accent\",\n                duration: 9000,\n                isClosable: true\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Devinder | Home Page\"\n                    }, void 0, false, {\n                        fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Devinder a dating app for Devs.\"\n                    }, void 0, false, {\n                        fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-screen bg-gray-700 h-screen lg:px-36 px-8 py-8 flex flex-col items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rounded-lg bg-gray-900 text-white p-8 py-6 lg:w-3/6 t w-full \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-bold text-green-500 font-mono mb-6\",\n                            children: currentData.title\n                        }, void 0, false, {\n                            fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                            src: \"https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=coffeescript&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=JetBrains+Mono&fs=15.5px&lh=163%25&si=false&es=2x&wm=false&code=\".concat(currentData.code),\n                            sandbox: \"allow-scripts allow-same-origin\",\n                            className: \"w-full h-fit outline-none\"\n                        }, void 0, false, {\n                            fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full flex flex-row justify-evenly mt-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-blue-600 w-fit p-8 flex flex-row items-center justify-center cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ThumbUp__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"ml-3 font-mono font-bold\",\n                                            children: currentData.likes.length\n                                        }, void 0, false, {\n                                            fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-gray-600 w-fit p-8 flex flex-row items-center justify-center cursor-pointer text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ThumbDown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"ml-3 font-mono font-bold\",\n                                            children: currentData.dislikes.length\n                                        }, void 0, false, {\n                                            fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full mt-8 bg-gray-200 rounded-full h-2.5 dark:bg-gray-600\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-blue-600 h-2.5 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80\",\n                                style: {\n                                    width: \"\".concat(currentData.likes.length / currentData.dislikes.length * 100, \"%\"),\n                                    maxWidth: \"100%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full flex flex-row items-center justify-evenly font-mono mt-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: previousPost,\n                                    className: \"bg-gray-600 w-fit flex flex-row items-center justify-center cursor-pointer text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-3 text-center \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            className: \"text-lg mr-1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Previous\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-sm font-mono text-blue-400\",\n                                    children: [\n                                        \"Post Id: \",\n                                        currentData._id\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: nextPost,\n                                    className: \"bg-gray-600 w-fit flex flex-row items-center justify-center cursor-pointer text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-3 text-center \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            className: \"text-lg mr-1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"Next\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/oubramium/Documents/Projects/devinder/frontend/pages/index.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"kFauTht8TjMmI3oUSSQ0asOk7Eg=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTs4Q0FDL0UsOERBQUNSLFFBQU07b0NBQUNPLE9BQU8sRUFBRTlCLFFBQVE7b0NBQUVpQixTQUFTLEVBQUMsOFdBQWlYOztzREFDcFosOERBQUM5Qix3RUFBZ0I7NENBQUM4QixTQUFTLEVBQUMsY0FBYzs7Ozs7Z0RBQUc7d0NBQUEsTUFFL0M7Ozs7Ozt3Q0FBUzs7Ozs7O2dDQUNMOzs7Ozs7d0JBQ0Y7Ozs7O29CQUNEOzs7Ozs7WUFDSCxDQUNOO0NBQ0g7R0FwR3VCNUIsSUFBSTs7UUFFWkosc0RBQVE7OztBQUZBSSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgVGh1bWJVcEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVGh1bWJVcFwiO1xuaW1wb3J0IFRodW1iRG93bkljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVGh1bWJEb3duXCI7XG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgQXJyb3dCYWNrSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tcIjtcbmltcG9ydCBBcnJvd0ZvcndhcmRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGF0YSB9KSB7XG4gIGNvbnN0IFticm93c2luZ1N0YXRlLCBzZXRCcm93c2luZ1N0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XG4gIGNvbnN0IGN1cnJlbnREYXRhID0gZGF0YS5kYXRhW2Jyb3dzaW5nU3RhdGVdO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zdCBhdXRoZW50aWNhdGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcbiAgICB9XG4gIH0sIFtdKTtcbiBcbiAgY29uc3QgbmV4dFBvc3QgPSAoKSA9PiB7XG4gICAgaWYgKGRhdGEuZGF0YS5sZW5ndGggPiBicm93c2luZ1N0YXRlICsgMSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEJyb3dzaW5nU3RhdGUoYnJvd3NpbmdTdGF0ZSArIDEpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJUaGVyZSBpcyBubyBtb3JlIHBvc3RzIVwiLFxuICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcbiAgICAgICAgdmFyaWFudDogXCJsZWZ0LWFjY2VudFwiLFxuICAgICAgICBkdXJhdGlvbjogOTAwMCxcbiAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcHJldmlvdXNQb3N0ID0gKCkgPT4ge1xuICAgIGlmIChicm93c2luZ1N0YXRlICE9IDApIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRCcm93c2luZ1N0YXRlKGJyb3dzaW5nU3RhdGUgLSAxKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiVGhlcmUgaXMgbm8gbW9yZSBwb3N0cyFcIixcbiAgICAgICAgc3RhdHVzOiBcImVycm9yXCIsXG4gICAgICAgIHZhcmlhbnQ6IFwibGVmdC1hY2NlbnRcIixcbiAgICAgICAgZHVyYXRpb246IDkwMDAsXG4gICAgICAgIGlzQ2xvc2FibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5EZXZpbmRlciB8IEhvbWUgUGFnZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJEZXZpbmRlciBhIGRhdGluZyBhcHAgZm9yIERldnMuXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBiZy1ncmF5LTcwMCBoLXNjcmVlbiBsZzpweC0zNiBweC04IHB5LTggZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnICAgYmctZ3JheS05MDAgIHRleHQtd2hpdGUgcC04IHB5LTYgbGc6dy0zLzYgdCB3LWZ1bGwgIFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmVlbi01MDAgZm9udC1tb25vIG1iLTZcIj5cbiAgICAgICAgICAgIHtjdXJyZW50RGF0YS50aXRsZX1cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9jYXJib24ubm93LnNoL2VtYmVkP2JnPXJnYmElMjgxNzElMkMrMTg0JTJDKzE5NSUyQysxJTI5JnQ9c2V0aSZ3dD1zaGFycCZsPWNvZmZlZXNjcmlwdCZ3aWR0aD02ODAmZHM9ZmFsc2UmZHN5b2ZmPTIwcHgmZHNibHVyPTY4cHgmd2M9ZmFsc2Umd2E9dHJ1ZSZwdj0wcHgmcGg9MHB4JmxuPWZhbHNlJmZsPTEmZm09SmV0QnJhaW5zK01vbm8mZnM9MTUuNXB4JmxoPTE2MyUyNSZzaT1mYWxzZSZlcz0yeCZ3bT1mYWxzZSZjb2RlPSR7Y3VycmVudERhdGEuY29kZX1gfVxuICAgICAgICAgICAgc2FuZGJveD1cImFsbG93LXNjcmlwdHMgYWxsb3ctc2FtZS1vcmlnaW5cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZml0IG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1yb3cganVzdGlmeS1ldmVubHkgbXQtNlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCB3LWZpdCBwLTggZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgIGN1cnNvci1wb2ludGVyIHRleHQtd2hpdGUgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAwIHZpYS1ibHVlLTYwMCB0by1ibHVlLTcwMCBob3ZlcjpiZy1ncmFkaWVudC10by1iciBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwIHNoYWRvdy1sZyBzaGFkb3ctYmx1ZS01MDAvNTAgZGFyazpzaGFkb3ctbGcgZGFyazpzaGFkb3ctYmx1ZS04MDAvODAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIG1yLTIgbWItMiBcIj5cbiAgICAgICAgICAgICAgPFRodW1iVXBJY29uIC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTMgZm9udC1tb25vIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50RGF0YS5saWtlcy5sZW5ndGh9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTYwMCB3LWZpdCBwLTggZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgIGN1cnNvci1wb2ludGVyICB0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTUwMCB2aWEtZ3JheS02MDAgdG8tZ3JheS03MDAgaG92ZXI6YmctZ3JhZGllbnQtdG8tYnIgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWdyYXktMzAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTgwMCBzaGFkb3ctbGcgc2hhZG93LWdyYXktNTAwLzUwIGRhcms6c2hhZG93LWxnIGRhcms6c2hhZG93LWdyYXktODAwLzgwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTQgdGV4dC1jZW50ZXIgbXItMiBtYi0yXCI+XG4gICAgICAgICAgICAgIDxUaHVtYkRvd25JY29uIC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTMgZm9udC1tb25vIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50RGF0YS5kaXNsaWtlcy5sZW5ndGh9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG10LTggYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIGgtMi41IGRhcms6YmctZ3JheS02MDBcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgaC0yLjUgcm91bmRlZC1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwMCB2aWEtYmx1ZS02MDAgdG8tYmx1ZS03MDAgaG92ZXI6YmctZ3JhZGllbnQtdG8tYnIgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMCBzaGFkb3ctbGcgc2hhZG93LWJsdWUtNTAwLzUwIGRhcms6c2hhZG93LWxnIGRhcms6c2hhZG93LWJsdWUtODAwLzgwXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7XG4gICAgICAgICAgICAgICAgICAoY3VycmVudERhdGEubGlrZXMubGVuZ3RoIC8gY3VycmVudERhdGEuZGlzbGlrZXMubGVuZ3RoKSAqIDEwMFxuICAgICAgICAgICAgICAgIH0lYCxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHkgZm9udC1tb25vIG10LTZcIj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJldmlvdXNQb3N0IH0gY2xhc3NOYW1lPVwiYmctZ3JheS02MDAgdy1maXQgIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICBjdXJzb3ItcG9pbnRlciAgdGV4dC13aGl0ZSBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JheS01MDAgdmlhLWdyYXktNjAwIHRvLWdyYXktNzAwIGhvdmVyOmJnLWdyYWRpZW50LXRvLWJyIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ncmF5LTMwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS04MDAgc2hhZG93LWxnIHNoYWRvdy1ncmF5LTUwMC81MCBkYXJrOnNoYWRvdy1sZyBkYXJrOnNoYWRvdy1ncmF5LTgwMC84MCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0zIHRleHQtY2VudGVyIFwiPlxuICAgICAgICAgICAgICA8QXJyb3dCYWNrSWNvbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1yLTFcIiAvPlxuICAgICAgICAgICAgICBQcmV2aW91c1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1vbm8gdGV4dC1ibHVlLTQwMFwiPlBvc3QgSWQ6IHtjdXJyZW50RGF0YS5faWR9PC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bmV4dFBvc3R9IGNsYXNzTmFtZT1cImJnLWdyYXktNjAwIHctZml0ICBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgY3Vyc29yLXBvaW50ZXIgIHRleHQtd2hpdGUgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktNTAwIHZpYS1ncmF5LTYwMCB0by1ncmF5LTcwMCBob3ZlcjpiZy1ncmFkaWVudC10by1iciBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctZ3JheS0zMDAgZGFyazpmb2N1czpyaW5nLWdyYXktODAwIHNoYWRvdy1sZyBzaGFkb3ctZ3JheS01MDAvNTAgZGFyazpzaGFkb3ctbGcgZGFyazpzaGFkb3ctZ3JheS04MDAvODAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMyB0ZXh0LWNlbnRlciBcIj5cbiAgICAgICAgICAgICAgPEFycm93Rm9yd2FyZEljb24gY2xhc3NOYW1lPVwidGV4dC1sZyBtci0xXCIgLz5cbiAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo5MDAwL2ZlZWRcIik7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9O1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIlRodW1iVXBJY29uIiwiVGh1bWJEb3duSWNvbiIsInVzZVRvYXN0IiwiQXJyb3dCYWNrSWNvbiIsIkFycm93Rm9yd2FyZEljb24iLCJSZWFjdCIsIkhvbWUiLCJkYXRhIiwidXNlU3RhdGUiLCJicm93c2luZ1N0YXRlIiwic2V0QnJvd3NpbmdTdGF0ZSIsInRvYXN0IiwiY3VycmVudERhdGEiLCJ1c2VFZmZlY3QiLCJhdXRoZW50aWNhdGVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm5leHRQb3N0IiwibGVuZ3RoIiwic2V0VGltZW91dCIsInRpdGxlIiwic3RhdHVzIiwidmFyaWFudCIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsInByZXZpb3VzUG9zdCIsImRpdiIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwiaWZyYW1lIiwic3JjIiwiY29kZSIsInNhbmRib3giLCJidXR0b24iLCJwIiwibGlrZXMiLCJkaXNsaWtlcyIsInN0eWxlIiwid2lkdGgiLCJtYXhXaWR0aCIsIm9uQ2xpY2siLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});