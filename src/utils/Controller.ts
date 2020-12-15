import express from "express";

export default class Controller{

    protected static instance: any;

    public static init(app: express.Express, controller: any): any {
        if (this.instance){
            return this.instance;
        }
        return this.instance = new controller(app);
    }
}
