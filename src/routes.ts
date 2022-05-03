import { Router } from "express";
import studentCreateController from "./controllers/studentCreateController";
import studentListController from "./controllers/studentListController";
import studentAlreadyExistsMiddleware from "./middlewares/studentAlreadyExistsMiddleware";



const routes = Router();

routes.post("/alunos",studentAlreadyExistsMiddleware, studentCreateController)
routes.get("/alunos", studentListController )

export default routes;