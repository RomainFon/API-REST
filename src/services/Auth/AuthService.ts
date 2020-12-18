import express, { Request, Response, NextFunction } from 'express';
import env from '../../config/env';

const jwt = require("jsonwebtoken");
const { readFile } = require('fs').promises;

export default class AuthService {

    public static authenticateToken(req: Request, res: Response, next: NextFunction) {
        const token = this.getJWT(req);
        if (!token) {
            return res.status(401).send({ message: "Unauthorized" });
        }

        jwt.verify(token, env.jwt_token as string, (err: any) => {
            if (err) {
                return res.status(403).send({ message: "Forbidden" });
            }
            next();
        })
    }

    public static createJWT(): string {
        return jwt.sign({}, env.jwt_token);
    }

    private static getJWT(req: Request): string {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        return token || '';
    }

}
