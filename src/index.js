import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import morgan from 'morgan';
import { connection } from './mongodb';
import { router } from './routes';
import Docs from './docs.json'

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api', router);
const options = {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "SavanaPoint Docs",
  customfavIcon: "/assets/favicon.ico"
};
app.use('/', swaggerUi.serve, swaggerUi.setup(Docs, options))
const port = process.env.PORT || 2812;
connection();
app.listen(port, () => console.log(`Server on http://localhost:${port}`))