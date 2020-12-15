import express, { Request, Response } from 'express';
import Controller from '../../utils/Controller';
import { UserService } from '../../services/User/UserService';
import { IUser } from '../../models/User/IUser';

module.exports = (app: express.Express) => {
    UserController.init(app, UserController);
}

class UserController extends Controller {

    private constructor(app: express.Express) {
        super();
        app.get('/users', this.getUsers);
        app.get('/user/:userId', this.getUser);
        app.post('/user', this.postUser);
        app.delete('/user/:userId', this.deleteUser);
        app.put('/user', this.putUser);
    }

    getUsers(req: Request, res: Response) {
        UserService.getUsers()
            .then((response) => res.json(response))
            .catch((error) => res.json(error))
    }

    getUser(req: Request, res: Response) {
        const userId = req.params.userId;
        UserService.getUser(userId)
            .then((response) => res.json(response))
            .catch((error) => res.json(error))
    }

    postUser(req: Request, res: Response) {
        const user: IUser = {
            name: req.body.name,
            age: req.body.age
        };
        UserService.postUser(user)
            .then((response) => res.json(response))
            .catch((error) => res.json(error))
    }

    deleteUser(req: Request, res: Response) {
        const userId = req.params.userId;
        UserService.deleteUser(userId)
            .then((response) => res.json(response))
            .catch((error) => res.json(error))
    }

    putUser(req: Request, res: Response) {
        const user: IUser = {
            _id: req.body.id,
            name: req.body.name,
            age: req.body.age
        };
        UserService.putUser(user)
            .then((response) => res.json(response))
            .catch((error) => res.json(error))
    }
}
