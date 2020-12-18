import User from "../../models/User/User";
import { IUser } from "../../models/User/IUser";

export class UserService {

    public static getUsers(): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            User.find()
                .then((users) => {
                    resolve(users);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    public static getUser(id: string): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            User.findOne({ _id: id })
                .then((user) => {
                    resolve(user);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    public static postUser(user: IUser): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            const newUser = new User({
                name: user.name,
                age: user.age
            });
            newUser.save()
                .then((user) => {
                    resolve(user);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    public static deleteUser(id: string): Promise<string> {
        return new Promise((resolve: any, reject: any) => {
            User.deleteOne({ _id: id })
                .then((res) => {
                    if(res.deletedCount) {
                        resolve('Deleted');
                    }else{
                        reject("Error: Id not found");
                    }
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    public static putUser(user: IUser): Promise<string> {
        return new Promise((resolve: any, reject: any) => {
            User.updateOne({ _id: user._id }, user)
                .then((res) => {
                    if(res.nModified) {
                        resolve("Modified");
                    }else{
                        reject("Error: Id not found");
                    }
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
}
