"use strict";

var _core = require("babel-runtime/core-js")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _this = this;

var amysql = {},
    mysql = require("mysql"),
    asyncConnection = undefined;

amysql.connect = function callee$0$0(config) {
    return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                return context$1$0.abrupt("return", new _core.Promise(function (resolve, reject) {
                    var db = undefined;

                    db = mysql.createConnection(config);

                    db.connect(function (err) {
                        if (err) {
                            reject(new Error(err));
                        } else {
                            resolve(asyncConnection(db));
                        }
                    });
                }));

            case 1:
            case "end":
                return context$1$0.stop();
        }
    }, null, _this);
};

asyncConnection = function (db) {
    var _this2 = this;

    var connection = {};

    /**
     * @param {String} sql
     * @param {Array} values
     */
    connection.query = function callee$1$0(sql, values) {
        return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    return context$2$0.abrupt("return", new _core.Promise(function (resolve, reject) {
                        db.query(sql, values, function (err, rows) {
                            if (err) {
                                reject(new Error(err));
                            } else {
                                resolve(rows);
                            }
                        });
                    }));

                case 1:
                case "end":
                    return context$2$0.stop();
            }
        }, null, _this2);
    };

    /**
     *
     */
    connection.end = function callee$1$1() {
        return _regeneratorRuntime.async(function callee$1$1$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    db.end(function (err) {
                        if (err) {
                            throw new Error(err);
                        }
                    });

                case 1:
                case "end":
                    return context$2$0.stop();
            }
        }, null, _this2);
    };

    return connection;
};

module.exports = amysql;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7OztBQUViLElBQUksTUFBTSxHQUFHLEVBQUU7SUFDWCxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUN4QixlQUFlLFlBQUEsQ0FBQzs7QUFFcEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxNQUFNOzs7O29EQUNuQixVQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDMUMsd0JBQUksRUFBRSxZQUFBLENBQUM7O0FBRVAsc0JBQUUsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRXBDLHNCQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQ2hCLDRCQUFJLEdBQUcsRUFBRTtBQUNMLGtDQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt5QkFDMUIsTUFBTTtBQUNILG1DQUFPLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUJBQ2hDO3FCQUNKLENBQUMsQ0FBQztpQkFDTixDQUFDOzs7Ozs7O0NBQ0wsQ0FBQzs7QUFFRixlQUFlLEdBQUcsVUFBVSxFQUFFLEVBQUU7OztBQUM1QixRQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7Ozs7OztBQU1wQixjQUFVLENBQUMsS0FBSyxHQUFHLG9CQUFPLEdBQUcsRUFBRSxNQUFNOzs7O3dEQUMxQixVQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDMUMsMEJBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDdkMsZ0NBQUksR0FBRyxFQUFFO0FBQ0wsc0NBQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzZCQUMxQixNQUFNO0FBQ0gsdUNBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDakI7eUJBQ0osQ0FBQyxDQUFDO3FCQUNOLENBQUM7Ozs7Ozs7S0FDTCxDQUFDOzs7OztBQUtGLGNBQVUsQ0FBQyxHQUFHLEdBQUc7Ozs7QUFDYixzQkFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRTtBQUNsQiw0QkFBSSxHQUFHLEVBQUU7QUFDTCxrQ0FBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDeEI7cUJBQ0osQ0FBQyxDQUFDOzs7Ozs7O0tBQ04sQ0FBQzs7QUFFRixXQUFPLFVBQVUsQ0FBQztDQUNyQixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmxldCBhbXlzcWwgPSB7fSxcbiAgICBteXNxbCA9IHJlcXVpcmUoJ215c3FsJyksXG4gICAgYXN5bmNDb25uZWN0aW9uO1xuXG5hbXlzcWwuY29ubmVjdCA9IGFzeW5jIChjb25maWcpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBsZXQgZGI7XG5cbiAgICAgICAgZGIgPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKGNvbmZpZyk7XG5cbiAgICAgICAgZGIuY29ubmVjdCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhc3luY0Nvbm5lY3Rpb24oZGIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5hc3luY0Nvbm5lY3Rpb24gPSBmdW5jdGlvbiAoZGIpIHtcbiAgICBsZXQgY29ubmVjdGlvbiA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNxbFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlc1xuICAgICAqL1xuICAgIGNvbm5lY3Rpb24ucXVlcnkgPSBhc3luYyAoc3FsLCB2YWx1ZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGRiLnF1ZXJ5KHNxbCwgdmFsdWVzLCBmdW5jdGlvbiAoZXJyLCByb3dzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVycikpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm93cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNvbm5lY3Rpb24uZW5kID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBkYi5lbmQoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNvbm5lY3Rpb247XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFteXNxbDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==