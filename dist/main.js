"use strict";

var _core = require("babel-runtime/core-js")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var mysql = {};

mysql.foo = function callee$0$0() {
    return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                return context$1$0.abrupt("return", new _core.Promise(function (resolve) {
                    setImmediate(function () {
                        resolve("FOO");
                    });
                }));

            case 1:
            case "end":
                return context$1$0.stop();
        }
    }, null, this);
};

module.exports = mysql;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7QUFFYixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7O0FBRWYsS0FBSyxDQUFDLEdBQUcsR0FBRzs7OztvREFDRCxVQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBSztBQUM1QixnQ0FBWSxDQUFDLFlBQVk7QUFDckIsK0JBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDbEIsQ0FBQyxDQUFDO2lCQUNOLENBQUM7Ozs7Ozs7Q0FDTCxDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmxldCBteXNxbCA9IHt9O1xuXG5teXNxbC5mb28gPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldEltbWVkaWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNvbHZlKCdGT08nKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG15c3FsO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9