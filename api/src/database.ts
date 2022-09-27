import mongoose from 'mongoose';
import config from './config/config';

mongoose.connect(config.DB.URI)

const conn = mongoose.connection;

conn.once('open', () => {
    console.log('Database is UP');
});

conn.on('error', (err) => {
    console.log(err);
    
    process.exit(0);
});