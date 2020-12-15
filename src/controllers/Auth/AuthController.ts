import express, { Request, Response } from 'express';
import Controller from '../../utils/Controller';
import { UserService } from '../../services/User/UserService';
import { IUser } from '../../models/User/IUser';
import AuthService from '../../services/Auth/AuthService';

module.exports = (app: express.Express) => {
    AuthController.init(app, AuthController);
}

class AuthController extends Controller {

    private constructor(app: express.Express) {
        super();
        app.get('/getjwt', this.getJsonWebToken);
    }

    getJsonWebToken(req: Request, res: Response) {
        res.json(AuthService.createJWT());
    }
}
