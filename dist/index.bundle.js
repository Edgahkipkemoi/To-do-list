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

eval("const tasks = [\r\n    {\r\n      description: 'Todays To Do',\r\n      completed: false,\r\n      index: 1,\r\n    },\r\n    {\r\n      description: 'Add to your list...',\r\n      completed: false,\r\n      index: 2,\r\n    },\r\n    {\r\n      description: 'wash the dishes',\r\n      completed: true,\r\n      index: 3,\r\n    },\r\n    {\r\n      description: 'complete To Do list project',\r\n      completed: false,\r\n      index: 4,\r\n    },\r\n    {\r\n      description: 'Clear all completed',\r\n      completed: false,\r\n      index: 5,\r\n    },\r\n  ];\r\n  \r\n  function renderTasks() {\r\n    const todoList = document.getElementById('todo-list');\r\n  \r\n    tasks.forEach((task) => {\r\n      const listItem = document.createElement('li');\r\n      listItem.textContent = task.description;\r\n      todoList.appendChild(listItem);\r\n    });\r\n  }\r\n  \r\n  document.addEventListener('DOMContentLoaded', renderTasks);\r\n  \n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);