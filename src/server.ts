import app from './app';
import config from './config';
import mongoose from 'mongoose';

async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        app.listen(config.port, () => {
            console.log(`Example app listening on port number ${config.port}`);
        });
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
    }
}

main();