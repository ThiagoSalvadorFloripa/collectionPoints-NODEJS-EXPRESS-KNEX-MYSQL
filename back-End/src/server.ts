import routes from './routes';
import express from 'express';
import path from 'path';

const app = express();

app.use(express.json());
app.use(routes);

//deixa disponivel para dowload
app.use('/uploads', express.static(path.resolve(__dirname, '.', 'uploads')));

app.listen(3333);