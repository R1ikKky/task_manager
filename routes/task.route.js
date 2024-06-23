import Router from "express"
import TaskController from "../controllers/task.controller.js";

const router = Router()

router.post(
    "/createTask", TaskController.createTask
  );
  
  router.get(
    "/getAllTasks", TaskController.getTasks
  );


  export default router