import express from "express";
import { PORT } from "./serverConfig.js";
import userRoutes from './routes/user.routes.js'
import cors from 'cors';
import { reactURL } from "./serverConfig.js";
import { reactURLInternet } from "./serverConfig.js";

const app = express();

app.use(cors({
  origin: [reactURL, reactURLInternet]
}))

app.use(express.json());

app.use(userRoutes);

app.use(express.static("images"));


app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto: ${PORT}...`);
})