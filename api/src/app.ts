import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import videoRoutes from "./routes/videos.routes";
/**
 * declaro la constante app que contiene la
 * ejecucion de la funcion
 */
const app = express();
app.set("port", config.PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(videoRoutes);

export default app;
