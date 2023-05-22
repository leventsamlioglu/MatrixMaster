/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
/* eslint-disable no-eval */
/* eslint-disable camelcase */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 'use strict'
  /******/ const __webpack_modules__ = ({

    /***/ './src/app.js':
    /*! ********************!*\
  !*** ./src/app.js ***!
  \********************/
    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.mjs */ \"./src/display.mjs\");\n\n// Variables\nconst numberButtons = document.querySelectorAll('[data-number]')\nconst operationButtons = document.querySelectorAll('[data-operation]')\nconst equalsButton = document.querySelector('[data-equals]')\nconst deleteButton = document.querySelector('[data-delete]')\nconst allClearButton = document.querySelector('[data-all-clear]')\nconst previousOperandTextElement = document.querySelector(\n  '[data-previous-operand]'\n)\n\n// Initials\n\nlet array1 = []\nlet array2 = []\nlet operand = ''\nlet operandState = false\nlet equalState = false\n_display_mjs__WEBPACK_IMPORTED_MODULE_0__.currentOperandTextElement.innerHTML = 0\npreviousOperandTextElement.innerHTML = ''\n\nfunction topScreen () {\n  previousOperandTextElement.innerHTML =\n    array2.join('') + operand + array1.join('')\n}\n\n// RESET\n\nfunction reset () {\n  array1 = []\n  array2 = []\n  operand = ''\n  operandState = false\n  equalState = false\n  _display_mjs__WEBPACK_IMPORTED_MODULE_0__.currentOperandTextElement.innerHTML = 0\n  previousOperandTextElement.innerHTML = ''\n}\n\n// BUTTONS\n\n// Number buttons\n\nnumberButtons.forEach((button) => {\n  button.addEventListener('click', () => {\n    if (equalState) reset()\n    array1.push(button.innerText)\n    _display_mjs__WEBPACK_IMPORTED_MODULE_0__.currentOperandTextElement.innerHTML = Number(array1.join(''))\n  })\n})\n\n// Operation buttons\n\noperationButtons.forEach((button) => {\n  button.addEventListener('click', () => {\n    if (operandState) {\n      return\n    }\n\n    // for (var i = 0; i < array1.length; i++) {\n    //   array2.push(array1[i]);\n    //   (array1.splice(i, 1));\n    //   i--;\n    // }\n\n    array2 = [...array1]\n    array1 = []\n\n    operand = button.innerHTML\n    operandState = true\n    previousOperandTextElement.innerHTML = array2.join('') + operand\n    _display_mjs__WEBPACK_IMPORTED_MODULE_0__.currentOperandTextElement.innerHTML = 0\n  })\n})\n\n// Equal button\n\nequalsButton.addEventListener('click', () => {\n  equalState = true\n\n  switch (operand) {\n    case '+': {\n      ;(0,_display_mjs__WEBPACK_IMPORTED_MODULE_0__.display)(Number(array2.join('')) + Number(array1.join('')))\n      // display((Number(...array2) + Number(...array1)));\n      topScreen()\n      break\n    }\n    case '-': {\n      (0,_display_mjs__WEBPACK_IMPORTED_MODULE_0__.display)(Number(array2.join('')) - Number(array1.join('')))\n      topScreen()\n      break\n    }\n    case '*': {\n      (0,_display_mjs__WEBPACK_IMPORTED_MODULE_0__.display)(Number(array2.join('')) * Number(array1.join('')))\n      topScreen()\n      break\n    }\n    case '÷': {\n      (0,_display_mjs__WEBPACK_IMPORTED_MODULE_0__.display)(Number(array2.join('')) / Number(array1.join('')))\n      topScreen()\n      break\n    }\n    default:\n  }\n})\n\n// Clear button\n\nallClearButton.addEventListener('click', () => {\n  reset()\n  _display_mjs__WEBPACK_IMPORTED_MODULE_0__.currentOperandTextElement.innerHTML = 0\n  previousOperandTextElement.innerHTML = ''\n})\n\n// Delete button\n\ndeleteButton.addEventListener('click', () => {\n  array1.pop()\n  _display_mjs__WEBPACK_IMPORTED_MODULE_0__.currentOperandTextElement.innerHTML = Number(array1.join(''))\n})\n\n\n//# sourceURL=webpack://calculator/./src/app.js?")
      /***/ },

    /***/ './src/display.mjs':
    /*! *************************!*\
  !*** ./src/display.mjs ***!
  \*************************/
    /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentOperandTextElement: () => (/* binding */ currentOperandTextElement),\n/* harmony export */   display: () => (/* binding */ display)\n/* harmony export */ });\n// DISPLAY\n\nconst currentOperandTextElement = document.querySelector(\n  '[data-current-operand]'\n)\n\nfunction display (result) {\n  currentOperandTextElement.innerHTML = result.toFixed(2)\n}\n\n\n//# sourceURL=webpack://calculator/./src/display.mjs?")
      /***/ }

    /******/ 	})
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	const __webpack_module_cache__ = {}
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__ (moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		const cachedModule = __webpack_module_cache__[moduleId]
    /******/ 		if (cachedModule !== undefined) {
      /******/ 			return cachedModule.exports
      /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		const module = __webpack_module_cache__[moduleId] = {
      /******/ 			// no module.id needed
      /******/ 			// no module.loaded needed
      /******/ 			exports: {}
      /******/ 		}
    /******/
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__)
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports
    /******/ 	}
  /******/
  /************************************************************************/
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
    /******/ 		// define getter functions for harmony exports
    /******/ 		__webpack_require__.d = (exports, definition) => {
      /******/ 			for (const key in definition) {
        /******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
          /******/ 				}
        /******/ 			}
      /******/ 		}
    /******/ 	})();
  /******/
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
    /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/ 	})();
  /******/
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
    /******/ 		// define __esModule on exports
    /******/ 		__webpack_require__.r = (exports) => {
      /******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/ 			}
      /******/ 			Object.defineProperty(exports, '__esModule', { value: true })
      /******/ 		}
    /******/ 	})()
  /******/
  /************************************************************************/
  /******/
  /******/ 	// startup
  /******/ 	// Load entry module and return exports
  /******/ 	// This entry module can't be inlined because the eval devtool is used.
  /******/ 	const __webpack_exports__ = __webpack_require__('./src/app.js')
/******/
/******/ })()
