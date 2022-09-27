import mongoose from 'mongoose';
import config from './config/config';
import createCountries from './utils/country';

mongoose.connect(config.DB.URI, {})

const conn = mongoose.connection;

conn.once('open', () => {
    console.log('Database is UP');
    createCountries();
});

conn.on('error', (err) => {
    console.log(err);
    process.exit(0);
});