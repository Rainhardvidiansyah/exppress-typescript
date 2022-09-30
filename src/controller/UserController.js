"use strict";
exports.__esModule = true;
var data = [
    { id: 1, "name": "rainhard" },
    { id: 2, "name": "Maulida" },
    { id: 3, "name": "Hoki" },
    { id: 4, "name": "Reno" },
    { id: 5, "name": "Kucing" },
];
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.index = function (req, res) {
        return res.send(data);
    };
    UserController.prototype.create = function (req, res) {
        var _a = req.body, id = _a.id, name = _a.name;
        data.push({ id: id, name: name });
        console.log("Success in saving id = ".concat(id, ", and name = ").concat(name));
        return res.send(req.body);
    };
    UserController.prototype.show = function (req, res) {
        var id = req.params.id;
        var dataPerson = data.find(function (item) { return item.id == id; });
        console.log("The id is ".concat(id));
        return res.send(dataPerson);
    };
    UserController.prototype.update = function (req, res) {
        var id = req.params.id;
        var name = req.body.name;
        var dataperson = data.find(function (item) { return item.id == id; });
        dataperson.name = name;
        var new_name = dataperson.name;
        return res.send(new_name);
    };
    UserController.prototype["delete"] = function (req, res) {
        var id = req.params.id;
        var newdata = data.filter(function (item) { return item.id != id; });
        var newDataPerson = newdata;
        return res.send(newDataPerson);
    };
    return UserController;
}());
exports["default"] = new UserController();
