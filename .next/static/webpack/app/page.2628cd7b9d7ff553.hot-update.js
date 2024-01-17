"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/GPTAnswer.tsx":
/*!**********************************!*\
  !*** ./components/GPTAnswer.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_CircularProgress_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,CircularProgress,TextareaAutosize!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_CircularProgress_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,CircularProgress,TextareaAutosize!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/CircularProgress/CircularProgress.js\");\n/* harmony import */ var _barrel_optimize_names_Box_CircularProgress_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,CircularProgress,TextareaAutosize!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js\");\n/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubmitButton */ \"(app-pages-browser)/./components/SubmitButton.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// components/GPTAnswer.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst GPTAnswer = (param)=>{\n    let { promptText } = param;\n    _s();\n    const [gptResponse, setGptResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleButtonClick = async ()=>{\n        setLoading(true);\n        try {\n            const prompt = promptText; // Replace with the actual prompt\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://4b8xlsz8m3.execute-api.eu-north-1.amazonaws.com/prod/generate-suggestion\", {\n                params: {\n                    prompt\n                }\n            });\n            setGptResponse(response.data.suggestion);\n        } catch (error) {\n            if (axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAxiosError(error) && error.response) {\n                console.error(\"Error response:\", error.response.data);\n            } else {\n                console.error(\"There was an error!\", error);\n            }\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_CircularProgress_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            gap: 2\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SubmitButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleButtonClick,\n                text: loading ? \"Loading...\" : \"Ask to GPT!\",\n                variant: \"contained\",\n                disabled: loading,\n                dimension: \"2D\",\n                bgColor: \"success\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\onat.postaci\\\\Desktop\\\\dss-project\\\\components\\\\GPTAnswer.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_CircularProgress_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\onat.postaci\\\\Desktop\\\\dss-project\\\\components\\\\GPTAnswer.tsx\",\n                lineNumber: 45,\n                columnNumber: 19\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_CircularProgress_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextareaAutosize, {\n                minRows: 5,\n                placeholder: \"GPT response will appear here...\",\n                style: {\n                    width: \"100%\",\n                    border: \"1px solid #ccc\",\n                    borderRadius: \"4px\",\n                    padding: \"10px\",\n                    fontSize: \"16px\",\n                    resize: \"none\"\n                },\n                value: gptResponse,\n                readOnly: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\onat.postaci\\\\Desktop\\\\dss-project\\\\components\\\\GPTAnswer.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\onat.postaci\\\\Desktop\\\\dss-project\\\\components\\\\GPTAnswer.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GPTAnswer, \"Axd/lPINa8MPXlKKkGMRoOzxat8=\");\n_c = GPTAnswer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GPTAnswer);\nvar _c;\n$RefreshReg$(_c, \"GPTAnswer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvR1BUQW5zd2VyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkI7OztBQUNhO0FBQ3dDO0FBQ3RDO0FBQ2hCO0FBTzFCLE1BQU1PLFlBQVk7UUFBQyxFQUFFQyxVQUFVLEVBQVU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQVU7SUFFaEQsTUFBTVksb0JBQW9CO1FBQ3hCRCxXQUFXO1FBQ1gsSUFBSTtZQUNGLE1BQU1FLFNBQVNOLFlBQVksaUNBQWlDO1lBQzVELE1BQU1PLFdBQVcsTUFBTVQsNkNBQUtBLENBQUNVLEdBQUcsQ0FBQyxvRkFBb0Y7Z0JBQ25IQyxRQUFRO29CQUFFSDtnQkFBTztZQUNuQjtZQUNBSixlQUFlSyxTQUFTRyxJQUFJLENBQUNDLFVBQVU7UUFDekMsRUFBRSxPQUFPQyxPQUFPO1lBQ2QsSUFBSWQsNkNBQUtBLENBQUNlLFlBQVksQ0FBQ0QsVUFBVUEsTUFBTUwsUUFBUSxFQUFFO2dCQUMvQ08sUUFBUUYsS0FBSyxDQUFDLG1CQUFtQkEsTUFBTUwsUUFBUSxDQUFDRyxJQUFJO1lBQ3RELE9BQU87Z0JBQ0xJLFFBQVFGLEtBQUssQ0FBQyx1QkFBdUJBO1lBQ3ZDO1FBQ0YsU0FBVTtZQUNSUixXQUFXO1FBQ2I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDVixpSEFBR0E7UUFBQ3FCLElBQUk7WUFBRUMsU0FBUztZQUFRQyxlQUFlO1lBQVVDLEtBQUs7UUFBRTs7MEJBQzFELDhEQUFDckIscURBQVlBO2dCQUNYc0IsU0FBU2Q7Z0JBQ1RlLE1BQU1qQixVQUFVLGVBQWU7Z0JBQy9Ca0IsU0FBUTtnQkFDUkMsVUFBVW5CO2dCQUNWb0IsV0FBVTtnQkFDVkMsU0FBUTs7Ozs7O1lBRVRyQix5QkFBVyw4REFBQ1AsaUhBQWdCQTs7Ozs7MEJBQzdCLDhEQUFDRCx1SEFBZ0JBO2dCQUNmOEIsU0FBUztnQkFDVEMsYUFBWTtnQkFDWkMsT0FBTztvQkFDTEMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsY0FBYztvQkFDZEMsU0FBUztvQkFDVEMsVUFBVTtvQkFDVkMsUUFBUTtnQkFDVjtnQkFDQUMsT0FBT2pDO2dCQUNQa0MsUUFBUTs7Ozs7Ozs7Ozs7O0FBSWhCO0dBbERNcEM7S0FBQUE7QUFvRE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HUFRBbnN3ZXIudHN4PzhjZDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9HUFRBbnN3ZXIudHN4XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHRhcmVhQXV0b3NpemUsIENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tICcuL1N1Ym1pdEJ1dHRvbic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIHByb21wdFRleHQ6IHN0cmluZztcclxuICAgIGlzRGF0YVJlY2VpdmVkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBHUFRBbnN3ZXIgPSAoeyBwcm9tcHRUZXh0IH06IElQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtncHRSZXNwb25zZSwgc2V0R3B0UmVzcG9uc2VdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwcm9tcHQgPSBwcm9tcHRUZXh0OyAvLyBSZXBsYWNlIHdpdGggdGhlIGFjdHVhbCBwcm9tcHRcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vNGI4eGxzejhtMy5leGVjdXRlLWFwaS5ldS1ub3J0aC0xLmFtYXpvbmF3cy5jb20vcHJvZC9nZW5lcmF0ZS1zdWdnZXN0aW9uJywge1xyXG4gICAgICAgIHBhcmFtczogeyBwcm9tcHQgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2V0R3B0UmVzcG9uc2UocmVzcG9uc2UuZGF0YS5zdWdnZXN0aW9uKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpICYmIGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVzcG9uc2U6JywgZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIScsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAyIH19PlxyXG4gICAgICA8U3VibWl0QnV0dG9uIFxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfSBcclxuICAgICAgICB0ZXh0PXtsb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ0FzayB0byBHUFQhJ30gXHJcbiAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJyBcclxuICAgICAgICBkaXNhYmxlZD17bG9hZGluZ30gXHJcbiAgICAgICAgZGltZW5zaW9uPScyRCcgXHJcbiAgICAgICAgYmdDb2xvcj0nc3VjY2VzcydcclxuICAgICAgLz5cclxuICAgICAge2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcbiAgICAgIDxUZXh0YXJlYUF1dG9zaXplXHJcbiAgICAgICAgbWluUm93cz17NX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkdQVCByZXNwb25zZSB3aWxsIGFwcGVhciBoZXJlLi4uXCJcclxuICAgICAgICBzdHlsZT17eyBcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsIFxyXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLCBcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsIFxyXG4gICAgICAgICAgcGFkZGluZzogJzEwcHgnLCBcclxuICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgICByZXNpemU6ICdub25lJ1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmFsdWU9e2dwdFJlc3BvbnNlfVxyXG4gICAgICAgIHJlYWRPbmx5XHJcbiAgICAgIC8+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR1BUQW5zd2VyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIlRleHRhcmVhQXV0b3NpemUiLCJDaXJjdWxhclByb2dyZXNzIiwiU3VibWl0QnV0dG9uIiwiYXhpb3MiLCJHUFRBbnN3ZXIiLCJwcm9tcHRUZXh0IiwiZ3B0UmVzcG9uc2UiLCJzZXRHcHRSZXNwb25zZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJwcm9tcHQiLCJyZXNwb25zZSIsImdldCIsInBhcmFtcyIsImRhdGEiLCJzdWdnZXN0aW9uIiwiZXJyb3IiLCJpc0F4aW9zRXJyb3IiLCJjb25zb2xlIiwic3giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm9uQ2xpY2siLCJ0ZXh0IiwidmFyaWFudCIsImRpc2FibGVkIiwiZGltZW5zaW9uIiwiYmdDb2xvciIsIm1pblJvd3MiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwid2lkdGgiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJyZXNpemUiLCJ2YWx1ZSIsInJlYWRPbmx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/GPTAnswer.tsx\n"));

/***/ })

});