import mongoose from 'mongoose'
import env from './env'

export class Database {

    public connect(): void {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        mongoose.connect(`mongodb://${env.database_server}/${env.database_name}`, options)
            .then(() => {
                console.log("Connected to database !");
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
