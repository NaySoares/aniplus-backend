import 'reflect-metadata'
import express from 'express';

import '../typeorm'
import '../../container'


import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);


app.listen(3340, () => console.log('Server is running!'));
