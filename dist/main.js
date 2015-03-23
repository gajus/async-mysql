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

    return connection;
};

module.exports = amysql;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7OztBQUViLElBQUksTUFBTSxHQUFHLEVBQUU7SUFDWCxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUN4QixlQUFlLFlBQUEsQ0FBQzs7QUFFcEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxNQUFNOzs7O29EQUNuQixVQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDMUMsd0JBQUksRUFBRSxZQUFBLENBQUM7O0FBRVAsc0JBQUUsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRXBDLHNCQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQ2hCLDRCQUFJLEdBQUcsRUFBRTtBQUNMLGtDQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt5QkFDMUIsTUFBTTtBQUNILG1DQUFPLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUJBQ2hDO3FCQUNKLENBQUMsQ0FBQztpQkFDTixDQUFDOzs7Ozs7O0NBQ0wsQ0FBQzs7QUFFRixlQUFlLEdBQUcsVUFBVSxFQUFFLEVBQUU7OztBQUM1QixRQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRXBCLGNBQVUsQ0FBQyxLQUFLLEdBQUcsb0JBQU8sR0FBRyxFQUFFLE1BQU07Ozs7d0RBQzFCLFVBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMxQywwQkFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUksRUFBRTtBQUN2QyxnQ0FBSSxHQUFHLEVBQUU7QUFDTCxzQ0FBTSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NkJBQzFCLE1BQU07QUFDSCx1Q0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUNqQjt5QkFDSixDQUFDLENBQUM7cUJBQ04sQ0FBQzs7Ozs7OztLQUNMLENBQUM7O0FBRUYsV0FBTyxVQUFVLENBQUM7Q0FDckIsQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgYW15c3FsID0ge30sXG4gICAgbXlzcWwgPSByZXF1aXJlKCdteXNxbCcpLFxuICAgIGFzeW5jQ29ubmVjdGlvbjtcblxuYW15c3FsLmNvbm5lY3QgPSBhc3luYyAoY29uZmlnKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbGV0IGRiO1xuXG4gICAgICAgIGRiID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbihjb25maWcpO1xuXG4gICAgICAgIGRiLmNvbm5lY3QoKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYXN5bmNDb25uZWN0aW9uKGRiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuYXN5bmNDb25uZWN0aW9uID0gZnVuY3Rpb24gKGRiKSB7XG4gICAgbGV0IGNvbm5lY3Rpb24gPSB7fTtcblxuICAgIGNvbm5lY3Rpb24ucXVlcnkgPSBhc3luYyAoc3FsLCB2YWx1ZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGRiLnF1ZXJ5KHNxbCwgdmFsdWVzLCBmdW5jdGlvbiAoZXJyLCByb3dzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVycikpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm93cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gY29ubmVjdGlvbjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYW15c3FsO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9