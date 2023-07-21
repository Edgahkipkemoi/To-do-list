/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const tasks = [\n  {\n    description: 'Todays To Do',\n    completed: false,\n    index: 1,\n  },\n  {\n    description: 'Add to your list...',\n    completed: false,\n    index: 2,\n  },\n  {\n    description: 'wash the dishes',\n    completed: true,\n    index: 3,\n  },\n  {\n    description: 'complete To Do list project',\n    completed: false,\n    index: 4,\n  },\n  {\n    description: 'Clear all completed',\n    completed: false,\n    index: 5,\n  },\n];\n\nfunction renderTasks() {\n  const todoList = document.getElementById('todo-list');\n\n  tasks.forEach((task) => {\n    const listItem = document.createElement('li');\n    listItem.textContent = task.description;\n    todoList.appendChild(listItem);\n  });\n}\n\ndocument.addEventListener('DOMContentLoaded', renderTasks);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);