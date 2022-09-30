"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data = [
    { id: 1, "name": "rainhard" },
    { id: 2, "name": "Maulida" },
    { id: 3, "name": "Hoki" },
    { id: 4, "name": "Reno" },
    { id: 5, "name": "Kucing" },
];
class UserController {
    index(req, res) {
        return res.send(data);
    }
    create(req, res) {
        const { id, name } = req.body;
        data.push({ id, name });
        console.log(`Success in saving id = ${id}, and name = ${name}`);
        return res.send(req.body);
    }
    show(req, res) {
        const { id } = req.params;
        let dataPerson = data.find(item => item.id == id);
        console.log(`The id is ${id}`);
        return res.send(dataPerson);
    }
    update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        let dataperson = data.find(item => item.id == id);
        dataperson.name = name;
        let new_name = dataperson.name;
        return res.send(new_name);
    }
    delete(req, res) {
        const { id } = req.params;
        let newdata = data.filter(item => item.id != id);
        let newDataPerson = newdata;
        return res.send(newDataPerson);
    }
}
exports.default = new UserController();
