import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import routes from './routes/index'

// import { IGame } from './models/Game';

const app = express()

app.set('port', process.env.PORT || 3001)

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    return next();
});

app.use(routes);

export default app;