import {Request, Response} from "express";
import IUserControllerInterface from "./ControllerInterface";

let data:any[]= [
    {id: 1, "name": "rainhard"},
    {id: 2, "name": "Maulida"},
    {id: 3, "name": "Hoki"},
    {id: 4, "name": "Reno"},
    {id: 5, "name": "Kucing"},
];


class UserController implements IUserControllerInterface{    
    index(req: Request, res: Response): Response{
        return res.send(data);
    }

    create(req: Request, res: Response): Response{
        const {id, name}  = req.body;
        data.push({ id, name });
        console.log(`Success in saving id = ${id}, and name = ${name}`)
        return res.send(req.body);
    }

    show(req: Request, res: Response): Response{
        const { id } = req.params;
        let dataPerson = data.find(item => item.id == id)
        console.log(`The id is ${id}`);
        return res.send(dataPerson);
    }

    update(req: Request, res: Response): Response{
        const { id } = req.params;
        const {name}  = req.body;
        let dataperson = data.find(item => item.id == id)
        dataperson.name = name;
        let new_name = dataperson.name;
        return res.send(new_name);
    }


    delete(req: Request, res: Response): Response{
        const { id } = req.params;
        let newdata = data.filter(item => item.id != id);
        let newDataPerson = newdata;
        return res.send(newDataPerson);
    }
}

export default new UserController();